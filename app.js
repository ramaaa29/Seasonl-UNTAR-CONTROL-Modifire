import {globals, positive, negative, personal, byId, blockers, budget} from './data.js';

const strings = {
 ja: {unofficial:'非公式ビルドプランナー',intro:'デバフでポイントを獲得し、バフに振り分ける。自分だけのレイドを組み立てよう。',remaining:'残りポイント',earned:'獲得',spent:'消費',save:'選択を画像保存',reset:'すべて解除',global:'全プレイヤー共通',always:'常時有効 · 6 MODIFIERS',personal:'PERSONAL LOADOUT',instructions:'クリックで選択・解除 / 同時選択不可の組み合わせはロック',positive:'バフ · ポイントを消費',negative:'デバフ · ポイントを獲得',selected:'選択中',common:'共通',conflict:'同時選択不可',with:'と競合',start:'デバフを選んでポイントを獲得',within:'使用可能なポイント内です',over:n=>`${n}ポイント超過 · デバフを追加するかバフを解除`,footer:'Escape from Tarkovの非公式ファンツール。Battlestate Gamesとは関係ありません。',source:'効果・ポイントは提供画像に基づきます。日本語は非公式訳です。\nシーズン開始前の調整により内容が変更される場合があります。',saving:'画像を作成中…',failed:'画像を保存できませんでした。もう一度お試しください。',exportTitle:'選択した個人Modifier',empty:'未選択',selectedNote:n=>`${n}項目選択中`,exportNote:'非公式ファンツール / 提供画像に基づく効果・ポイント / 日本語は非公式訳'},
 en: {unofficial:'UNOFFICIAL BUILD PLANNER',intro:'Earn points with negative modifiers. Spend them on your strengths. Plan your own raid.',remaining:'POINTS REMAINING',earned:'Earned',spent:'Spent',save:'Save loadout image',reset:'Clear all',global:'Shared by all players',always:'ALWAYS ACTIVE · 6 MODIFIERS',personal:'PERSONAL LOADOUT',instructions:'Click to select or remove / Conflicting modifiers are locked',positive:'Buffs · Spend points',negative:'Debuffs · Earn points',selected:'selected',common:'GLOBAL',conflict:'INCOMPATIBLE',with:'Conflicts with',start:'Select negative modifiers to earn points',within:'Your loadout is within budget',over:n=>`${n} points over · Add debuffs or remove buffs`,footer:'Unofficial Escape from Tarkov fan tool. Not affiliated with Battlestate Games.',source:'Effects and points are based on the supplied poster. Japanese is an unofficial translation.\nModifiers may change before the season starts for balancing purposes.',saving:'Creating image…',failed:'Image could not be saved. Please try again.',exportTitle:'Selected personal modifiers',empty:'None selected',selectedNote:n=>`${n} modifiers selected`,exportNote:'Unofficial fan tool / Effects and points based on the supplied poster'}
};
let lang = 'ja';
const selected = new Set();
try {
 const saved = JSON.parse(localStorage.getItem('untar-control-v1') || 'null');
 if (saved?.lang === 'en') lang = 'en';
 for (const id of Array.isArray(saved?.selected) ? saved.selected : []) {
  if (byId.has(id) && !blockers(id, selected).length) selected.add(id);
 }
} catch { /* Storage is optional. */ }
const $ = id => document.getElementById(id);
const tr = key => strings[lang][key];
const sign = n => n > 0 ? `+${n}` : n < 0 ? `−${Math.abs(n)}` : '0';
function persist() { try { localStorage.setItem('untar-control-v1',JSON.stringify({lang,selected:[...selected]})); } catch {} }
function node(tag, cls, text) { const el = document.createElement(tag); if (cls) el.className = cls; if (text !== undefined) el.textContent = text; return el; }
function card(m, global = false) {
 const on = global || selected.has(m.id);
 const blockedBy = global ? [] : blockers(m.id, selected);
 const needsDebuff = !global && !on && m.points < 0 && !negative.some(item => selected.has(item.id));
 const el = node(global ? 'article' : 'button', `mod-card${on ? ' selected' : ''}${blockedBy.length ? ' blocked' : ''}${needsDebuff && !blockedBy.length ? ' awaiting-points' : ''}`);
 el.id = `mod-${m.id}`;
 if (!global) { el.type='button'; el.dataset.modifier=m.id; el.setAttribute('aria-pressed',String(on)); el.disabled=!!blockedBy.length || needsDebuff; }
 const top = node('div','card-top');
 const titles = node('div');
 const title = node('h3','card-title');
 if (on) title.append(node('span','card-check','✓'));
 title.append(document.createTextNode(m.name));
 titles.append(title);
 if (lang==='ja') titles.append(node('p','card-ja',m.ja));
 top.append(titles, node('span',global ? 'common-badge' : 'points',global ? tr('common') : sign(m.points)));
 const desc = node('p','card-description',lang === 'ja' ? m.jp : m.en);
 el.append(top,desc);
 if (blockedBy.length) {
  const label=node('div','conflict-label');
  label.id=`conflict-${m.id}`;
  label.append(node('strong','',`⊘ ${tr('conflict')}`),node('span','',blockedBy.map(id=>byId.get(id).name).join(' / ')));
  el.append(label);
  el.setAttribute('aria-describedby',label.id);
  el.title=`${tr('conflict')}: ${blockedBy.map(id=>byId.get(id).name).join(', ')}`;
 } else if(needsDebuff) {
  const notice=node('div','points-notice',lang==='ja'?'先にデバフを選択してください':'Select a negative modifier first');
  notice.id=`notice-${m.id}`;el.append(notice);el.setAttribute('aria-describedby',notice.id);
 }
 return el;
}
function render(focusId) {
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-t]').forEach(el=>{el.textContent=tr(el.dataset.t);});
 document.querySelectorAll('.language button').forEach(el=>{const active=el.id===`lang-${lang}`;el.setAttribute('aria-selected',String(active));el.tabIndex=active?0:-1;});
 $('global-cards').replaceChildren(...globals.map(m=>card(m,true)));
 $('positive-cards').replaceChildren(...positive.map(m=>card(m)));
 $('negative-cards').replaceChildren(...negative.map(m=>card(m)));
 const b=budget(selected);
 $('remaining').textContent=sign(b.remaining);
 $('earned').textContent=`+${b.earned}`;
 $('spent').textContent=`−${b.spent}`;
 $('status').textContent=b.pass?'PASS':'OVER BUDGET';
 document.querySelector('.budget-panel').classList.toggle('over',!b.pass);
 const max=Math.max(b.earned,b.spent,1);
 $('gauge-fill').style.width=`${b.spent/max*100}%`;
 $('gauge').setAttribute('aria-valuemax',String(max));
 $('gauge').setAttribute('aria-valuenow',String(b.spent));
 $('gauge').setAttribute('aria-valuetext',`${tr('earned')} ${b.earned}, ${tr('spent')} ${b.spent}, ${b.pass?'PASS':'OVER BUDGET'}`);
 $('budget-hint').textContent=!selected.size?tr('start'):b.pass?tr('within'):tr('over')(Math.abs(b.remaining));
 $('positive-count').textContent=positive.filter(m=>selected.has(m.id)).length;
 $('negative-count').textContent=negative.filter(m=>selected.has(m.id)).length;
 $('download').disabled=!selected.size;
 $('reset').disabled=!selected.size;
 persist();
 if(focusId) $(focusId)?.focus({preventScroll:true});
}
document.addEventListener('click',e=>{
 const btn=e.target.closest('[data-modifier]');
 if(!btn || btn.disabled)return;
 const id=btn.dataset.modifier;
 if(selected.has(id))selected.delete(id); else if(!blockers(id,selected).length)selected.add(id);
 render(btn.id);
 const b=budget(selected);
 $('announcement').textContent=`${tr('selectedNote')(selected.size)}. ${tr('remaining')} ${b.remaining}. ${b.pass?'PASS':'OVER BUDGET'}`;
});
for(const code of ['ja','en']) $('lang-'+code).addEventListener('click',()=>{lang=code;render('lang-'+code);});
document.querySelector('.language').addEventListener('keydown',e=>{
 if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;
 e.preventDefault();lang=e.key==='Home'?'ja':e.key==='End'?'en':lang==='ja'?'en':'ja';render('lang-'+lang);
});
$('reset').addEventListener('click',()=>{selected.clear();render();$('announcement').textContent=tr('reset');});

// Native Canvas export: self-contained, no external images, fonts, libraries or network calls.
function wrap(ctx,text,maxWidth) {
 const lines=[];let line='';
 // Keep English words together; wrap Japanese at character boundaries.
 const tokens=text.match(/[A-Za-z0-9]+(?:[’'.,%+−-][A-Za-z0-9]+)*|\s+|[^\x00-\x7F]|./gu)||[];
 for(const token of tokens){
  if(line && ctx.measureText(line+token).width>maxWidth){
   if(/^[、。，．！？）」』】]/u.test(token) && line.length>1){
    const chars=Array.from(line);const last=chars.pop();lines.push(chars.join('').trimEnd());line=last+token;
   }else{lines.push(line.trimEnd());line=token.trimStart();}
  }
  else line+=token;
 }
 if(line)lines.push(line.trimEnd());return lines;
}
async function exportImage(){
 if(!selected.size)return;
 const save=$('download');save.disabled=true;save.querySelector('span').textContent=tr('saving');
 try{
  await document.fonts.ready;
  const exportLang=lang, exportStrings=strings[exportLang];
  const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');
  if(!ctx)throw new Error('Canvas unavailable');
  const font='"Segoe UI", "Yu Gothic UI", Meiryo, sans-serif';
  const b=budget(selected),width=1400,pad=60,colWidth=626,gap=28;
  const columns=[positive.filter(m=>selected.has(m.id)),negative.filter(m=>selected.has(m.id))];
  function layout(items){return items.map(m=>{
   ctx.font=`600 21px ${font}`;const title=wrap(ctx,m.name,colWidth-105);
   ctx.font=`20px ${font}`;const detail=wrap(ctx,exportLang==='ja'?m.jp:m.en,colWidth-44);
   const ja=exportLang==='ja'?wrap(ctx,m.ja,colWidth-44):[];
   return {m,title,detail,ja,height:Math.max(120,26+title.length*28+ja.length*27+14+detail.length*29+22)};
  });}
  const layouts=columns.map(layout);
  const columnHeights=layouts.map(items=>items.length?items.reduce((s,v)=>s+v.height+14,0):80);
  const height=360+Math.max(...columnHeights)+105;
  canvas.width=width;canvas.height=height;
  ctx.fillStyle='#101618';ctx.fillRect(0,0,width,height);
  ctx.fillStyle='#62b8e5';ctx.fillRect(pad,45,116,27);
  ctx.font=`bold 18px ${font}`;ctx.fillStyle='#101618';ctx.fillText('SEASON 2',pad+10,65);
  ctx.fillStyle='#e7eceb';ctx.font=`bold 43px ${font}`;ctx.fillText('UNTAR CONTROL',pad,128);
  ctx.font=`20px ${font}`;ctx.fillStyle='#a7b7be';ctx.fillText(exportStrings.exportTitle,pad,163);
  ctx.fillStyle='#1b2529';ctx.fillRect(pad,190,width-pad*2,104);
  ctx.fillStyle=b.pass?'#b5db98':'#f1a298';ctx.font=`bold 42px ${font}`;ctx.fillText(`${sign(b.remaining)} PT`,pad+24,254);
  ctx.font=`bold 22px ${font}`;ctx.fillText(b.pass?'PASS':'OVER BUDGET',pad+260,251);
  ctx.fillStyle='#bac7cb';ctx.font=`20px ${font}`;ctx.fillText(`${exportStrings.earned} +${b.earned}     /     ${exportStrings.spent} −${b.spent}`,pad+660,250);
  for(let c=0;c<2;c++){
   const x=pad+c*(colWidth+gap),accent=c===0?'#98c57a':'#e58c81';
   ctx.fillStyle=accent;ctx.font=`bold 22px ${font}`;ctx.fillText(c===0?'PERSONAL POSITIVE':'PERSONAL NEGATIVE',x,334);
   let y=355;
   if(!layouts[c].length){ctx.fillStyle='#89989d';ctx.font=`20px ${font}`;ctx.fillText(exportStrings.empty,x+18,y+36);}
   for(const item of layouts[c]){
    ctx.fillStyle=c===0?'#202c22':'#302321';ctx.fillRect(x,y,colWidth,item.height);
    ctx.fillStyle=accent;ctx.fillRect(x,y,4,item.height);
    ctx.font=`bold 24px ${font}`;ctx.textAlign='right';ctx.fillText(sign(item.m.points),x+colWidth-22,y+35);ctx.textAlign='left';
    let textY=y+34;ctx.fillStyle='#edf2eb';ctx.font=`600 21px ${font}`;
    for(const line of item.title){ctx.fillText(line,x+22,textY);textY+=28;}
    ctx.fillStyle=accent;ctx.font=`20px ${font}`;
    for(const line of item.ja){ctx.fillText(line,x+22,textY);textY+=27;}
    textY+=12;ctx.fillStyle='#c2cdca';ctx.font=`20px ${font}`;
    for(const line of item.detail){ctx.fillText(line,x+22,textY);textY+=29;}
    y+=item.height+14;
   }
  }
  ctx.fillStyle='#7f949e';ctx.font=`17px ${font}`;
  ctx.fillText(exportStrings.exportNote,pad,height-42);
  const blob=await new Promise((resolve,reject)=>canvas.toBlob(v=>v?resolve(v):reject(new Error('PNG encoding failed')),'image/png'));
  const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`untar-control-${exportLang}-${new Date().toISOString().slice(0,10)}.png`;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);
 }catch(error){console.error(error);$('announcement').textContent=tr('failed');alert(tr('failed'));}
 finally{save.disabled=!selected.size;save.querySelector('span').textContent=tr('save');}
}
$('download').addEventListener('click',exportImage);
render();

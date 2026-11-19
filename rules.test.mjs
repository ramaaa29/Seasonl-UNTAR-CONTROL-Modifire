import test from 'node:test';
import assert from 'node:assert/strict';
import {globals,positive,negative,personal,byId,conflicts,blockers,budget} from '../data.js';
test('poster inventory and conflict integrity',()=>{
 assert.equal(globals.length,6);assert.equal(positive.length,31);assert.equal(negative.length,25);
 assert.equal(byId.size,56);assert.equal(conflicts.length,15);
 assert(positive.every(m=>m.points<0));assert(negative.every(m=>m.points>0));
 for(const [a,b] of conflicts){assert(byId.has(a));assert(byId.has(b));assert.notEqual(a,b);}
 for(const m of [...globals,...personal]){assert(m.en);assert(m.jp);assert(m.name);}
});
test('zero budget, earned points, exact PASS, and overspending',()=>{
 assert.deepEqual(budget(new Set()),{earned:0,spent:0,remaining:0,pass:true});
 assert.deepEqual(budget(new Set(['exhaustion'])),{earned:5,spent:0,remaining:5,pass:true});
 assert.deepEqual(budget(new Set(['exhaustion','marathon-runner'])),{earned:5,spent:5,remaining:0,pass:true});
 assert.deepEqual(budget(new Set(['exhaustion','marathon-runner','lockpicker'])),{earned:5,spent:6,remaining:-1,pass:false});
 assert.equal(budget(new Set(['lockpicker'])).remaining,-1);
});
test('all confirmed exclusions work in both directions',()=>{
 for(const [a,b] of conflicts){assert(blockers(a,new Set([b])).includes(b));assert(blockers(b,new Set([a])).includes(a));}
 assert.deepEqual(blockers('average',new Set(['hercules','fast-crafting'])).sort(),['fast-crafting','hercules']);
});
test('DIET corrections and unconfirmed exclusions stay selectable',()=>{
 for(const id of ['polyphagia','hypodipsia','polydipsia','chronic-fatigue']){
  assert.deepEqual(blockers('diet',new Set([id])),[]);assert.deepEqual(blockers(id,new Set(['diet'])),[]);
 }
 for(const [a,b] of [['average','tarkov-shooter'],['enhanced-container','kappa-protocol'],['thrombophilia','coagulopathy'],['youth','chronic-fatigue']])assert.deepEqual(blockers(a,new Set([b])),[]);
});

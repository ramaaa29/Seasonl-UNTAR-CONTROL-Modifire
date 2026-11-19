// Transcribed from the supplied Season 2 poster. Japanese text is an unofficial translation.
const mod = (id, name, ja, points, en, jp) => ({id, name, ja, points, en, jp});
export const globals = [
 mod('untar-control','UNTAR CONTROL','国連軍による統制',0,'UN troops appear throughout Tarkov. They are hostile to all Scavs and PMCs who break the rules. UN troops control various areas across locations.','Tarkov各地に国連軍が出現。すべてのScavとルールを破るPMCに敵対し、各ロケーションのエリアを統制する。'),
 mod('tough-times','TOUGH TIMES','厳しい時代',0,'Access to extracts from locations is limited. At the start of the season, player Scav cooldown is significantly increased.','各ロケーションの脱出口へのアクセスが制限される。シーズン開始時はプレイヤーScavのクールダウンが大幅に増加する。'),
 mod('peace-market','PEACE MARKET','平和市場',0,'Flea Market becomes available to all players after completing a new global task. Minimal restrictions on listing items.','新しいグローバルタスク完了後、全プレイヤーがフリーマーケットを利用可能になる。出品制限は最小限。'),
 mod('no-insurance','NO INSURANCE','保険なし',0,'Insurance is unavailable.','保険を利用できない。'),
 mod('supply-shortage','SUPPLY SHORTAGE','物資不足',0,'Tarkov is experiencing shortages of food, medical supplies, large backpacks, and explosives.','食料、医療品、大型バックパック、爆発物が不足する。'),
 mod('smart-pmcs','SMART PMCS','賢いPMC',0,'Skill progression speed is increased by 25%.','スキル成長速度が25%増加する。')
];
export const positive = [
 mod('lockpicker','LOCKPICKER','解錠の達人',-1,'Unlock the ability to pick padlocks on doors and containers using a multitool.','マルチツールでドアやコンテナの南京錠を解錠できる。'),
 mod('introvert','INTROVERT','内向的',-1,'Skill progression speed is increased by 30% when playing solo.','ソロプレイ時のスキル成長速度が30%増加する。'),
 mod('tap-rack-roll','TAP, RACK, ROLL','故障対処の達人',-1,'Start with the Troubleshooting skill at level 40. Malfunction clearing no longer requires inspection.','TroubleshootingスキルがLv40で開始。銃の故障解除時に点検が不要になる。'),
 mod('enhanced-container','ENHANCED SECURE CONTAINER','強化セキュアコンテナ',-2,'Start with Secure Container Epsilon X with the ability to retain the FiR status of items inside even after death.','強化されたEpsilon X コンテナを所持して開始。死亡後も中のアイテムのFiR（レイド内発見）状態を維持する。'),
 mod('fast-crafting','FAST CRAFTING','高速クラフト',-2,'Start with the Crafting skill at level 40. This skill’s progression speed is increased by 100%.','CraftingスキルがLv40で開始。このスキルの成長速度が100%増加する。'),
 mod('refs-builders',"REF’S BUILDERS",'Refの建設業者',-2,'Build Hideout zones with GP coins and Lega Medals.','GPコインとLegaメダルでハイドアウトの施設を建設できる。'),
 mod('kleptomaniac','KLEPTOMANIAC','収集癖',-2,'Start with the Search skill at level 40. This skill’s progression speed is increased by 100%.','SearchスキルがLv40で開始。このスキルの成長速度が100%増加する。'),
 mod('friends-extract',"FRIEND’S EXTRACT",'友人の脱出口',-2,'One additional Scav extract is available in every PMC raid (if the location has them).','PMCレイドでScav用脱出口が1か所追加で利用可能になる（該当する脱出口があるマップのみ）。'),
 mod('heavyweight','HEAVYWEIGHT','重量級',-2,'Movement speed is reduced by 5%. Maximum carry weight is increased by 30 kg (Overweight threshold increased by 5 kg).','移動速度が5%低下。最大携行重量が30kg増加し、重量オーバーの基準値5kg増加する。'),
 mod('cold-blooded','COLD-BLOODED','冷血',-4,'Your in-raid body temperature is lower, making you significantly harder to see with thermal optics.','レイド中の体温が低くなり、サーマルスコープで大幅に発見されにくくなる。'),
 mod('advanced-hideout','ADVANCED HIDEOUT','充実したハイドアウト',-4,'Start with pre-built Hideout zones: Bitcoin Farm, Gym, Scav Case, and more.','Bitcoin Farm、Gym、Scav Caseなどの施設が建設済みの状態で開始する。'),
 mod('peacekeepers-insurance',"PEACEKEEPER’S INSURANCE",'Peacekeeperの保険',-4,'Peacekeeper provides gear insurance service for Euros.','Peacekeeperがユーロで装備の保険サービスを提供する。'),
 mod('marathon-runner','MARATHON RUNNER','マラソンランナー',-5,'Arm and leg stamina is consumed 25% slower.','腕・脚のスタミナ消費が25%遅くなる。'),
 mod('safecracker','SAFECRACKER','金庫破り',-4,'Mechanical keys and keycards have a 50% chance not to lose durability when used.','鍵とキーカードを使用したとき、50%の確率で耐久値を消費しない。'),
 mod('bushborne','BUSHBORNE','茂みの住人',-4,'Walking in vegetation generates 75% less noise and doesn’t inflict movement slowdown.','草木の中を歩く際の音が75%減少し、移動速度が低下しなくなる。'),
 mod('juice-time','JUICE TIME','ジュースの時間',-1,'Consuming a juice drink grants the Painkiller effect for 240 seconds.','ジュースを飲むと240秒間、鎮痛効果を得る。'),
 mod('sailors-nostalgia',"SAILOR’S NOSTALGIA",'船乗りの郷愁',-2,'Consuming canned fish grants the Health Regeneration (+1) effect for 600 seconds.','魚の缶詰を食べると600秒間、体力再生（+1）効果を得る。'),
 mod('youth','YOUTH','若さ',-6,'Energy is consumed 20% slower. Arm and leg stamina is increased by 25 points.','エネルギー消費が20%遅くなり、腕・脚のスタミナが25増加する。'),
 mod('street-tax','STREET TAX','みかじめ料',-2,'Once per week, some Scavs pay you for protection.','週に1回、一部のScavから保護の対価を受け取る。'),
 mod('tarkov-shooter','THE TARKOV SHOOTER','タルコフの狙撃手',-2,'Start with the Bolt-action Rifles skill at level 51.','Bolt-action RiflesスキルがLv51で開始する。'),
 mod('diet','DIET','節約する食事',-1,'All provisions consume 50% less resource.','飲食物を使用したときのアイテムのリソース消費が50%減少する。'),
 mod('hercules','HERCULES','ヘラクレス',-6,'Start with the Strength and Endurance skills at level 20.','StrengthとEnduranceスキルがLv20で開始する。'),
 mod('sprinter','SPRINTER','スプリンター',-4,'Running speed is increased by 15%.','走行速度が15%増加する。'),
 mod('thrombophilia','THROMBOPHILIA','血栓性体質',-6,'Bleeding chance is decreased by 100%.','出血確率が100%低下する。'),
 mod('prodigy','PRODIGY','神童',-4,'Skill progression speed is increased by 20%.','スキル成長速度が20%増加する。'),
 mod('hypodipsia','HYPODIPSIA','渇きを感じにくい',-2,'Hydration is consumed 50% slower.','水分消費が50%遅くなる。'),
 mod('polyphagia','POLYPHAGIA','旺盛な食欲',-2,'Energy is consumed 45% slower.','エネルギー消費が45%遅くなる。'),
 mod('sturdy-bones','STURDY BONES','丈夫な骨',-2,'Limb fracture chance is decreased by 50%. Falling from heights deals 30% less damage.','手足の骨折確率が50%低下し、高所からの落下ダメージが30%減少する。'),
 mod('average','AVERAGE','平均的',-8,'All character skills are set to level 30 but cannot be leveled further.','全キャラクタースキルがLv30になり、それ以上成長しなくなる。'),
 mod('kappa-protocol','KAPPA PROTOCOL','Kappaプロトコル',-8,'Start with Secure container Kappa.','セキュアコンテナKappaを所持して開始する。'),
 mod('lucky','LUCKY','幸運',-1,'Audentes fortuna iuvat!','幸運は勇者に味方する！（具体的な効果はわからない）')
];
export const negative = [
 mod('extrovert','EXTROVERT','外向的',3,'Skill progression speed is decreased by 30% when playing solo.','ソロプレイ時のスキル成長速度が30%低下する。'),
 mod('schizo','SCHIZO','幻聴',2,'Your character occasionally hears phantom sounds.','ときどき実際には存在しない音が聞こえる。'),
 mod('no-repairs','NO REPAIRS','修理禁止',2,'Items cannot be repaired through traders.','トレーダーによるアイテムの修理ができない。'),
 mod('loose-tongue','LOOSE TONGUE','おしゃべり',2,'Your character occasionally does a voice line after performing any action.','何らかの行動の後、ときどきキャラクターが声を発する。'),
 mod('three-fingered','THREE-FINGERED','不器用な手',2,'15% chance of dropping a magazine when reloading.','リロード時に15%の確率でマガジンを落とす。'),
 mod('no-love-from-fence','NO LOVE FROM FENCE','Fenceの不興',2,'Start with Fence reputation at −7.0.','Fenceの評判が−7.0で開始する。'),
 mod('zero-to-hero','ZERO TO HERO','ゼロからの出発',2,'Start with a completely empty character, no bonus items.','キャラクターが何も所持しない状態で開始。ボーナスアイテムもない。'),
 mod('shaky-aim','SHAKY AIM','震える照準',3,'Aiming for more than 3 seconds causes hand tremors, pain, and tunnel vision.','3秒を超えて照準すると手の震え、痛み、視野狭窄が発生する。'),
 mod('no-scav-runs','NO SCAV RUNS','Scav出撃禁止',3,'Unable to play as a Scav.','Scavとして出撃できない。'),
 mod('deadline','DEADLINE','締め切り',4,'You must reach any ending within 30 days. Failure to meet the deadline results in a wipe for the seasonal character.','30日以内にいずれかのエンディングへ到達する必要がある。期限に間に合わないとシーズンキャラクターがワイプされる。'),
 mod('coagulopathy','COAGULOPATHY','凝固障害',3,'Any bleeding immediately becomes a Heavy Bleeding.','すべての出血が即座に重出血になる。'),
 mod('hemophilia','HEMOPHILIA','血友病',2,'Bleeding chance is increased by 70%.','出血確率が70%増加する。'),
 mod('osteoporosis','OSTEOPOROSIS','骨粗しょう症',2,'Limb fracture chance is increased by 50%. Falling from heights deals 50% more damage.','手足の骨折確率が50%増加し、高所からの落下ダメージが50%増加する。'),
 mod('exhaustion','EXHAUSTION','疲弊',5,'Arm and leg stamina is reduced by 20 points.','腕・脚のスタミナが20減少する。'),
 mod('well-that-hurt','WELL THAT HURT!','痛い出費',1,'All medkit uses consume 33% more resource.','医療キット使用時のリソース消費が33%増加する。'),
 mod('incompetent','INCOMPETENT','不器用な成長',8,'Skill progression speed is decreased by 100%.','スキル成長速度が100%低下する。'),
 mod('polydipsia','POLYDIPSIA','強い渇き',1,'Hydration is consumed 25% faster.','水分消費が25%速くなる。'),
 mod('chronic-fatigue','CHRONIC FATIGUE SYNDROME','慢性疲労症候群',1,'Energy is consumed 20% faster.','エネルギー消費が20%速くなる。'),
 mod('personality-vacuum','PERSONALITY VACUUM','人望なし',6,'Charisma skill cannot be increased. All trader items and services cost 50% more.','Charismaスキルが成長しない。全トレーダーの商品とサービスの価格が50%増加する。'),
 mod('dr-jekyll','DR. JEKYLL','ジキル博士',2,'After gaining the Fresh Wound status, it cannot be removed until the end of the raid.','新鮮な傷（Fresh Wound）状態になると、レイド終了まで解除できない。'),
 mod('allergic','ALLERGIC','アレルギー',2,'Become allergic to 4 random items from the Provisions or Medication category.','飲食物・医薬品カテゴリーからランダムに4種類のアイテムに対するアレルギーを持つ。'),
 mod('broken-container','BROKEN SECURE CONTAINER','壊れたセキュアコンテナ',6,'Secure container can only be filled with cash, keys, dogtags, stimulants, special equipment, certain containers, and Battle Pass documents.','セキュアコンテナには現金、鍵、ドッグタグ、注射器、特殊装備、一部のコンテナ、Battle Passの書類のみ収納可能。'),
 mod('no-flea-market','NO FLEA MARKET','フリーマーケット禁止',8,'Trading with players on the Flea Market is disabled.','フリーマーケットでプレイヤーと取引できない。'),
 mod('third-leg','THIRD LEG','第三の脚',1,'Movement speed is decreased by 2%. Buying items at Therapist is 5% cheaper.','移動速度が2%低下する。Therapistでの購入価格が5%安くなる。'),
 mod('unlucky','UNLUCKY','不運',1,'Your bad luck can sometimes have dire consequences.','不運がときに深刻な結果をもたらす。')
];
// Only the pairs explicitly confirmed in this conversation. DIET has no exclusions.
export const conflicts = [
 ['sturdy-bones','osteoporosis'], ['youth','exhaustion'],
 ['thrombophilia','hemophilia'], ['lucky','unlucky'],
 ['hypodipsia','polydipsia'], ['prodigy','incompetent'],
 ['introvert','extrovert'], ['personality-vacuum','third-leg'],
 ['average','hercules'], ['average','kleptomaniac'],
 ['average','fast-crafting'], ['average','tap-rack-roll'],
 ['marathon-runner','sprinter'], ['sprinter','third-leg'], ['youth','polyphagia']
];
export const personal = [...positive, ...negative];
export const byId = new Map(personal.map(m => [m.id, m]));
export function blockers(id, selected) {
 return conflicts.flatMap(([a,b]) => a === id && selected.has(b) ? [b] : b === id && selected.has(a) ? [a] : []);
}
export function budget(selected) {
 let earned = 0, spent = 0;
 for (const id of selected) { const m = byId.get(id); if (!m) continue; if (m.points > 0) earned += m.points; else spent -= m.points; }
 return {earned, spent, remaining: earned - spent, pass: spent <= earned};
}

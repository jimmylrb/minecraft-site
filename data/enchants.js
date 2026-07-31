/**
 * 方块大陆百科 — 附魔 & 药水数据库
 */

// ==================== 附魔 ====================
window.MC_ENCHANTMENTS = [
    { name: '锋利', icon: '🗡️', maxLevel: 5, applies: '剑、斧', desc: '增加近战伤害，每级 +1.25 伤害。' },
    { name: '亡灵杀手', icon: '🧟', maxLevel: 5, applies: '剑、斧', desc: '对僵尸、骷髅等亡灵生物伤害翻倍。' },
    { name: '节肢杀手', icon: '🕷️', maxLevel: 5, applies: '剑、斧', desc: '对蜘蛛、蜜蜂等节肢生物伤害增加。' },
    { name: '击退', icon: '💨', maxLevel: 2, applies: '剑', desc: '击退敌人，每级击退距离增加。' },
    { name: '火焰附加', icon: '🔥', maxLevel: 2, applies: '剑', desc: '攻击点燃敌人，持续 4 秒/级。' },
    { name: '抢夺', icon: '💎', maxLevel: 3, applies: '剑', desc: '增加掉落物数量，每级最多 +1 个。' },
    { name: '横扫之刃', icon: '🌪️', maxLevel: 3, applies: '剑', desc: '增加横扫攻击的伤害（Java 版）。' },
    { name: '力量', icon: '🏹', maxLevel: 5, applies: '弓、弩', desc: '箭矢伤害 +25%/级。' },
    { name: '冲击', icon: '💨', maxLevel: 2, applies: '弓', desc: '箭矢击退效果增强。' },
    { name: '火矢', icon: '🔥', maxLevel: 1, applies: '弓', desc: '箭矢点燃目标。' },
    { name: '无限', icon: '♾️', maxLevel: 1, applies: '弓', desc: '射箭不消耗箭矢（需要背包有 1 根箭）。' },
    { name: '保护', icon: '🛡️', maxLevel: 4, applies: '盔甲', desc: '减少伤害，每级 -4% 伤害。' },
    { name: '火焰保护', icon: '🔥', maxLevel: 4, applies: '盔甲', desc: '减少火焰伤害并缩短燃烧时间。' },
    { name: '爆炸保护', icon: '💥', maxLevel: 4, applies: '盔甲', desc: '减少爆炸伤害和击退。' },
    { name: '弹射物保护', icon: '🏹', maxLevel: 4, applies: '盔甲', desc: '减少箭矢等弹射物伤害。' },
    { name: '摔落保护', icon: '🪂', maxLevel: 4, applies: '靴子', desc: '减少摔落伤害，4 级几乎不掉血。' },
    { name: '荆棘', icon: '🌵', maxLevel: 3, applies: '盔甲', desc: '反弹近战伤害给攻击者。' },
    { name: '水下呼吸', icon: '🫧', maxLevel: 3, applies: '头盔', desc: '延长水下呼吸时间。' },
    { name: '水下速掘', icon: '⛏️', maxLevel: 1, applies: '头盔', desc: '水下挖掘速度恢复正常。' },
    { name: '深海探索者', icon: '🌊', maxLevel: 3, applies: '靴子', desc: '水下移动速度增加。' },
    { name: '冰霜行者', icon: '❄️', maxLevel: 2, applies: '靴子', desc: '走过水面会结冰（可过河）。' },
    { name: '效率', icon: '⚡', maxLevel: 5, applies: '工具', desc: '挖掘速度提升。' },
    { name: '精准采集', icon: '🎯', maxLevel: 1, applies: '工具', desc: '挖掘方块时完整掉落（如挖草方块）。' },
    { name: '时运', icon: '🍀', maxLevel: 3, applies: '镐', desc: '增加矿石掉落数量（钻石、煤等）。' },
    { name: '耐久', icon: '🛠️', maxLevel: 3, applies: '所有装备', desc: '降低耐久消耗速度。' },
    { name: '经验修补', icon: '📖', maxLevel: 1, applies: '所有装备', desc: '吸收经验修复耐久，神器附魔！' },
    { name: '消失诅咒', icon: '😱', maxLevel: 1, applies: '所有装备', desc: '死亡时物品消失（负面诅咒）。' },
    { name: '绑定诅咒', icon: '⛓️', maxLevel: 1, applies: '盔甲', desc: '穿上后无法取下（负面诅咒）。' },
    { name: '灵魂疾行', icon: '👣', maxLevel: 3, applies: '靴子', desc: '在灵魂沙上移动速度加快（下界）。' },
    { name: '忠诚', icon: '🔱', maxLevel: 3, applies: '三叉戟', desc: '投掷三叉戟后自动飞回手中。' },
    { name: '引雷', icon: '⚡', maxLevel: 1, applies: '三叉戟', desc: '雷雨天掷出三叉戟召唤闪电。' },
    { name: '激流', icon: '🌊', maxLevel: 3, applies: '三叉戟', desc: '雨天掷出三叉戟会带你飞！' },
    { name: '穿透', icon: '🎯', maxLevel: 4, applies: '弩', desc: '箭矢穿透多个目标。' },
    { name: '多重射击', icon: '🌀', maxLevel: 1, applies: '弩', desc: '一次射出 3 支箭。' },
    { name: '快速装填', icon: '⚡', maxLevel: 3, applies: '弩', desc: '装填速度加快。' }
];

// ==================== 药水 ====================
window.MC_POTIONS = [
    { name: '治疗药水', icon: '❤️', effect: '瞬间恢复生命', brew: '地狱疣 + 闪烁的西瓜', duration: '瞬间', desc: '基础药水，可升级为喷溅/滞留版本。' },
    { name: '再生药水', icon: '💚', effect: '持续恢复生命', brew: '地狱疣 + 恶魂之泪', duration: '0:45 (基础) / 2:00 (延长)', desc: '持续回血，战斗中的救命药。' },
    { name: '力量药水', icon: '💪', effect: '攻击伤害 +3', brew: '地狱疣 + 烈焰粉', duration: '3:00 (基础) / 8:00 (延长)', desc: '打 Boss 必备，增加近战伤害。' },
    { name: '速度药水', icon: '👟', effect: '移动速度 +20%', brew: '地狱疣 + 糖', duration: '3:00 (基础) / 8:00 (延长)', desc: '跑图、追击必备。' },
    { name: '跳跃药水', icon: '🦘', effect: '跳跃高度增加', brew: '地狱疣 + 兔子脚', duration: '3:00 (基础) / 8:00 (延长)', desc: '跳得更高，落地伤害降低。' },
    { name: '抗火药水', icon: '🔥', effect: '免疫火焰伤害', brew: '地狱疣 + 岩浆膏', duration: '3:00 (基础) / 8:00 (延长)', desc: '下界探险必带！' },
    { name: '水肺药水', icon: '🫧', effect: '水下呼吸', brew: '地狱疣 + 河豚', duration: '3:00 (基础) / 8:00 (延长)', desc: '探索海底神殿和海洋必备。' },
    { name: '夜视药水', icon: '🌙', effect: '黑暗中视物', brew: '地狱疣 + 金胡萝卜', duration: '3:00 (基础) / 8:00 (延长)', desc: '夜晚/洞穴探险实用。' },
    { name: '隐身药水', icon: '👻', effect: '隐身（穿甲可见）', brew: '夜视药水 + 发酵蛛眼', duration: '3:00 (基础) / 8:00 (延长)', desc: 'PVP 偷袭和躲避怪物。' },
    { name: '剧毒药水', icon: '☠️', effect: '持续中毒', brew: '地狱疣 + 蜘蛛眼', duration: '0:45', desc: '对敌人使用，不能致死（剩半颗心）。' },
    { name: '迟缓药水', icon: '🐌', effect: '移动速度降低', brew: '地狱疣 + 发酵蛛眼', duration: '1:30 (基础)', desc: '让敌人行动变慢。' },
    { name: '虚弱药水', icon: '🥀', effect: '近战伤害降低', brew: '地狱疣 + 发酵蛛眼', duration: '1:30 (基础)', desc: '虚弱僵尸村民，然后用金苹果治疗！' },
    { name: '伤害药水', icon: '💢', effect: '瞬间伤害', brew: '治疗药水 + 发酵蛛眼', duration: '瞬间', desc: '对敌人造成直接伤害。' },
    { name: '缓慢坠落药水', icon: '🪂', effect: '坠落速度变慢', brew: '地狱疣 + 幻翼膜', duration: '1:30 (基础)', desc: '从高处跳下不受伤。' },
    { name: '幸运药水', icon: '🍀', effect: '幸运提升（钓鱼/箱）', brew: '地狱疣 + 绿宝石', duration: '5:00', desc: '提高钓鱼获得好东西的概率。' },
    { name: '飘浮药水', icon: '🎈', effect: '持续向上飘', brew: '潜影壳（滞留）', duration: '0:20', desc: '被潜影贝击中会获得此效果。' },
    { name: '迅捷药水', icon: '⚡', effect: '攻击速度提升', brew: '地狱疣 + 糖（基础）', duration: '3:00', desc: '迅捷=速度，别名不同。' }
];

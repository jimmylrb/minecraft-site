/**
 * 方块大陆百科 — 生物图鉴数据库
 */

window.MC_MOBS = [
    // ==================== 被动生物 ====================
    { name: '猪', icon: '🐷', type: '被动', hp: 10, drops: '生猪排', spawn: '主世界草地', dim: '主世界', desc: '最常见的动物，喂胡萝卜可以繁殖。' },
    { name: '牛', icon: '🐄', type: '被动', hp: 10, drops: '生牛肉、皮革', spawn: '主世界草地', dim: '主世界', desc: '皮革的来源，喂小麦繁殖。' },
    { name: '羊', icon: '🐑', type: '被动', hp: 8, drops: '羊毛、生羊肉', spawn: '主世界草地', dim: '主世界', desc: '剪刀剪毛，颜色多样，喂小麦繁殖。' },
    { name: '鸡', icon: '🐔', type: '被动', hp: 4, drops: '生鸡肉、羽毛', spawn: '主世界草地', dim: '主世界', desc: '会下蛋，羽毛是箭的材料。' },
    { name: '兔子', icon: '🐇', type: '被动', hp: 3, drops: '生兔肉、兔皮', spawn: '草原/沙漠', dim: '主世界', desc: '跑得快，喂胡萝卜繁殖。' },
    { name: '马', icon: '🐴', type: '被动', hp: 15-30, drops: '皮革', spawn: '平原', dim: '主世界', desc: '驯服后可骑乘，用金苹果/金胡萝卜驯服。' },
    { name: '驴', icon: '🐴', type: '被动', hp: 15-30, drops: '皮革', spawn: '平原', dim: '主世界', desc: '可放箱子当坐骑，携带物品。' },
    { name: '猫', icon: '🐱', type: '被动', hp: 10, drops: '线', spawn: '村庄', dim: '主世界', desc: '驯服后吓跑苦力怕和幻翼。' },
    { name: '狗（狼）', icon: '🐺', type: '被动', hp: 20, drops: '无', spawn: '森林/针叶林', dim: '主世界', desc: '用骨头驯服，帮你攻击敌对生物。' },
    { name: '村民', icon: '🧑‍🌾', type: '被动', hp: 20, drops: '无', spawn: '村庄', dim: '主世界', desc: '交易伙伴！绿宝石换各种物品。' },
    { name: '狐狸', icon: '🦊', type: '被动', hp: 10, drops: '无', spawn: '针叶林', dim: '主世界', desc: '会偷东西，可用甜浆果繁殖。' },
    { name: '熊猫', icon: '🐼', type: '被动', hp: 20, drops: '无', spawn: '竹林', dim: '主世界', desc: '可爱的国宝，喂竹子。有各种性格。' },
    { name: '北极熊', icon: '🐻‍❄️', type: '中立', hp: 30, drops: '生鳕鱼、生鲑鱼', spawn: '雪原', dim: '主世界', desc: '平时温和，攻击幼崽会被反击。' },
    { name: '海豚', icon: '🐬', type: '被动', hp: 10, drops: '生鳕鱼', spawn: '海洋', dim: '主世界', desc: '喂生鱼带你去沉船宝藏。' },
    { name: '海龟', icon: '🐢', type: '被动', hp: 30, drops: '海草、鳞甲', spawn: '海滩', dim: '主世界', desc: '鳞甲做海龟帽，水下呼吸。' },
    { name: '鱿鱼', icon: '🦑', type: '被动', hp: 10, drops: '墨囊', spawn: '水域', dim: '主世界', desc: '墨囊是黑色染料，能造墨鱼汁。' },
    { name: '发光鱿鱼', icon: '🦑', type: '被动', hp: 10, drops: '荧光墨囊', spawn: '地下水体', dim: '主世界', desc: '会发光，掉落荧光墨囊。' },
    { name: '蝙蝠', icon: '🦇', type: '被动', hp: 6, drops: '无', spawn: '洞穴', dim: '主世界', desc: '洞穴里的噪音制造者，无害。' },
    { name: '鹦鹉', icon: '🦜', type: '被动', hp: 6, drops: '羽毛', spawn: '丛林', dim: '主世界', desc: '喂种子驯服，站你肩膀上。' },
    { name: '雪傀儡', icon: '⛄', type: '被动', hp: 4, drops: '雪球', spawn: '玩家制作', dim: '主世界', desc: '2雪块+1南瓜制作，会扔雪球打怪。' },
    { name: '铁傀儡', icon: '🤖', type: '中立', hp: 100, drops: '铁锭、虞美人', spawn: '村庄/玩家制作', dim: '主世界', desc: '村庄的守护者，攻击伤害极高。' },

    // ==================== 中立生物 ====================
    { name: '末影人', icon: '👾', type: '中立', hp: 40, drops: '末影珍珠', spawn: '主世界/末地', dim: '主世界/末地', desc: '不要对视它！戴南瓜头可避免激怒。' },
    { name: '蜘蛛', icon: '🕷️', type: '敌对', hp: 16, drops: '线、蜘蛛眼', spawn: '夜晚/洞穴', dim: '主世界', desc: '会爬墙，白天在光线下不主动攻击。' },
    { name: '洞穴蜘蛛', icon: '🕷️', type: '敌对', hp: 12, drops: '线、蜘蛛眼', spawn: '废弃矿井', dim: '主世界', desc: '体型小，攻击附带中毒！' },
    { name: '僵尸猪灵', icon: '🐷', type: '中立', hp: 20, drops: '腐肉、金粒', spawn: '下界', dim: '下界', desc: '打它会招来一群同伴！' },

    // ==================== 敌对生物 ====================
    { name: '僵尸', icon: '🧟', type: '敌对', hp: 20, drops: '腐肉、铁锭（稀有）', spawn: '夜晚/洞穴', dim: '主世界', desc: '最常见的怪物，会追你到天亮。' },
    { name: '骷髅', icon: '💀', type: '敌对', hp: 20, drops: '骨头、箭', spawn: '夜晚/洞穴', dim: '主世界', desc: '远程射手，注意躲避箭矢。' },
    { name: '苦力怕', icon: '💥', type: '敌对', hp: 20, drops: '火药', spawn: '夜晚', dim: '主世界', desc: '会自爆的绿色怪，靠近时发出嘶嘶声！' },
    { name: '女巫', icon: '🧙‍♀️', type: '敌对', hp: 26, drops: '药水、红石等', spawn: '沼泽小屋/雷击村民', dim: '主世界', desc: '会扔各种负面药水，还能自己喝药回复。' },
    { name: '幻翼', icon: '👻', type: '敌对', hp: 20, drops: '幻翼膜', spawn: '熬夜太久', dim: '主世界', desc: '连续 3 天不睡觉就会来攻击你！' },
    { name: '溺尸', icon: '🧟', type: '敌对', hp: 20, drops: '腐肉、三叉戟（稀有）', spawn: '海洋/河流', dim: '主世界', desc: '水里的僵尸，会投掷三叉戟。' },
    { name: '尸壳', icon: '🧟', type: '敌对', hp: 20, drops: '腐肉', spawn: '沙漠', dim: '主世界', desc: '沙漠僵尸，攻击附带饥饿效果。' },
    { name: '流浪者', icon: '💀', type: '敌对', hp: 20, drops: '骨头、缓慢箭', spawn: '雪原', dim: '主世界', desc: '雪地骷髅，射出缓慢效果的箭。' },
    { name: '掠夺者', icon: '🏹', type: '敌对', hp: 24, drops: '弩、绿宝石', spawn: '掠夺者前哨站', dim: '主世界', desc: '村庄袭击的成员，用弩射击。' },
    { name: '唤魔者', icon: '🔮', type: '敌对', hp: 24, drops: '不死图腾', spawn: '林地府邸/袭击', dim: '主世界', desc: '召唤尖牙攻击，掉落不死图腾（保命神器）。' },
    { name: '卫道士', icon: '🪓', type: '敌对', hp: 24, drops: '绿宝石', spawn: '林地府邸/袭击', dim: '主世界', desc: '手持斧头的壮汉，近战伤害高。' },
    { name: '恼鬼', icon: '😈', type: '敌对', hp: 20, drops: '无', spawn: '唤魔者召唤', dim: '主世界', desc: '会飞的小恶魔，穿过墙壁攻击。' },
    { name: '史莱姆', icon: '🟢', type: '敌对', hp: 1-16, drops: '黏液球', spawn: '沼泽/地下特定区域', dim: '主世界', desc: '分裂怪，越打越小。' },
    { name: '岩浆怪', icon: '🟠', type: '敌对', hp: 1-16, drops: '岩浆膏', spawn: '下界', dim: '下界', desc: '下界的史莱姆，会跳得很高。' },
    { name: '烈焰人', icon: '🔥', type: '敌对', hp: 20, drops: '烈焰棒', spawn: '下界要塞', dim: '下界', desc: '远程喷火，雪球对它伤害翻倍！' },
    { name: '凋灵骷髅', icon: '💀', type: '敌对', hp: 20, drops: '煤、凋灵骷髅头', spawn: '下界要塞', dim: '下界', desc: '攻击附带凋零效果，戴金盔。' },
    { name: '恶魂', icon: '👹', type: '敌对', hp: 10, drops: '恶魂之泪、火药', spawn: '下界', dim: '下界', desc: '发射火球的大幽灵，哭声吓人。' },
    { name: '猪灵', icon: '🐷', type: '中立', hp: 16, drops: '金粒、金剑', spawn: '下界', dim: '下界', desc: '穿金甲才不会攻击你，用金锭交易。' },
    { name: '疣猪兽', icon: '🐗', type: '敌对', hp: 40, drops: '生猪排、皮革', spawn: '下界绯红森林', dim: '下界', desc: '下界的野猪，会把你顶飞。' },
    { name: '潜影贝', icon: '🦪', type: '敌对', hp: 30, drops: '潜影壳', spawn: '末地城', dim: '末地', desc: '躲在贝壳里发射追踪导弹，弹到会漂浮！' },
    { name: '末影螨', icon: '🐛', type: '敌对', hp: 8, drops: '无', spawn: '末影珍珠投掷处', dim: '末地', desc: '小虫子，会跟着你爬。' },
    { name: '幻术师', icon: '🃏', type: '敌对', hp: 32, drops: '无', spawn: '袭击（困难模式）', dim: '主世界', desc: '会隐形和分身，最难的袭击者之一。' },

    // ==================== Boss ====================
    { name: '末影龙', icon: '🐉', type: 'Boss', hp: 200, drops: '龙蛋、大量经验', spawn: '末地', dim: '末地', desc: '最终 Boss！先摧毁两端的治疗水晶，再用弓射它。' },
    { name: '凋灵', icon: '🌋', type: 'Boss', hp: 300, drops: '下界之星', spawn: '玩家召唤', dim: '任意', desc: '玩家用 3 个凋灵骷髅头+4 灵魂沙召唤，会发射爆头弹。' },
    { name: '远古守卫者', icon: '🐟', type: 'Boss', hp: 80, drops: '海晶碎片、海晶灯', spawn: '海底神殿', dim: '主世界', desc: '给玩家施加"挖掘疲劳"，掉落海晶碎片。' }
];

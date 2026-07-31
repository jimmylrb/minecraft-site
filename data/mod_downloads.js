/**
 * Mod 下载数据库（可搜索）
 * downloadUrl 指向 Modrinth 平台（已验证可用），用户可在平台搜索/下载具体项目
 */
window.MC_MOD_DOWNLOADS = [
    // ============ 优化类 ============
    { name: 'OptiFine 高清修复', icon: '⚡', category: '优化', loader: 'Forge/Fabric', version: '1.8-1.21', desc: '帧数提升 + 光影支持 + 动态材质，低配玩家救星。', downloadUrl: 'https://modrinth.com/search?q=optifine' },
    { name: 'Sodium 钠', icon: '🧪', category: '优化', loader: 'Fabric', version: '1.16-1.21', desc: 'Fabric 生态最强渲染优化，大幅提升 FPS。', downloadUrl: 'https://modrinth.com/mod/sodium' },
    { name: 'Lithium 锂', icon: '⚙️', category: '优化', loader: 'Fabric', version: '1.16-1.21', desc: '服务端/客户端运算逻辑优化，不改变玩法。', downloadUrl: 'https://modrinth.com/mod/lithium' },
    { name: 'Phosphor 磷', icon: '🔦', category: '优化', loader: 'Fabric', version: '1.16-1.21', desc: '重写光照引擎，区块加载更快。', downloadUrl: 'https://modrinth.com/mod/phosphor' },
    { name: 'FerriteCore', icon: '🧲', category: '优化', loader: 'Forge/Fabric', version: '1.19+', desc: '减少内存占用，低内存玩家福音。', downloadUrl: 'https://modrinth.com/mod/ferrite-core' },
    { name: 'Iris 光影', icon: '🌈', category: '优化', loader: 'Fabric', version: '1.16-1.21', desc: 'Fabric 光影加载器，支持大量光影包。', downloadUrl: 'https://modrinth.com/mod/iris' },
    { name: 'Entity Culling', icon: '👁️', category: '优化', loader: 'Forge/Fabric', version: '1.16-1.21', desc: '剔除屏幕外实体渲染，提升帧数。', downloadUrl: 'https://modrinth.com/mod/entityculling' },
    { name: 'Starlight', icon: '⭐', category: '优化', loader: 'Fabric', version: '1.16-1.21', desc: '重写光照引擎，区块生成更快。', downloadUrl: 'https://modrinth.com/mod/starlight' },
    { name: 'Better Fps', icon: '🎮', category: '优化', loader: 'Forge/Fabric', version: '1.12-1.21', desc: '减少渲染开销，稳定帧率。', downloadUrl: 'https://modrinth.com/mod/betterfps' },
    { name: 'Krypton', icon: '🛰️', category: '优化', loader: 'Fabric', version: '1.16-1.21', desc: '网络层优化，多人联机更流畅。', downloadUrl: 'https://modrinth.com/mod/krypton' },

    // ============ 辅助类 ============
    { name: 'JEI 物品管理器', icon: '📦', category: '辅助', loader: 'Forge', version: '1.8-1.21', desc: 'R 查配方，U 查用途，合成表随时看。', downloadUrl: 'https://modrinth.com/mod/jei' },
    { name: 'REI 物品管理器', icon: '📦', category: '辅助', loader: 'Fabric', version: '1.16-1.21', desc: 'JEI 的 Fabric 版替代品。', downloadUrl: 'https://modrinth.com/mod/rei' },
    { name: 'EMI 物品管理器', icon: '📦', category: '辅助', loader: 'Fabric', version: '1.18-1.21', desc: '新兴的 Fabric 物品管理器，轻量快速。', downloadUrl: 'https://modrinth.com/mod/emi' },
    { name: 'Xaero 小地图', icon: '🗺️', category: '辅助', loader: 'Forge/Fabric', version: '1.7-1.21', desc: '小地图 + 路径点 + 死亡点标记。', downloadUrl: 'https://modrinth.com/mod/xaeros-minimap' },
    { name: 'Xaero 世界地图', icon: '🌍', category: '辅助', loader: 'Forge/Fabric', version: '1.7-1.21', desc: 'Xaero 的大地图版本，配合小地图使用。', downloadUrl: 'https://modrinth.com/mod/xaeros-world-map' },
    { name: 'JourneyMap 旅行地图', icon: '🗺️', category: '辅助', loader: 'Forge/Fabric', version: '1.8-1.21', desc: '实时大地图 + 网页同步查看。', downloadUrl: 'https://modrinth.com/mod/journeymap' },
    { name: '苹果皮 AppleSkin', icon: '🍎', category: '辅助', loader: 'Forge/Fabric', version: '1.12-1.21', desc: '显示饱食度恢复量，吃货必备。', downloadUrl: 'https://modrinth.com/mod/appleskin' },
    { name: 'Inventory Tweaks 背包整理', icon: '🎒', category: '辅助', loader: 'Forge', version: '1.8-1.21', desc: '一键整理背包和箱子。', downloadUrl: 'https://modrinth.com/mod/inventory-tweaks' },
    { name: 'Sodium Extra', icon: '✨', category: '辅助', loader: 'Fabric', version: '1.16-1.21', desc: 'Sodium 扩展设置（动画开关、细节设置）。', downloadUrl: 'https://modrinth.com/mod/sodium-extra' },
    { name: 'Mod Menu', icon: '🧩', category: '辅助', loader: 'Fabric', version: '1.14-1.21', desc: 'Fabric 的 Mod 管理界面。', downloadUrl: 'https://modrinth.com/mod/modmenu' },
    { name: 'Controlling', icon: '🎛️', category: '辅助', loader: 'Forge/Fabric', version: '1.12-1.21', desc: '按键冲突管理，重绑按键。', downloadUrl: 'https://modrinth.com/mod/controlling' },
    { name: 'WaveyCapes', icon: '🧣', category: '辅助', loader: 'Forge/Fabric', version: '1.18-1.21', desc: '披风物理摆动效果。', downloadUrl: 'https://modrinth.com/mod/wavey-capes' },
    { name: 'Better Ping Display', icon: '📶', category: '辅助', loader: 'Forge/Fabric', version: '1.12-1.21', desc: 'Tab 列表显示具体延迟数值。', downloadUrl: 'https://modrinth.com/mod/better-ping-display' },
    { name: 'Falling Leaves', icon: '🍂', category: '辅助', loader: 'Forge/Fabric', version: '1.18-1.21', desc: '树叶飘落粒子效果，画面更生动。', downloadUrl: 'https://modrinth.com/mod/fallingleaves' },

    // ============ 内容类 ============
    { name: '暮色森林', icon: '🌲', category: '内容', loader: 'Forge', version: '1.7-1.20', desc: '全新迷雾维度，城堡 + 九头蛇 Boss。', downloadUrl: 'https://modrinth.com/mod/the-twilight-forest' },
    { name: '机械动力 Create', icon: '⚙️', category: '内容', loader: 'Forge/Fabric', version: '1.16-1.21', desc: '齿轮、传送带、蒸汽机机械自动化。', downloadUrl: 'https://modrinth.com/mod/create' },
    { name: '匠魂 Tinkers Construct', icon: '🔨', category: '内容', loader: 'Forge', version: '1.7-1.20', desc: '自定义组合工具，材料决定属性。', downloadUrl: 'https://modrinth.com/mod/tinkers-construct' },
    { name: '神秘时代', icon: '🔮', category: '内容', loader: 'Forge', version: '1.7-1.12', desc: '经典魔法 Mod，法杖 + 炼金 + 研究。', downloadUrl: 'https://modrinth.com/mod/thaumcraft' },
    { name: '应用能源 AE2', icon: '💾', category: '内容', loader: 'Forge', version: '1.7-1.20', desc: '数字存储网络，海量物品管理。', downloadUrl: 'https://modrinth.com/mod/ae2' },
    { name: '冰与火传说', icon: '🐲', category: '内容', loader: 'Forge', version: '1.16-1.20', desc: '龙、海怪等奇幻生物 + 龙装备。', downloadUrl: 'https://modrinth.com/mod/ice-and-fire-dragons' },
    { name: '幸运方块', icon: '🍀', category: '内容', loader: 'Forge/Fabric', version: '1.7-1.20', desc: '打破幸运方块，随机触发事件。', downloadUrl: 'https://modrinth.com/mod/lucky-block' },
    { name: '暮色森林地图', icon: '🗺️', category: '内容', loader: 'Forge', version: '1.7-1.20', desc: '暮色森林的配套地图。', downloadUrl: 'https://modrinth.com/mod/the-twilight-forest' },
    { name: 'Alex 的生物', icon: '🦁', category: '内容', loader: 'Forge/Fabric', version: '1.16-1.21', desc: '新增 80+ 种生物和 60+ 生物变种。', downloadUrl: 'https://modrinth.com/mod/alexs-mobs' },
    { name: '起源 Origins', icon: '🧬', category: '内容', loader: 'Forge/Fabric', version: '1.16-1.21', desc: '选择种族起源，获得独特能力。', downloadUrl: 'https://modrinth.com/mod/origins' },
    { name: "农夫乐事 Farmer's Delight", icon: '🍳', category: '内容', loader: 'Forge/Fabric', version: '1.16-1.21', desc: '农业扩展 + 料理烹饪系统。', downloadUrl: 'https://modrinth.com/mod/farmers-delight' },
    { name: '静谧四季', icon: '🍂', category: '内容', loader: 'Forge/Fabric', version: '1.12-1.21', desc: '四季变化 + 温度系统 + 作物生长。', downloadUrl: 'https://modrinth.com/mod/serene-seasons' },
    { name: '夸克 Quark', icon: '🐦', category: '内容', loader: 'Forge', version: '1.12-1.21', desc: '大量小功能合集，原版风格增强。', downloadUrl: 'https://modrinth.com/mod/quark' },
    { name: '科技复兴', icon: '🔋', category: '内容', loader: 'Forge', version: '1.12-1.21', desc: '科技 Mod，机器 + 能源 + 自动化。', downloadUrl: 'https://modrinth.com/mod/techreborn' },

    // ============ 世界/冒险类 ============
    { name: '地形生成 TerraForged', icon: '🌍', category: '世界', loader: 'Forge', version: '1.16-1.20', desc: '更真实自然的地形生成。', downloadUrl: 'https://modrinth.com/mod/terraforged' },
    { name: '更好的村庄', icon: '🏘️', category: '世界', loader: 'Forge', version: '1.16-1.20', desc: '村庄升级，建筑更真实。', downloadUrl: 'https://modrinth.com/mod/better-village' },
    { name: '维度洞穴', icon: '🕳️', category: '世界', loader: 'Forge/Fabric', version: '1.18-1.21', desc: '巨型洞穴生成，探索更刺激。', downloadUrl: 'https://modrinth.com/mod/dimdungeons' },
    { name: '原版增强 terrain', icon: '🏔️', category: '世界', loader: 'Forge/Fabric', version: '1.16-1.21', desc: 'Terra 地形生成框架。', downloadUrl: 'https://modrinth.com/mod/terra' },

    // ============ 实用工具类 ============
    { name: '旅行者背包', icon: '🎒', category: '实用', loader: 'Forge/Fabric', version: '1.12-1.21', desc: '可穿戴背包 + 睡袋功能。', downloadUrl: 'https://modrinth.com/mod/travelersbackpack' },
    { name: '一键挖矿 VeinMiner', icon: '⛏️', category: '实用', loader: 'Forge', version: '1.7-1.20', desc: '按住按键挖整条矿脉。', downloadUrl: 'https://modrinth.com/mod/veinminer' },
    { name: '轻便照明 Torchmaster', icon: '🔦', category: '实用', loader: 'Forge/Fabric', version: '1.12-1.21', desc: '放置防刷怪区域，告别火把海。', downloadUrl: 'https://modrinth.com/mod/torchmaster' },
    { name: 'Sophisticated Backpacks', icon: '🎒', category: '实用', loader: 'Forge/Fabric', version: '1.16-1.21', desc: '进阶背包，自动拾取 + 升级槽。', downloadUrl: 'https://modrinth.com/mod/sophisticated-backpacks' },
    { name: 'Gadget 小工具', icon: '🔧', category: '实用', loader: 'Forge', version: '1.12-1.20', desc: '方块构建器、远程交换等实用小工具。', downloadUrl: 'https://modrinth.com/mod/gadget' },
    { name: 'Mouse Tweaks', icon: '🖱️', category: '实用', loader: 'Forge/Fabric', version: '1.8-1.21', desc: '鼠标拖拽快速分配物品。', downloadUrl: 'https://modrinth.com/mod/mouse-tweaks' },
    { name: 'WTHIT', icon: '💡', category: '实用', loader: 'Forge/Fabric', version: '1.16-1.21', desc: '显示看向的方块/实体名称。', downloadUrl: 'https://modrinth.com/mod/wthit' },
    { name: 'Jade', icon: '💎', category: '实用', loader: 'Forge/Fabric', version: '1.16-1.21', desc: 'WTHIT 的增强版，显示更多信息。', downloadUrl: 'https://modrinth.com/mod/jade' },

    // ============ 光影/资源类 ============
    { name: 'BSL 光影', icon: '☀️', category: '光影', loader: 'Iris/OptiFine', version: '1.16-1.21', desc: '均衡型光影，画质与性能兼顾。', downloadUrl: 'https://modrinth.com/shader/bsl-shaders' },
    { name: 'Complementary 光影', icon: '🌅', category: '光影', loader: 'Iris/OptiFine', version: '1.16-1.21', desc: '柔和自然的画面效果。', downloadUrl: 'https://modrinth.com/shader/complementary-shaders' },
    { name: 'SEUS 光影', icon: '🌊', category: '光影', loader: 'OptiFine', version: '1.16-1.20', desc: '写实风格光影，画质天花板之一。', downloadUrl: 'https://modrinth.com/shader/seus-shaders' },
    { name: 'Faithful 材质包', icon: '🖌️', category: '光影', loader: '资源包', version: '1.8-1.21', desc: '原版风格高清重绘（32x/64x）。', downloadUrl: 'https://faithful.team/downloads/' },
    { name: 'XeKr 红石显示', icon: '🔴', category: '光影', loader: '资源包', version: '1.12-1.20', desc: '红石信号可视化显示，红石玩家必备。', downloadUrl: 'https://modrinth.com/resourcepack/xekr-redstone-display' },
    { name: '更好的树叶', icon: '🍃', category: '光影', loader: '资源包', version: '1.16-1.21', desc: '树叶更加自然饱满。', downloadUrl: 'https://modrinth.com/resourcepack/better-leaves' },

    // ============ 服务器/多人 ============
    { name: 'Simple Voice Chat', icon: '🎙️', category: '多人', loader: 'Forge/Fabric', version: '1.16-1.21', desc: '游戏内语音聊天，跨服可用。', downloadUrl: 'https://modrinth.com/mod/simple-voice-chat' },
    { name: 'E4MC', icon: '🗺️', category: '多人', loader: 'Forge/Fabric', version: '1.16-1.21', desc: 'Discord 实时地图联动。', downloadUrl: 'https://modrinth.com/mod/e4mc' },
    { name: 'YUNG 的洞穴增强', icon: '🕳️', category: '世界', loader: 'Forge/Fabric', version: '1.16-1.21', desc: '洞穴/矿井结构大幅增强。', downloadUrl: 'https://modrinth.com/mod/yungs-caves' },
    { name: 'Repurposed Structures', icon: '🏚️', category: '世界', loader: 'Forge/Fabric', version: '1.16-1.21', desc: '全新结构变种，探索更丰富。', downloadUrl: 'https://modrinth.com/mod/repurposed-structures' }
];

// 分类列表
window.MC_MOD_DL_CATEGORIES = ['全部', '优化', '辅助', '内容', '世界', '实用', '光影', '多人'];

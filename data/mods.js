/**
 * 方块大陆百科 — Mod 数据库
 */

window.MC_MODS = [
    // ==================== 优化类 ====================
    { name: 'OptiFine（高清修复）', icon: '⚡', category: '优化', loader: 'Forge / Fabric', version: '1.8-1.21', desc: '提升帧数、支持光影（Shaders）、动态材质。低配救星。', feature: ['帧数提升', '光影支持', '动态材质', '视野优化'] },
    { name: 'Sodium（钠）', icon: '🧪', category: '优化', loader: 'Fabric', version: '1.16-1.21', desc: 'Fabric 生态的性能优化核心，大幅提升帧数。', feature: ['大幅提升帧数', '减少卡顿', 'Fabric 生态'] },
    { name: 'Lithium（锂）', icon: '⚙️', category: '优化', loader: 'Fabric', version: '1.16-1.21', desc: '优化服务端和客户端运算逻辑，不改变游戏玩法。', feature: ['逻辑优化', '服务器友好'] },
    { name: 'Phosphor（磷）', icon: '🔦', category: '优化', loader: 'Fabric', version: '1.16-1.21', desc: '重写光照引擎，区块加载更快。', feature: ['光照优化', '加载提速'] },
    { name: 'FerriteCore', icon: '🧲', category: '优化', loader: 'Forge / Fabric', version: '1.19+', desc: '减少内存占用，低内存玩家的福音。', feature: ['内存优化'] },

    // ==================== 辅助类 ====================
    { name: 'JEI（物品管理器）', icon: '📦', category: '辅助', loader: 'Forge / Fabric', version: '1.8-1.21', desc: '查看合成配方和物品用途。R 看配方，U 看用途。', feature: ['配方查询', '物品用途'] },
    { name: 'REI（粗糙物品管理器）', icon: '📦', category: '辅助', loader: 'Fabric', version: '1.16-1.21', desc: 'JEI 的 Fabric 替代品，功能类似。', feature: ['配方查询', 'Fabric 生态'] },
    { name: 'Xaero 小地图', icon: '🗺️', category: '辅助', loader: 'Forge / Fabric', version: '1.7-1.21', desc: '小地图+路径点+死亡点标记，迷路克星。', feature: ['小地图', '路径点', '坐标显示'] },
    { name: 'JourneyMap（旅行地图）', icon: '🗺️', category: '辅助', loader: 'Forge / Fabric', version: '1.8-1.21', desc: '实时大地图+自动标记，支持网页查看。', feature: ['大地图', '自动标记', '网页同步'] },
    { name: '苹果皮（AppleSkin）', icon: '🍎', category: '辅助', loader: 'Forge / Fabric', version: '1.12-1.21', desc: '显示饥饿值恢复量和饱和度，吃货必备。', feature: ['饱食度显示', '食物效果预览'] },
    { name: '背包整理', icon: '🎒', category: '辅助', loader: 'Forge', version: '1.8-1.21', desc: '一键整理背包/箱子，强迫症福音。', feature: ['一键整理', '自动堆叠'] },
    { name: '飞雷神（Elytra）', icon: '🦋', category: '辅助', loader: 'Forge / Fabric', version: '1.16+', desc: '鞘翅使用优化，飞行手感更好。', feature: ['飞行优化'] },

    // ==================== 内容类 ====================
    { name: '暮色森林（Twilight Forest）', icon: '🌲', category: '内容', loader: 'Forge', version: '1.7-1.20', desc: '新增迷雾森林维度，巨型城堡、九头蛇 Boss。', feature: ['新维度', '新 Boss', '新装备'] },
    { name: '机械动力（Create）', icon: '⚙️', category: '内容', loader: 'Forge / Fabric', version: '1.16-1.21', desc: '齿轮、传送带、蒸汽机，真实的机械自动化。', feature: ['机械自动化', '传动系统', '铁路'] },
    { name: "潘马斯农场（Pam's HarvestCraft）", icon: '🌾', category: '内容', loader: 'Forge', version: '1.7-1.20', desc: '几十种作物和上百种新食物，吃货天堂。', feature: ['新作物', '新食物', '料理系统'] },
    { name: "匠魂（Tinkers' Construct）", icon: '🔨', category: '内容', loader: 'Forge', version: '1.7-1.20', desc: '可自定义组合工具，材料决定属性。', feature: ['自定义工具', '材料系统', '模具'] },
    { name: '神秘时代（Thaumcraft）', icon: '🔮', category: '内容', loader: 'Forge', version: '1.7-1.12', desc: '研究魔法、法杖、炼金，经典魔法 Mod。', feature: ['魔法研究', '法杖', '炼金'] },
    { name: '应用能源（Applied Energistics 2）', icon: '💾', category: '内容', loader: 'Forge', version: '1.7-1.20', desc: '数字化存储网络，海量物品管理。', feature: ['数字存储', '自动化网络'] },
    { name: '侏罗纪（Jurassicraft）', icon: '🦖', category: '内容', loader: 'Forge', version: '1.7-1.12', desc: '培育恐龙，建侏罗纪公园！', feature: ['恐龙培育', '基因工程'] },
    { name: '冰与火（Ice and Fire）', icon: '🐲', category: '内容', loader: 'Forge', version: '1.16-1.20', desc: '龙、海怪、蛇发女妖等奇幻生物。', feature: ['龙', '奇幻生物', '龙装备'] },
    { name: '幸运方块（Lucky Block）', icon: '🍀', category: '内容', loader: 'Forge / Fabric', version: '1.7-1.20', desc: '打破幸运方块，随机触发好事或坏事。', feature: ['随机事件', '娱乐'] },
    { name: '小房子（Chisels & Bits）', icon: '🧱', category: '内容', loader: 'Forge', version: '1.12-1.20', desc: '把方块切成小块，极致细节建筑。', feature: ['微缩建筑', '装饰'] },

    // ==================== 冒险/世界类 ====================
    { name: '地形生成（TerraForged）', icon: '🌍', category: '世界', loader: 'Forge', version: '1.16-1.20', desc: '更真实的自然地形生成，高山峡谷。', feature: ['真实地形', '新群系'] },
    { name: '考古（考古与化石）', icon: '🦴', category: '世界', loader: 'Forge', version: '1.12-1.20', desc: '发掘化石，复活远古生物。', feature: ['化石挖掘', '远古生物'] },
    { name: '更好的村庄（Villager）', icon: '🏘️', category: '世界', loader: 'Forge', version: '1.16-1.20', desc: '村庄更真实更大，交易更丰富。', feature: ['村庄升级', '新建筑'] },
    { name: '更真实白天（Enhanced visuals）', icon: '🌅', category: '世界', loader: 'Forge / Fabric', version: '1.16-1.20', desc: '更好的天空、云雾、夜晚效果。', feature: ['视觉升级'] },

    // ==================== 实用工具类 ====================
    { name: 'R键整理（Inventory Sorter）', icon: '🔀', category: '实用', loader: 'Forge / Fabric', version: '1.12-1.21', desc: '按 R 键整理背包和箱子。', feature: ['快速整理'] },
    { name: "旅行者背包（Traveler's Backpack）", icon: '🎒', category: '实用', loader: 'Forge / Fabric', version: '1.12-1.21', desc: '可穿戴背包，扩展存储+睡袋功能。', feature: ['扩展背包', '睡袋'] },
    { name: '小地图雷达（Minimap Radar）', icon: '📡', category: '实用', loader: 'Forge', version: '1.7-1.20', desc: '显示周围生物位置。', feature: ['生物雷达'] },
    { name: '一键挖矿（VeinMiner）', icon: '⛏️', category: '实用', loader: 'Forge', version: '1.7-1.20', desc: '按住按键挖整条矿脉。', feature: ['连锁挖矿'] },
    { name: '便捷照明（Torchmaster）', icon: '🔦', category: '实用', loader: 'Forge / Fabric', version: '1.12-1.21', desc: '放置永久防刷怪区域，不用插满火把。', feature: ['防刷怪区域'] },

    // ==================== 服务器类 ====================
    { name: 'EssentialsX', icon: '🌐', category: '服务器', loader: 'Bukkit/Spigot', version: '跨版本', desc: '服务器基础功能集（传送、家、商店等）。', feature: ['传送', '家', '经济'] },
    { name: 'WorldEdit', icon: '🌍', category: '服务器', loader: 'Bukkit/Spigot', version: '跨版本', desc: '建筑神器，批量编辑方块。', feature: ['批量建造', '选区'] },
    { name: 'WorldGuard', icon: '🛡️', category: '服务器', loader: 'Bukkit/Spigot', version: '跨版本', desc: '区域保护插件，防止破坏。', feature: ['区域保护'] },
    { name: 'LuckPerms', icon: '🎭', category: '服务器', loader: 'Bukkit/Spigot', version: '跨版本', desc: '现代权限管理插件。', feature: ['权限管理'] },
    { name: 'Vault', icon: '💰', category: '服务器', loader: 'Bukkit/Spigot', version: '跨版本', desc: '经济系统 API，配合商店插件。', feature: ['经济API'] },
    { name: 'PlaceholderAPI', icon: '🔧', category: '服务器', loader: 'Bukkit/Spigot', version: '跨版本', desc: '占位符系统，配合其他插件显示数据。', feature: ['占位符'] }
];

// 分类列表
window.MC_MOD_CATEGORIES = ['全部', '优化', '辅助', '内容', '世界', '实用', '服务器'];

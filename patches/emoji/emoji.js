/*
  emoji 补丁包
  github：https://github.com/jin-yufeng/Parser
  docs：https://jin-yufeng.github.io/Parser
  author：JinYufeng
*/
const reg = /\[(\S+?)\]/g;
const data = {
  "笑脸": "😄",
  "生病": "😷",
  "破涕为笑": "😂",
  "吐舌": "😝",
  "脸红": "😳",
  "恐惧": "😱",
  "失望": "😔",
  "无语": "😒",
  "眨眼": "😉",
  "酷": "😎",
  "哭": "😭",
  "痴迷": "😍",
  "吻": "😘",
  "思考": "🤔",
  "困惑": "😕",
  "颠倒": "🙃",
  "钱": "🤑",
  "惊讶": "😲",
  "白眼": "🙄",
  "叹气": "😤",
  "睡觉": "😴",
  "书呆子": "🤓",
  "愤怒": "😡",
  "面无表情": "😑",
  "张嘴": "😮",
  "量体温": "🤒",
  "呕吐": "🤮",
  "光环": "😇",
  "幽灵": "👻",
  "外星人": "👽",
  "机器人": "🤖",
  "捂眼镜": "🙈",
  "捂耳朵": "🙉",
  "捂嘴": "🙊",
  "婴儿": "👶",
  "男孩": "👦",
  "女孩": "👧",
  "男人": "👨",
  "女人": "👩",
  "老人": "👴",
  "老妇人": "👵",
  "警察": "👮",
  "王子": "🤴",
  "公主": "🤴",
  "举手": "🙋",
  "跑步": "🏃",
  "家庭": "👪",
  "眼睛": "👀",
  "鼻子": "👃",
  "耳朵": "👂",
  "舌头": "👅",
  "嘴": "👄",
  "心": "❤️",
  "心碎": "💔",
  "雪人": "☃️",
  "情书": "💌",
  "大便": "💩",
  "闹钟": "⏰",
  "眼镜": "👓",
  "雨伞": "☂️",
  "音乐": "🎵",
  "话筒": "🎤",
  "游戏机": "🎮",
  "喇叭": "📢",
  "耳机": "🎧",
  "礼物": "🎁",
  "电话": "📞",
  "电脑": "💻",
  "打印机": "🖨️",
  "手电筒": "🔦",
  "灯泡": "💡",
  "书本": "📖",
  "信封": "✉️",
  "药丸": "💊",
  "口红": "💄",
  "手机": "📱",
  "相机": "📷",
  "电视": "📺",
  "中": "🀄",
  "垃圾桶": "🚮",
  "厕所": "🚾",
  "感叹号": "❗",
  "禁": "🈲",
  "可": "🉑",
  "彩虹": "🌈",
  "旋风": "🌀",
  "雷电": "⚡",
  "雪花": "❄️",
  "星星": "⭐",
  "水滴": "💧",
  "玫瑰": "🌹",
  "加油": "💪",
  "左": "👈",
  "右": "👉",
  "上": "👆",
  "下": "👇",
  "手掌": "🖐️",
  "好的": "👌",
  "好": "👍",
  "差": "👎",
  "胜利": "✌",
  "拳头": "👊",
  "挥手": "👋",
  "鼓掌": "👏",
  "猴子": "🐒",
  "狗": "🐶",
  "狼": "🐺",
  "猫": "🐱",
  "老虎": "🐯",
  "马": "🐎",
  "独角兽": "🦄",
  "斑马": "🦓",
  "鹿": "🦌",
  "牛": "🐮",
  "猪": "🐷",
  "羊": "🐏",
  "长颈鹿": "🦒",
  "大象": "🐘",
  "老鼠": "🐭",
  "蝙蝠": "🦇",
  "刺猬": "🦔",
  "熊猫": "🐼",
  "鸽子": "🕊️",
  "鸭子": "🦆",
  "兔子": "🐇",
  "老鹰": "🦅",
  "青蛙": "🐸",
  "蛇": "🐍",
  "龙": "🐉",
  "鲸鱼": "🐳",
  "海豚": "🐬",
  "足球": "⚽",
  "棒球": "⚾",
  "篮球": "🏀",
  "排球": "🏐",
  "橄榄球": "🏉",
  "网球": "🎾",
  "骰子": "🎲",
  "鸡腿": "🍗",
  "蛋糕": "🎂",
  "啤酒": "🍺",
  "饺子": "🥟",
  "汉堡": "🍔",
  "薯条": "🍟",
  "意大利面": "🍝",
  "干杯": "🥂",
  "筷子": "🥢",
  "糖果": "🍬",
  "奶瓶": "🍼",
  "爆米花": "🍿",
  "邮局": "🏤",
  "医院": "🏥",
  "银行": "🏦",
  "酒店": "🏨",
  "学校": "🏫",
  "城堡": "🏰",
  "火车": "🚂",
  "高铁": "🚄",
  "地铁": "🚇",
  "公交": "🚌",
  "救护车": "🚑",
  "消防车": "🚒",
  "警车": "🚓",
  "出租车": "🚕",
  "汽车": "🚗",
  "货车": "🚛",
  "自行车": "🚲",
  "摩托": "🛵",
  "红绿灯": "🚥",
  "帆船": "⛵",
  "游轮": "🛳️",
  "轮船": "⛴️",
  "飞机": "✈️",
  "直升机": "🚁",
  "缆车": "🚠",
  "警告": "⚠️",
  "禁止": "⛔"
}
module.exports = {
  parseEmoji: (text) => text.replace(reg, ($, $1) => {
    if (data[$1]) {
      if (data[$1].includes("http"))
        return "<img src=\"" + data[$1] + "\" style=\"width:16px;height:16px;display:inline-block\" ignore >"
      else
        return data[$1];
    } else
      return $;
  }),
  getEmoji: (key) => data[key],
  setEmoji: (key, emoji) => data[key] = emoji,
  removeEmoji: (key) => data[key] = undefined
}
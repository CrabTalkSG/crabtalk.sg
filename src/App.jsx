import React, { useEffect, useState } from "react";

const img = (name) => `/images/${name}`;

const whatsappLink =
  "https://wa.me/6598398671?text=Hi%20Crab%20Talk%2C%20I%20would%20like%20to%20check%20today%27s%20live%20seafood%20availability.";
const telegramLink = "https://t.me/CrabTalkSG";
const mapsLink = "https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac";
const takeAppLink = "https://take.app/crabtalk";
const instagramLink = "https://www.instagram.com/liveseafoodsupply_crabtalksg/";

const heroImages = [
  img("product-yellow-roe-crab-06.jpg"),
  img("product-live-crab-premium.jpg"),
  img("product-boston-lobster-display.jpg"),
  img("feature-8days-original-thumbnail.jpg"),
  img("botak-jazz-feature.jpg"),
];

const productImages = {
  crab: img("product-live-crab-premium.jpg"),
  roe: img("product-yellow-roe-crab-06.jpg"),
  lobster: img("product-boston-lobster-display.jpg"),
  oysters: img("product-oysters-premium-02.jpg"),
  clams: img("product-manila-clams-01.jpg"),
  fish: img("product-live-soon-hock-premium-fish.jpg"),
};

const featureImages = {
  days: img("feature-8days-original-thumbnail.jpg"),
  botak: img("botak-jazz-feature.jpg"),
  ai: img("AI-feature.jpeg"),
};

const content = {
  en: {
    brandSub: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    nav: {
      seafood: "Seafood",
      hours: "Hours",
      telegram: "Telegram",
      features: "Features",
      reviews: "Reviews",
      faq: "FAQ",
      visit: "Visit",
      whatsapp: "WhatsApp",
    },
    eyebrow: "Live Seafood • Fresh Daily • Singapore",
    heroTitle: "Premium live seafood for home cooking.",
    heroCopy:
      "Choose live crabs, lobsters, oysters, clams and premium fish directly from Crab Talk. Fresh daily selections for families, gatherings and seafood lovers who want restaurant-quality seafood at home.",
    visitUs: "Visit us:",
    address: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    whatsappReserve: "WhatsApp to Reserve",
    telegramJoin: "Join Telegram Updates",
    maps: "Open Google Maps",
    orderOnline: "Order Online",
    instagram: "Instagram",
    heroBadge: "Daily arrivals vary. Telegram updates first.",

    trust: [
      {
        title: "Freshness You Can See",
        text: "Pick live seafood directly from our tanks before bringing it home.",
      },
      {
        title: "Reserve Before Coming",
        text: "Popular items move fast. Message us to check today’s availability first.",
      },
      {
        title: "Quality Over Weight",
        text: "For crabs, weight alone does not tell everything. We look at size, condition, vitality and meatiness.",
      },
    ],

    hoursKicker: "Opening Hours",
    hoursTitle: "Plan your visit before coming down",
    hoursDesc:
      "Live seafood availability changes daily. For the best selection, join Telegram or WhatsApp us before visiting.",
    crabTalkHours: [
      "Monday: 10am – 4pm",
      "Sunday, Tuesday & Wednesday: 8am – 6pm",
      "Thursday to Saturday: 8am – 7pm",
    ],
    cookingTitle: "Nearby cooking option",
    cookingText:
      "Fai Kee Fishhead Bee Hoon is located upstairs at #02-74. Publicly listed hours are Tuesday to Saturday, 3pm–9pm. Closed on Sunday and Monday. Cooking capacity is limited, so advance planning is recommended.",
    onlineOrderText:
      "Online ordering is available through Crab Talk’s Take App page. Daily prices and availability may change depending on stock.",

    freshKicker: "Fresh Daily Selection",
    freshTitle: "Choose your seafood",
    freshDesc:
      "Our focus is live seafood supply: selected, packed and ready for home cooking. Availability depends on daily stock.",
    freshSelection: [
      {
        title: "Live Mud Crabs",
        text: "Meaty, active mud crabs selected for steaming, chilli crab, black pepper crab or ginger scallion crab.",
        image: productImages.crab,
      },
      {
        title: "Sri Lanka Roe Crabs",
        text: "Premium roe crabs with rich flavour, firm meat and beautiful roe. Popular for home steaming and family occasions.",
        image: productImages.roe,
      },
      {
        title: "Live Lobsters",
        text: "Boston lobster and green lobster selections depending on daily arrival. Suitable for steaming, yee mee or bee hoon.",
        image: productImages.lobster,
      },
      {
        title: "Fresh Oysters",
        text: "Cold, clean and suitable for seafood platters, gatherings or premium home dining.",
        image: productImages.oysters,
      },
      {
        title: "Manila Clams",
        text: "Great for steaming, chilli lala, white wine garlic style or seafood soup.",
        image: productImages.clams,
      },
      {
        title: "Soon Hock & Premium Fish",
        text: "Live fish options for steaming, Hong Kong style, Teochew style or home cooking.",
        image: productImages.fish,
      },
    ],

    arrivalsKicker: "Popular Daily Arrivals",
    arrivalsTitle: "Check today’s stock before heading down",
    arrivalsDesc:
      "Stock changes quickly, especially on weekends. Telegram is the best place to see fresh arrivals, limited drops and sold-out updates.",
    arrivals: [
      "Live Mud Crabs",
      "Sri Lanka Yellow Roe / Red Roe Crabs",
      "Boston Lobster",
      "Green Lobster",
      "Fresh Oysters",
      "Manila Clams",
      "Soon Hock & Premium Fish",
      "Seasonal Live Seafood",
    ],

    howKicker: "How It Works",
    howTitle: "Simple seafood buying experience",
    howDesc:
      "Designed mainly for customers who want to buy live seafood and cook it fresh at home.",
    steps: [
      {
        number: "01",
        title: "Check Today’s Stock",
        text: "Join Telegram or message us on WhatsApp to check available seafood, sizes and recommendations.",
      },
      {
        number: "02",
        title: "Reserve Your Pick",
        text: "Reserve your preferred crab, lobster, oysters, clams or premium fish before coming down.",
      },
      {
        number: "03",
        title: "Collect & Cook Fresh",
        text: "Bring home and cook your way. Ask us about nearby cooking options only when needed and subject to availability.",
      },
    ],

    cookingIdeasKicker: "Home Cooking Ideas",
    cookingIdeasTitle: "Easy ways to enjoy your seafood",
    cookingIdeas: [
      "Mud Crab: chilli crab, black pepper crab, steamed crab, ginger scallion crab",
      "Lobster: garlic butter, steamed lobster, lobster yee mee, lobster bee hoon",
      "Manila Clams: white wine garlic, chilli lala, steamed clams, seafood soup",
      "Soon Hock: Hong Kong steam, Teochew steam, light soy sauce steam",
      "Oysters: chilled platter, grilled cheese, garlic butter oysters",
    ],

    telegramKicker: "Daily Seafood Updates",
    telegramTitle: "Join Crab Talk on Telegram",
    telegramText:
      "Get faster updates on today’s arrivals, limited seafood drops, popular sizes, reservation reminders and sold-out notices.",
    telegramButton: "Join t.me/CrabTalkSG",
    telegramPoints: [
      "🦀 See fresh arrivals before heading down",
      "🦞 Limited items and promo updates",
      "⚠️ Sold-out notices and reservation reminders",
    ],

    featuresKicker: "Media & Social Features",
    featuresTitle: "As seen online",
    featuresDesc:
      "Crab Talk has been featured by local food media and content creators for live seafood, lobster yee mee and our market-style seafood experience.",
    viewFeature: "View feature →",
    featureCards: [
      {
        title: "Featured on 8 Days",
        text: "Crab Talk’s live seafood and hawker-style cooked seafood collaboration was featured by 8 Days.",
        image: featureImages.days,
        link: "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541",
      },
      {
        title: "Featured by Botak Jazz",
        text: "Botak Jazz tried the lobster yee mee and shared the experience on TikTok.",
        image: featureImages.botak,
        link: "https://www.tiktok.com/@botakjazz/video/7602204733155364116",
      },
      {
        title: "AI in Daily Seafood Work",
        text: "Story feature on how Crab Talk uses AI in daily operations and customer communication.",
        image: featureImages.ai,
        link: "https://www.facebook.com/share/v/1Djwg4h7UP/",
      },
    ],

    reviewsKicker: "Google Reviews",
    reviewsTitle: "See what customers say on Google",
    reviewsDesc:
      "Read the latest real customer reviews, ratings and customer photos directly on our Google Maps listing.",
    reviewCards: [
      {
        title: "Real Customer Feedback",
        text: "View updated customer comments directly from Google Maps.",
      },
      {
        title: "Photos From Visitors",
        text: "See customer-uploaded photos of seafood, the stall and dining experiences.",
      },
      {
        title: "Leave Us a Review",
        text: "Visited Crab Talk? Your review helps more seafood lovers find us.",
      },
    ],
    viewGoogleReviews: "View Google Reviews",

    faqKicker: "FAQ",
    faqTitle: "Common questions",
    faq: [
      {
        q: "Do I need to pre-order?",
        a: "Walk-in is welcome, but reservation is recommended for popular items such as roe crabs, lobsters and premium fish.",
      },
      {
        q: "Can I buy seafood for home cooking?",
        a: "Yes. Crab Talk mainly focuses on live seafood for customers to bring home and cook fresh.",
      },
      {
        q: "Do you sell by weight or by piece?",
        a: "It depends on the item. For crabs, piece pricing may be used because weight alone does not tell the full quality, meatiness or condition.",
      },
      {
        q: "Can the seafood be cooked nearby?",
        a: "Nearby cooking may be available depending on timing and kitchen capacity. Fai Kee is closed on Sunday and Monday.",
      },
      {
        q: "Where are you located?",
        a: "31 Commonwealth Crescent #01-41/42/43 S(149644).",
      },
    ],

    visitKicker: "Visit Crab Talk",
    visitTitle: "Walk in or reserve before coming",
    visitText:
      "For the best selection, join Telegram for updates or message us before visiting. Live seafood availability changes daily, especially for roe crabs, lobsters, oysters, Soon Hock and premium items.",
    getDirections: "Get Directions",
    footer: "© Crab Talk SG — Live Seafood Supply @ Crab Talk",
  },

  zh: {
    brandSub: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    nav: {
      seafood: "海鲜",
      hours: "营业时间",
      telegram: "Telegram",
      features: "媒体报道",
      reviews: "Google评价",
      faq: "常见问题",
      visit: "到店",
      whatsapp: "WhatsApp",
    },
    eyebrow: "活海鲜 • 每日新鲜到货 • 新加坡",
    heroTitle: "适合家里烹煮的高级活海鲜。",
    heroCopy:
      "在 Crab Talk 直接挑选活螃蟹、龙虾、生蚝、蛤蜊和高级活鱼。适合家庭聚餐、周末加菜，以及想在家享受餐厅级海鲜的顾客。",
    visitUs: "地址：",
    address: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    whatsappReserve: "WhatsApp 预订",
    telegramJoin: "加入 Telegram 看每日更新",
    maps: "打开 Google Maps",
    orderOnline: "线上下单",
    instagram: "Instagram",
    heroBadge: "每日到货不同，Telegram 优先更新。",

    trust: [
      {
        title: "新鲜看得见",
        text: "顾客可直接从水缸挑选活海鲜，再带回家烹煮。",
      },
      {
        title: "建议先预订",
        text: "热门海鲜很快售完。来之前可先联系我们确认当天货源。",
      },
      {
        title: "品质不只看重量",
        text: "螃蟹的重量不能代表全部品质。我们会看大小、状态、活力和肉质。",
      },
    ],

    hoursKicker: "营业时间",
    hoursTitle: "来店前建议先确认",
    hoursDesc:
      "活海鲜每日货源不同。想要更多选择，建议先加入 Telegram 或 WhatsApp 咨询。",
    crabTalkHours: [
      "星期一：10am – 4pm",
      "星期日、星期二、星期三：8am – 6pm",
      "星期四至星期六：8am – 7pm",
    ],
    cookingTitle: "附近烹煮选择",
    cookingText:
      "Fai Kee Fishhead Bee Hoon 位于二楼 #02-74。公开资料显示营业时间为星期二至星期六 3pm–9pm，星期日和星期一休息。烹煮能力有限，建议提前安排。",
    onlineOrderText:
      "Crab Talk 的 Take App 页面可线上下单。每日价格和货源会根据当天库存调整。",

    freshKicker: "每日新鲜选择",
    freshTitle: "选择你的海鲜",
    freshDesc:
      "我们主要供应活海鲜：现选、打包，适合带回家新鲜烹煮。货源以每日到货为准。",
    freshSelection: [
      {
        title: "活肉蟹",
        text: "肉质饱满、活力好的泥蟹，适合清蒸、辣椒蟹、黑胡椒蟹或姜葱炒蟹。",
        image: productImages.crab,
      },
      {
        title: "斯里兰卡膏蟹",
        text: "高级膏蟹，蟹膏香浓、肉质结实，非常适合清蒸或家庭聚餐。",
        image: productImages.roe,
      },
      {
        title: "活龙虾",
        text: "每日视货源供应波士顿龙虾或青龙虾，适合清蒸、伊面或米粉。",
        image: productImages.lobster,
      },
      {
        title: "新鲜生蚝",
        text: "冰鲜干净，适合海鲜拼盘、聚会或高级家庭餐。",
        image: productImages.oysters,
      },
      {
        title: "马尼拉蛤蜊",
        text: "适合清蒸、辣椒啦啦、白酒蒜香或海鲜汤。",
        image: productImages.clams,
      },
      {
        title: "笋壳鱼与高级活鱼",
        text: "适合清蒸、港式蒸鱼、潮州蒸或家庭烹煮。",
        image: productImages.fish,
      },
    ],

    arrivalsKicker: "常见每日到货",
    arrivalsTitle: "来店前先查看当天货源",
    arrivalsDesc:
      "库存变化很快，特别是周末。Telegram 是查看新货、限量海鲜和售完通知的最佳方式。",
    arrivals: [
      "活肉蟹",
      "斯里兰卡黄膏蟹 / 红膏蟹",
      "波士顿龙虾",
      "青龙虾",
      "新鲜生蚝",
      "马尼拉蛤蜊",
      "笋壳鱼与高级活鱼",
      "季节性活海鲜",
    ],

    howKicker: "购买方式",
    howTitle: "简单方便的活海鲜购买体验",
    howDesc: "主要适合想购买活海鲜并带回家新鲜烹煮的顾客。",
    steps: [
      {
        number: "01",
        title: "查看当天货源",
        text: "加入 Telegram 或通过 WhatsApp 联系我们，确认当天海鲜、尺寸和推荐。",
      },
      {
        number: "02",
        title: "预订想要的海鲜",
        text: "来店前可先预订螃蟹、龙虾、生蚝、蛤蜊或高级活鱼。",
      },
      {
        number: "03",
        title: "取货回家烹煮",
        text: "带回家用自己喜欢的方式烹煮；如需要附近烹煮选择，请先确认当天是否可安排。",
      },
    ],

    cookingIdeasKicker: "家庭烹煮建议",
    cookingIdeasTitle: "简单又受欢迎的煮法",
    cookingIdeas: [
      "肉蟹：辣椒蟹、黑胡椒蟹、清蒸蟹、姜葱炒蟹",
      "龙虾：蒜香牛油、清蒸、龙虾伊面、龙虾米粉",
      "马尼拉蛤蜊：白酒蒜香、辣椒啦啦、清蒸、海鲜汤",
      "笋壳鱼：港式蒸、潮州蒸、清蒸酱油",
      "生蚝：冰镇拼盘、芝士烤、蒜香牛油烤",
    ],

    telegramKicker: "每日海鲜更新",
    telegramTitle: "加入 Crab Talk Telegram",
    telegramText:
      "更快看到每日新货、限量海鲜、热门尺寸、预订提醒和售完通知。",
    telegramButton: "加入 t.me/CrabTalkSG",
    telegramPoints: [
      "🦀 来店前先看当天新货",
      "🦞 限量海鲜与促销更新",
      "⚠️ 售完通知与预订提醒",
    ],

    featuresKicker: "媒体与社交平台报道",
    featuresTitle: "线上推荐与报道",
    featuresDesc:
      "Crab Talk 曾被本地美食媒体和内容创作者介绍，内容包括活海鲜、龙虾伊面和市场式海鲜体验。",
    viewFeature: "查看报道 →",
    featureCards: [
      {
        title: "8 Days 报道",
        text: "Crab Talk 的活海鲜和熟食合作模式曾被 8 Days 介绍。",
        image: featureImages.days,
        link: "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541",
      },
      {
        title: "Botak Jazz 推荐",
        text: "Botak Jazz 在 TikTok 分享了龙虾伊面的体验。",
        image: featureImages.botak,
        link: "https://www.tiktok.com/@botakjazz/video/7602204733155364116",
      },
      {
        title: "AI 日常经营故事",
        text: "关于 Crab Talk 如何在日常经营和客户沟通中使用 AI 的故事。",
        image: featureImages.ai,
        link: "https://www.facebook.com/share/v/1Djwg4h7UP/",
      },
    ],

    reviewsKicker: "Google 评价",
    reviewsTitle: "查看顾客在 Google 上的真实评价",
    reviewsDesc:
      "点击 Google Maps 查看最新真实顾客评价、评分和顾客上传照片。",
    reviewCards: [
      {
        title: "真实顾客反馈",
        text: "直接在 Google Maps 查看最新顾客留言。",
      },
      {
        title: "顾客上传照片",
        text: "查看顾客拍摄的海鲜、摊位和用餐照片。",
      },
      {
        title: "欢迎留下评价",
        text: "如果您到访过 Crab Talk，您的评价能帮助更多海鲜爱好者找到我们。",
      },
    ],
    viewGoogleReviews: "查看 Google 评价",

    faqKicker: "常见问题",
    faqTitle: "顾客常问",
    faq: [
      {
        q: "需要预订吗？",
        a: "可以直接到店，但膏蟹、龙虾和高级鱼类等热门商品建议先预订。",
      },
      {
        q: "可以买回家自己煮吗？",
        a: "可以。Crab Talk 主要就是供应适合带回家烹煮的活海鲜。",
      },
      {
        q: "海鲜是按重量还是按只卖？",
        a: "视商品而定。螃蟹有时会按只售卖，因为重量不能完全代表品质、肉质和状态。",
      },
      {
        q: "附近可以帮忙烹煮吗？",
        a: "视时间和厨房能力而定。Fai Kee 星期日和星期一休息。",
      },
      {
        q: "地址在哪里？",
        a: "31 Commonwealth Crescent #01-41/42/43 S(149644)。",
      },
    ],

    visitKicker: "到访 Crab Talk",
    visitTitle: "欢迎到店，也建议先预订",
    visitText:
      "想要更多选择，建议先加入 Telegram 看更新，或来店前联系我们。膏蟹、龙虾、生蚝、笋壳鱼和高级海鲜货源每天不同。",
    getDirections: "路线导航",
    footer: "© Crab Talk SG — Live Seafood Supply @ Crab Talk",
  },

  ja: {
    brandSub: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    nav: {
      seafood: "海鮮",
      hours: "営業時間",
      telegram: "Telegram",
      features: "掲載情報",
      reviews: "Google口コミ",
      faq: "FAQ",
      visit: "アクセス",
      whatsapp: "WhatsApp",
    },
    eyebrow: "活き海鮮 • 毎日入荷 • シンガポール",
    heroTitle: "ご自宅で楽しめるプレミアム活き海鮮。",
    heroCopy:
      "Crab Talk では、活き蟹、ロブスター、牡蠣、アサリ、高級活魚を直接お選びいただけます。ご家庭での食事、週末のごちそう、海鮮好きの方におすすめです。",
    visitUs: "住所：",
    address: "31 Commonwealth Crescent #01-41/42/43 S(149644)",
    whatsappReserve: "WhatsAppで予約",
    telegramJoin: "Telegramで入荷情報を見る",
    maps: "Google Mapsを開く",
    orderOnline: "オンライン注文",
    instagram: "Instagram",
    heroBadge: "入荷状況は毎日変わります。Telegramで優先更新。",

    trust: [
      {
        title: "見て分かる新鮮さ",
        text: "水槽から活きた海鮮を直接選び、ご自宅へお持ち帰りいただけます。",
      },
      {
        title: "来店前の予約がおすすめ",
        text: "人気商品は早く売り切れるため、事前に在庫確認がおすすめです。",
      },
      {
        title: "重量だけでは分からない品質",
        text: "蟹は重さだけでなく、サイズ、状態、活力、身入りを見て選ぶことが大切です。",
      },
    ],

    hoursKicker: "営業時間",
    hoursTitle: "ご来店前にご確認ください",
    hoursDesc:
      "活き海鮮の在庫は毎日変わります。良い商品を選ぶために、TelegramまたはWhatsAppで事前確認をおすすめします。",
    crabTalkHours: [
      "月曜日：10am – 4pm",
      "日曜日・火曜日・水曜日：8am – 6pm",
      "木曜日〜土曜日：8am – 7pm",
    ],
    cookingTitle: "近隣の調理オプション",
    cookingText:
      "Fai Kee Fishhead Bee Hoon は2階 #02-74 にあります。公開情報では営業時間は火曜日〜土曜日 3pm–9pm、日曜日と月曜日は休みです。調理対応には限りがあるため、事前確認がおすすめです。",
    onlineOrderText:
      "Crab Talk の Take App ページからオンライン注文も可能です。価格と在庫は日によって変わります。",

    freshKicker: "毎日の新鮮セレクション",
    freshTitle: "海鮮を選ぶ",
    freshDesc:
      "Crab Talk は活き海鮮の販売が中心です。お選びいただいた海鮮を包装し、ご自宅で新鮮に調理できます。",
    freshSelection: [
      {
        title: "活きマッドクラブ",
        text: "身入りの良い活き蟹。蒸し蟹、チリクラブ、ブラックペッパークラブ、ジンジャースキャリオンにおすすめです。",
        image: productImages.crab,
      },
      {
        title: "スリランカ産 蟹味噌・卵入り蟹",
        text: "濃厚な蟹味噌としっかりした身が特徴。蒸し料理や家族の食事に人気です。",
        image: productImages.roe,
      },
      {
        title: "活きロブスター",
        text: "入荷状況によりボストンロブスターやグリーンロブスターをご用意。蒸し料理、伊麺、ビーフンにおすすめです。",
        image: productImages.lobster,
      },
      {
        title: "新鮮な牡蠣",
        text: "冷たく清潔で、海鮮プレートや週末のごちそうにぴったりです。",
        image: productImages.oysters,
      },
      {
        title: "マニラアサリ",
        text: "蒸し料理、チリ風、白ワインガーリック、海鮮スープにおすすめです。",
        image: productImages.clams,
      },
      {
        title: "スーンホック＆高級活魚",
        text: "蒸し魚、香港風、潮州風、ご家庭での海鮮料理に適した活魚をご用意しています。",
        image: productImages.fish,
      },
    ],

    arrivalsKicker: "人気の入荷商品",
    arrivalsTitle: "来店前に本日の在庫を確認",
    arrivalsDesc:
      "特に週末は在庫の動きが早いです。Telegramで新入荷、限定商品、売り切れ情報を確認できます。",
    arrivals: [
      "活きマッドクラブ",
      "スリランカ産 黄膏蟹 / 赤膏蟹",
      "ボストンロブスター",
      "グリーンロブスター",
      "新鮮な牡蠣",
      "マニラアサリ",
      "スーンホック＆高級活魚",
      "季節限定の活き海鮮",
    ],

    howKicker: "購入方法",
    howTitle: "シンプルな活き海鮮の購入体験",
    howDesc:
      "活き海鮮を購入し、ご自宅で新鮮に調理したいお客様向けです。",
    steps: [
      {
        number: "01",
        title: "本日の在庫を確認",
        text: "TelegramまたはWhatsAppで本日の入荷、サイズ、おすすめ商品を確認できます。",
      },
      {
        number: "02",
        title: "希望の商品を予約",
        text: "蟹、ロブスター、牡蠣、アサリ、高級活魚などを来店前に予約できます。",
      },
      {
        number: "03",
        title: "受け取り・自宅で調理",
        text: "お持ち帰り後、お好みの方法で調理できます。近隣の調理オプションは状況により確認可能です。",
      },
    ],

    cookingIdeasKicker: "家庭調理のアイデア",
    cookingIdeasTitle: "おすすめの食べ方",
    cookingIdeas: [
      "マッドクラブ：チリクラブ、ブラックペッパー、蒸し蟹、ジンジャースキャリオン",
      "ロブスター：ガーリックバター、蒸し、ロブスター伊麺、ロブスタービーフン",
      "マニラアサリ：白ワインガーリック、チリ風、蒸し、海鮮スープ",
      "スーンホック：香港風蒸し、潮州蒸し、ライトソイソース蒸し",
      "牡蠣：冷製プレート、チーズ焼き、ガーリックバター焼き",
    ],

    telegramKicker: "毎日の海鮮入荷情報",
    telegramTitle: "Crab Talk の Telegram に参加",
    telegramText:
      "本日の入荷、限定商品、人気サイズ、予約案内、売り切れ情報をより早く確認できます。",
    telegramButton: "t.me/CrabTalkSG に参加",
    telegramPoints: [
      "🦀 来店前に本日の入荷を確認",
      "🦞 限定商品とプロモーション情報",
      "⚠️ 売り切れ情報と予約リマインダー",
    ],

    featuresKicker: "メディア・SNS掲載",
    featuresTitle: "オンラインで紹介されました",
    featuresDesc:
      "Crab Talk は、活き海鮮、ロブスター伊麺、市場スタイルの海鮮体験で、地元メディアやクリエイターに紹介されています。",
    viewFeature: "掲載を見る →",
    featureCards: [
      {
        title: "8 Days 掲載",
        text: "Crab Talk の活き海鮮とホーカー調理コラボが 8 Days に掲載されました。",
        image: featureImages.days,
        link: "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541",
      },
      {
        title: "Botak Jazz に紹介",
        text: "Botak Jazz が TikTok でロブスター伊麺の体験を紹介しました。",
        image: featureImages.botak,
        link: "https://www.tiktok.com/@botakjazz/video/7602204733155364116",
      },
      {
        title: "AI活用ストーリー",
        text: "Crab Talk が日々の業務や顧客対応でAIを活用しているストーリーです。",
        image: featureImages.ai,
        link: "https://www.facebook.com/share/v/1Djwg4h7UP/",
      },
    ],

    reviewsKicker: "Google口コミ",
    reviewsTitle: "Googleでお客様の口コミを見る",
    reviewsDesc:
      "最新のリアルな口コミ、評価、お客様の写真はGoogle Mapsで確認できます。",
    reviewCards: [
      {
        title: "リアルなお客様の声",
        text: "最新のコメントはGoogle Mapsで直接確認できます。",
      },
      {
        title: "お客様の写真",
        text: "海鮮、店舗、食事体験の写真をご覧いただけます。",
      },
      {
        title: "口コミ投稿も歓迎",
        text: "Crab Talkにご来店いただいた方の口コミは、他のお客様の参考になります。",
      },
    ],
    viewGoogleReviews: "Google口コミを見る",

    faqKicker: "FAQ",
    faqTitle: "よくある質問",
    faq: [
      {
        q: "予約は必要ですか？",
        a: "直接来店も可能ですが、蟹、ロブスター、高級魚など人気商品は事前予約がおすすめです。",
      },
      {
        q: "自宅で調理するために買えますか？",
        a: "はい。Crab Talk はご自宅で調理できる活き海鮮の販売が中心です。",
      },
      {
        q: "量り売りですか？一匹売りですか？",
        a: "商品によります。蟹は重量だけでは品質、身入り、状態が分からないため、一匹単位の場合もあります。",
      },
      {
        q: "近くで調理してもらえますか？",
        a: "時間と厨房の状況によります。Fai Kee は日曜日と月曜日が休みです。",
      },
      {
        q: "場所はどこですか？",
        a: "31 Commonwealth Crescent #01-41/42/43 S(149644)。",
      },
    ],

    visitKicker: "Crab Talk へお越しください",
    visitTitle: "来店前の確認・予約がおすすめ",
    visitText:
      "より良い商品を選ぶために、Telegramで入荷情報を確認するか、来店前にお問い合わせください。蟹、ロブスター、牡蠣、スーンホック、高級海鮮は日によって入荷が変わります。",
    getDirections: "道順を見る",
    footer: "© Crab Talk SG — Live Seafood Supply @ Crab Talk",
  },
};

export default function App() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [lang, setLang] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("crabtalk_lang") || "en";
    }
    return "en";
  });

  const t = content[lang];

  useEffect(() => {
    localStorage.setItem("crabtalk_lang", lang);
  }, [lang]);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="site">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #021216;
          color: white;
        }

        .site {
          min-height: 100vh;
          background:
            radial-gradient(circle at 8% 8%, rgba(25, 190, 210, 0.30), transparent 30%),
            radial-gradient(circle at 92% 10%, rgba(255, 205, 96, 0.16), transparent 30%),
            radial-gradient(circle at 50% 55%, rgba(9, 88, 101, 0.20), transparent 36%),
            linear-gradient(180deg, #021216 0%, #062830 48%, #021216 100%);
          overflow-x: hidden;
        }

        a {
          color: inherit;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(18px);
          background: rgba(2, 18, 22, 0.92);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .topbar-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 14px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 250px;
        }

        .brand-mark {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #ffd166, #18c7df);
          color: #021216;
          font-size: 22px;
          box-shadow: 0 0 28px rgba(24, 199, 223, 0.35);
          flex: 0 0 auto;
        }

        .brand-title {
          font-size: 20px;
          font-weight: 900;
          letter-spacing: 0.2px;
        }

        .brand-sub {
          margin-top: 3px;
          font-size: 12px;
          color: #9fd9e4;
          line-height: 1.35;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 13px;
          font-size: 14px;
        }

        .nav a {
          color: #d7f6ff;
          text-decoration: none;
          opacity: 0.88;
          white-space: nowrap;
        }

        .nav a:hover {
          opacity: 1;
          color: #ffd166;
        }

        .nav-cta {
          padding: 10px 15px;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffd166, #ffb703);
          color: #021216 !important;
          font-weight: 900;
          box-shadow: 0 12px 30px rgba(255, 183, 3, 0.22);
        }

        .language-switcher {
          display: flex;
          gap: 6px;
          padding: 5px;
          border-radius: 999px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          flex: 0 0 auto;
        }

        .language-switcher button {
          border: 0;
          cursor: pointer;
          padding: 8px 10px;
          border-radius: 999px;
          background: transparent;
          color: #d7f6ff;
          font-weight: 800;
          font-size: 12px;
        }

        .language-switcher button.active {
          background: linear-gradient(135deg, #ffd166, #ffb703);
          color: #021216;
        }

        .hero {
          max-width: 1180px;
          margin: 0 auto;
          padding: 56px 22px 34px;
          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          gap: 34px;
          align-items: center;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          gap: 8px;
          padding: 8px 13px;
          border-radius: 999px;
          background: rgba(255, 209, 102, 0.12);
          border: 1px solid rgba(255, 209, 102, 0.30);
          color: #ffd166;
          font-size: 13px;
          font-weight: 900;
          margin-bottom: 18px;
        }

        h1 {
          margin: 0;
          font-size: clamp(38px, 5.2vw, 74px);
          line-height: 0.95;
          letter-spacing: -2.2px;
        }

        .hero-copy {
          margin: 22px 0 0;
          max-width: 620px;
          font-size: clamp(16px, 2vw, 20px);
          line-height: 1.65;
          color: #c7e8ef;
        }

        .address {
          margin-top: 20px;
          padding: 15px 17px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.11);
          color: #ffffff;
          font-size: 15px;
          line-height: 1.5;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 19px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 900;
          font-size: 15px;
          transition: transform 0.2s ease, opacity 0.2s ease;
          text-align: center;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-primary {
          color: #021216;
          background: linear-gradient(135deg, #ffd166, #ffb703);
          box-shadow: 0 14px 34px rgba(255, 183, 3, 0.24);
        }

        .btn-secondary {
          color: white;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
        }

        .btn-telegram {
          color: white;
          background: linear-gradient(135deg, #20a8e0, #0b7ea2);
          box-shadow: 0 14px 34px rgba(32, 168, 224, 0.22);
        }

        .hero-frame {
          position: relative;
          border-radius: 30px;
          padding: 10px;
          background:
            linear-gradient(135deg, rgba(255, 209, 102, 0.45), rgba(30, 198, 220, 0.22)),
            rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.38);
        }

        .hero-image-box {
          height: 380px;
          border-radius: 23px;
          overflow: hidden;
          background: #061e23;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #061e23;
        }

        .hero-badge {
          position: absolute;
          left: 24px;
          bottom: 24px;
          padding: 11px 14px;
          border-radius: 16px;
          background: rgba(2, 18, 22, 0.84);
          border: 1px solid rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(10px);
          font-size: 13px;
          color: #d7f6ff;
        }

        .trust-row {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 22px 34px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .trust-card {
          padding: 18px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.10);
        }

        .trust-card h3 {
          margin: 0 0 7px;
          font-size: 18px;
        }

        .trust-card p {
          margin: 0;
          color: #b7d8df;
          font-size: 14px;
          line-height: 1.5;
        }

        .section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 48px 22px;
        }

        .section-head {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 24px;
          margin-bottom: 22px;
        }

        .section-kicker {
          color: #ffd166;
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.8px;
          margin-bottom: 8px;
        }

        h2 {
          margin: 0;
          font-size: clamp(28px, 3.4vw, 46px);
          letter-spacing: -1.2px;
        }

        .section-desc {
          max-width: 560px;
          margin: 0;
          color: #b7d8df;
          line-height: 1.65;
          font-size: 15px;
        }

        .info-panel {
          border-radius: 30px;
          padding: 34px;
          background:
            radial-gradient(circle at top right, rgba(255, 209, 102, 0.16), transparent 34%),
            linear-gradient(135deg, rgba(22, 199, 223, 0.14), rgba(255, 209, 102, 0.08)),
            rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.13);
          box-shadow: 0 22px 70px rgba(0, 0, 0, 0.20);
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-top: 22px;
        }

        .mini-card {
          padding: 20px;
          border-radius: 22px;
          background: rgba(255,255,255,0.065);
          border: 1px solid rgba(255,255,255,0.11);
        }

        .mini-card h3 {
          margin: 0 0 12px;
          font-size: 21px;
        }

        .mini-card p,
        .mini-card li {
          color: #c5e4ea;
          line-height: 1.65;
          font-size: 15px;
        }

        .mini-card ul {
          margin: 0;
          padding-left: 18px;
        }

        .selection-grid,
        .steps-grid,
        .feature-grid,
        .reviews-grid,
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .product-card,
        .step-card,
        .feature-card,
        .review-card,
        .faq-card {
          overflow: hidden;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.11);
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.18);
        }

        .product-card,
        .feature-card {
          transition: transform 0.22s ease, border-color 0.22s ease;
        }

        .product-card:hover,
        .feature-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 209, 102, 0.38);
        }

        .product-image-wrap,
        .feature-image-wrap {
          height: 215px;
          background: #061e23;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-image-wrap {
          height: 185px;
        }

        .product-image,
        .feature-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #061e23;
          padding: 5px;
        }

        .product-body,
        .feature-body,
        .review-card,
        .faq-card {
          padding: 19px 20px 21px;
        }

        .product-body h3,
        .feature-body h3,
        .step-card h3,
        .review-card h3,
        .faq-card h3 {
          margin: 0 0 9px;
          font-size: 22px;
          letter-spacing: -0.4px;
        }

        .product-body p,
        .feature-body p,
        .step-card p,
        .review-card p,
        .faq-card p {
          margin: 0;
          color: #c0dce2;
          font-size: 15px;
          line-height: 1.6;
        }

        .feature-card {
          text-decoration: none;
          color: white;
        }

        .feature-link {
          display: inline-block;
          margin-top: 13px;
          color: #ffd166;
          font-weight: 900;
          font-size: 14px;
        }

        .step-card {
          padding: 26px;
        }

        .step-number {
          color: rgba(255, 209, 102, 0.34);
          font-size: 44px;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 10px;
        }

        .arrivals-list,
        .ideas-list {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-top: 22px;
        }

        .arrival-pill,
        .idea-item,
        .telegram-point {
          padding: 14px 15px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.10);
          color: #d7f6ff;
          font-size: 15px;
          line-height: 1.45;
        }

        .ideas-list {
          grid-template-columns: repeat(2, 1fr);
        }

        .telegram-box,
        .visit-box,
        .google-review-box {
          border-radius: 30px;
          padding: 36px;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 26px;
          align-items: center;
          background:
            radial-gradient(circle at top right, rgba(32, 168, 224, 0.24), transparent 34%),
            linear-gradient(135deg, rgba(22, 199, 223, 0.14), rgba(255, 209, 102, 0.08)),
            rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.13);
          box-shadow: 0 22px 70px rgba(0, 0, 0, 0.20);
        }

        .google-review-box {
          grid-template-columns: 1fr;
        }

        .telegram-box p,
        .visit-box p,
        .google-review-box p {
          margin: 12px 0 0;
          color: #c5e4ea;
          line-height: 1.7;
        }

        .telegram-points,
        .visit-actions {
          display: grid;
          gap: 12px;
        }

        .review-card h3 {
          color: #ffd166;
        }

        .review-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #ffd166, #ffb703);
          color: #021216;
          font-weight: 900;
          margin-bottom: 14px;
        }

        .footer {
          padding: 32px 22px 46px;
          text-align: center;
          color: #88b8c2;
          font-size: 13px;
        }

        .mobile-sticky {
          display: none;
        }

        @media (max-width: 1100px) {
          .topbar-inner {
            flex-wrap: wrap;
          }

          .nav {
            order: 3;
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 960px) {
          .hero {
            grid-template-columns: 1fr;
          }

          .hero-image-box {
            height: 330px;
          }

          .trust-row,
          .selection-grid,
          .feature-grid,
          .steps-grid,
          .reviews-grid,
          .faq-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .telegram-box,
          .visit-box,
          .info-grid {
            grid-template-columns: 1fr;
          }

          .arrivals-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 680px) {
          .topbar-inner {
            padding: 12px 16px;
            align-items: flex-start;
            flex-direction: column;
          }

          .brand {
            min-width: unset;
          }

          .brand-mark {
            width: 38px;
            height: 38px;
            font-size: 20px;
          }

          .brand-title {
            font-size: 18px;
          }

          .brand-sub {
            font-size: 11px;
          }

          .nav {
            display: none;
          }

          .language-switcher {
            width: 100%;
            justify-content: space-between;
          }

          .language-switcher button {
            flex: 1;
          }

          .hero,
          .section,
          .trust-row {
            padding-left: 16px;
            padding-right: 16px;
          }

          .hero {
            padding-top: 32px;
            gap: 24px;
          }

          .hero-copy {
            font-size: 16px;
          }

          .hero-image-box {
            height: 245px;
          }

          .hero-frame {
            border-radius: 24px;
            padding: 8px;
          }

          .hero-image-box {
            border-radius: 18px;
          }

          .hero-badge {
            left: 18px;
            bottom: 18px;
            max-width: calc(100% - 36px);
          }

          .trust-row,
          .selection-grid,
          .feature-grid,
          .steps-grid,
          .reviews-grid,
          .faq-grid,
          .arrivals-list,
          .ideas-list {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .section {
            padding-top: 36px;
            padding-bottom: 36px;
          }

          .section-head {
            display: block;
          }

          .section-desc {
            margin-top: 12px;
          }

          .product-image-wrap {
            height: 188px;
          }

          .feature-image-wrap {
            height: 178px;
          }

          .step-card,
          .telegram-box,
          .visit-box,
          .info-panel,
          .google-review-box {
            padding: 22px;
            border-radius: 22px;
          }

          .hero-actions {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }

          .mobile-sticky {
            position: fixed;
            left: 10px;
            right: 10px;
            bottom: 10px;
            z-index: 70;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            padding: 9px;
            border-radius: 999px;
            background: rgba(2, 18, 22, 0.90);
            border: 1px solid rgba(255, 255, 255, 0.14);
            backdrop-filter: blur(16px);
            box-shadow: 0 18px 45px rgba(0, 0, 0, 0.35);
          }

          .mobile-sticky a {
            padding: 11px 7px;
            border-radius: 999px;
            text-align: center;
            text-decoration: none;
            font-size: 12px;
            font-weight: 900;
          }

          .mobile-whatsapp {
            background: linear-gradient(135deg, #ffd166, #ffb703);
            color: #021216;
          }

          .mobile-telegram {
            background: linear-gradient(135deg, #20a8e0, #0b7ea2);
            color: white;
          }

          .mobile-map {
            background: rgba(255, 255, 255, 0.10);
            color: white;
          }

          .footer {
            padding-bottom: 92px;
          }
        }

        @media (max-width: 420px) {
          .hero-image-box {
            height: 220px;
          }

          .product-image-wrap {
            height: 174px;
          }

          .feature-image-wrap {
            height: 168px;
          }

          .address {
            font-size: 14px;
          }
        }
      `}</style>

      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <div className="brand-mark">🦀</div>
            <div>
              <div className="brand-title">Crab Talk SG</div>
              <div className="brand-sub">{t.brandSub}</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#selection">{t.nav.seafood}</a>
            <a href="#hours">{t.nav.hours}</a>
            <a href="#telegram">{t.nav.telegram}</a>
            <a href="#features">{t.nav.features}</a>
            <a href="#reviews">{t.nav.reviews}</a>
            <a href="#faq">{t.nav.faq}</a>
            <a href="#visit">{t.nav.visit}</a>
            <a className="nav-cta" href={whatsappLink}>
              {t.nav.whatsapp}
            </a>
          </nav>

          <div className="language-switcher">
            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              className={lang === "zh" ? "active" : ""}
              onClick={() => setLang("zh")}
            >
              中文
            </button>
            <button
              className={lang === "ja" ? "active" : ""}
              onClick={() => setLang("ja")}
            >
              日本語
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div>
            <div className="eyebrow">{t.eyebrow}</div>
            <h1>{t.heroTitle}</h1>
            <p className="hero-copy">{t.heroCopy}</p>

            <div className="address">
              <strong>{t.visitUs}</strong>
              <br />
              {t.address}
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href={whatsappLink}>
                {t.whatsappReserve}
              </a>
              <a
                className="btn btn-telegram"
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.telegramJoin}
              </a>
              <a
                className="btn btn-secondary"
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.maps}
              </a>
            </div>
          </div>

          <div className="hero-frame">
            <div className="hero-image-box">
              <img
                className="hero-image"
                src={heroImages[heroIndex]}
                alt="Crab Talk premium live seafood"
              />
            </div>
            <div className="hero-badge">{t.heroBadge}</div>
          </div>
        </section>

        <div className="trust-row">
          {t.trust.map((item) => (
            <div className="trust-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <section className="section" id="hours">
          <div className="info-panel">
            <div className="section-kicker">{t.hoursKicker}</div>
            <h2>{t.hoursTitle}</h2>
            <p className="section-desc">{t.hoursDesc}</p>

            <div className="info-grid">
              <div className="mini-card">
                <h3>Crab Talk</h3>
                <ul>
                  {t.crabTalkHours.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="hero-actions">
                  <a className="btn btn-primary" href={whatsappLink}>
                    {t.whatsappReserve}
                  </a>
                  <a
                    className="btn btn-secondary"
                    href={takeAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.orderOnline}
                  </a>
                </div>
              </div>

              <div className="mini-card">
                <h3>{t.cookingTitle}</h3>
                <p>{t.cookingText}</p>
                <p>{t.onlineOrderText}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="selection">
          <div className="section-head">
            <div>
              <div className="section-kicker">{t.freshKicker}</div>
              <h2>{t.freshTitle}</h2>
            </div>
            <p className="section-desc">{t.freshDesc}</p>
          </div>

          <div className="selection-grid">
            {t.freshSelection.map((item) => (
              <article className="product-card" key={item.title}>
                <div className="product-image-wrap">
                  <img
                    className="product-image"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="product-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="info-panel">
            <div className="section-kicker">{t.arrivalsKicker}</div>
            <h2>{t.arrivalsTitle}</h2>
            <p className="section-desc">{t.arrivalsDesc}</p>

            <div className="arrivals-list">
              {t.arrivals.map((item) => (
                <div className="arrival-pill" key={item}>
                  {item}
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <a
                className="btn btn-telegram"
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.telegramJoin}
              </a>
              <a className="btn btn-primary" href={whatsappLink}>
                {t.whatsappReserve}
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <div className="section-kicker">{t.howKicker}</div>
              <h2>{t.howTitle}</h2>
            </div>
            <p className="section-desc">{t.howDesc}</p>
          </div>

          <div className="steps-grid">
            {t.steps.map((item) => (
              <article className="step-card" key={item.title}>
                <div className="step-number">{item.number}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="info-panel">
            <div className="section-kicker">{t.cookingIdeasKicker}</div>
            <h2>{t.cookingIdeasTitle}</h2>

            <div className="ideas-list">
              {t.cookingIdeas.map((item) => (
                <div className="idea-item" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="telegram">
          <div className="telegram-box">
            <div>
              <div className="section-kicker">{t.telegramKicker}</div>
              <h2>{t.telegramTitle}</h2>
              <p>{t.telegramText}</p>

              <div className="hero-actions">
                <a
                  className="btn btn-telegram"
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.telegramButton}
                </a>
                <a className="btn btn-primary" href={whatsappLink}>
                  {t.whatsappReserve}
                </a>
              </div>
            </div>

            <div className="telegram-points">
              {t.telegramPoints.map((point) => (
                <div className="telegram-point" key={point}>
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="section-head">
            <div>
              <div className="section-kicker">{t.featuresKicker}</div>
              <h2>{t.featuresTitle}</h2>
            </div>
            <p className="section-desc">{t.featuresDesc}</p>
          </div>

          <div className="feature-grid">
            {t.featureCards.map((item) => (
              <a
                className="feature-card"
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="feature-image-wrap">
                  <img
                    className="feature-image"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="feature-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="feature-link">{t.viewFeature}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="reviews">
          <div className="google-review-box">
            <div>
              <div className="section-kicker">{t.reviewsKicker}</div>
              <h2>{t.reviewsTitle}</h2>
              <p className="section-desc">{t.reviewsDesc}</p>

              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.viewGoogleReviews}
                </a>
                <a
                  className="btn btn-secondary"
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.maps}
                </a>
              </div>
            </div>

            <div className="reviews-grid">
              {t.reviewCards.map((item, index) => (
                <div className="review-card" key={item.title}>
                  <div className="review-icon">{index + 1}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-head">
            <div>
              <div className="section-kicker">{t.faqKicker}</div>
              <h2>{t.faqTitle}</h2>
            </div>
          </div>

          <div className="faq-grid">
            {t.faq.map((item) => (
              <div className="faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="visit">
          <div className="visit-box">
            <div>
              <div className="section-kicker">{t.visitKicker}</div>
              <h2>{t.visitTitle}</h2>
              <p>{t.visitText}</p>
            </div>

            <div className="visit-actions">
              <a className="btn btn-primary" href={whatsappLink}>
                {t.whatsappReserve}
              </a>
              <a
                className="btn btn-telegram"
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.telegramJoin}
              </a>
              <a
                className="btn btn-secondary"
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.getDirections}
              </a>
              <a
                className="btn btn-secondary"
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.instagram}
              </a>
            </div>
          </div>
        </section>
      </main>

      <div className="mobile-sticky">
        <a className="mobile-whatsapp" href={whatsappLink}>
          WhatsApp
        </a>
        <a
          className="mobile-telegram"
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
        <a
          className="mobile-map"
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Map
        </a>
      </div>

      <footer className="footer">{t.footer}</footer>
    </div>
  );
}

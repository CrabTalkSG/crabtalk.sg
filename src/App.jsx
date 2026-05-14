import { useEffect, useMemo, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/6598398671";
const TELEGRAM_LINK = "https://t.me/CrabTalkSG";
const MAPS_LINK = "https://maps.app.goo.gl/1GKdK2y6jpbqfg8N8?g_st=ac";
const EIGHT_DAYS_LINK =
  "https://www.8days.sg/eatanddrink/hawkerfood/commonwealth-crab-talk-fai-kee-live-seafood-hawker-collab-856541";
const BOTAK_JAZZ_LINK =
  "https://www.tiktok.com/@botakjazz/video/7602204733155364116";
const AI_FEATURE_LINK = "https://www.facebook.com/share/v/1Djwg4h7UP/";

const img = (name) => `/images/${name}`;

const copy = {
  en: {
    navHome: "Home",
    navSelection: "Fresh Selection",
    navCooking: "How It Works",
    navFeatures: "Features",
    navVisit: "Visit Us",
    whatsapp: "WhatsApp Order",
    telegram: "Telegram Updates",
    map: "Open Google Maps",
    badge: "Live Seafood • Home Cooking • Premium Crabs",
    heroTitle: "Live Seafood Supply @ Crab Talk",
    heroSub:
      "Premium live crabs, lobsters, oysters, clams and seasonal seafood selected daily at Commonwealth Crescent Market.",
    heroNote:
      "Buy live seafood for home cooking, or ask us for suitable cooking suggestions based on your seafood choice.",
    address: "31 Commonwealth Crescent #01-41/42/43 Singapore 149644",
    freshTitle: "Fresh Daily Selection",
    freshSub:
      "Availability changes daily. WhatsApp us before coming down for the latest arrivals, sizes and recommendations.",
    homeTitle: "Best for Home Cooking",
    homeSub:
      "Choose your live seafood, bring it home, and prepare it your way. We can recommend suitable cooking styles based on the seafood condition and size.",
    faiKeeTitle: "Optional Cooking Support Nearby",
    faiKeeSub:
      "Selected seafood may be cooked nearby by Fai Kee, subject to their daily capacity, timing and cooking fees. Pre-booking is recommended.",
    featureTitle: "Featured Stories",
    featureSub:
      "Crab Talk has been featured by food media and creators for our live seafood concept and Commonwealth market experience.",
    reviewTitle: "What Customers Often Mention",
    reviewSub:
      "Common feedback from Google reviews and customer comments focuses on freshness, friendly recommendations and clear seafood selection advice.",
    visitTitle: "Visit Crab Talk",
    hoursTitle: "Opening Hours",
    finalTitle: "Planning seafood for dinner or gathering?",
    finalSub:
      "Message us first for today’s live seafood availability, size options and best cooking suggestions.",
  },
  zh: {
    navHome: "首页",
    navSelection: "每日海鲜",
    navCooking: "购买方式",
    navFeatures: "媒体报道",
    navVisit: "到店地址",
    whatsapp: "WhatsApp 预订",
    telegram: "Telegram 更新",
    map: "打开 Google Maps",
    badge: "活海鲜 • 家庭烹煮 • 优质螃蟹",
    heroTitle: "Crab Talk 活海鲜供应",
    heroSub:
      "每日精选优质活蟹、龙虾、生蚝、蛤蜊及季节性海鲜，地点位于 Commonwealth Crescent Market。",
    heroNote:
      "适合购买回家烹煮，也可向我们询问适合的烹调建议。",
    address: "31 Commonwealth Crescent #01-41/42/43 Singapore 149644",
    freshTitle: "每日新鲜选择",
    freshSub:
      "海鲜供应每日不同。建议来之前先 WhatsApp 查询当天到货、大小和推荐。",
    homeTitle: "适合家庭烹煮",
    homeSub:
      "现场挑选活海鲜，带回家按自己喜欢的方式烹调。我们可根据海鲜大小和状态推荐做法。",
    faiKeeTitle: "附近可协助烹煮",
    faiKeeSub:
      "部分海鲜可交由附近 Fai Kee 协助烹煮，但需视当天人手、时间及收费而定，建议提前预订。",
    featureTitle: "媒体与达人推荐",
    featureSub:
      "Crab Talk 曾因活海鲜购买体验及 Commonwealth 市场特色受到媒体与美食创作者关注。",
    reviewTitle: "顾客常提到的优点",
    reviewSub:
      "Google 评论和顾客反馈常提到海鲜新鲜、服务亲切、推荐清楚。",
    visitTitle: "欢迎到访 Crab Talk",
    hoursTitle: "营业时间",
    finalTitle: "今晚想吃海鲜？",
    finalSub:
      "先 WhatsApp 我们查询当天活海鲜、大小选择和适合烹调方式。",
  },
  jp: {
    navHome: "ホーム",
    navSelection: "本日の海鮮",
    navCooking: "購入方法",
    navFeatures: "紹介記事",
    navVisit: "アクセス",
    whatsapp: "WhatsAppで注文",
    telegram: "Telegram更新",
    map: "Google Mapsを開く",
    badge: "活海鮮 • 家庭料理 • プレミアム蟹",
    heroTitle: "Crab Talk 活海鮮サプライ",
    heroSub:
      "Commonwealth Crescent Marketで、活蟹、ロブスター、牡蠣、アサリ、季節の海鮮を毎日厳選しています。",
    heroNote:
      "ご自宅での調理用に購入できます。海鮮に合う調理方法もご相談ください。",
    address: "31 Commonwealth Crescent #01-41/42/43 Singapore 149644",
    freshTitle: "毎日の新鮮な海鮮",
    freshSub:
      "入荷内容は日によって変わります。来店前にWhatsAppで在庫、サイズ、おすすめを確認してください。",
    homeTitle: "家庭料理に最適",
    homeSub:
      "活海鮮を選び、ご自宅でお好みの調理方法で楽しめます。サイズや状態に合わせて調理方法も提案します。",
    faiKeeTitle: "近くで調理サポートも可能",
    faiKeeSub:
      "一部の海鮮は近くのFai Keeで調理可能ですが、当日の混雑状況、時間、調理料金によります。事前予約推奨です。",
    featureTitle: "メディア・クリエイター紹介",
    featureSub:
      "Crab Talkは、活海鮮の購入体験とCommonwealth市場の魅力で紹介されています。",
    reviewTitle: "お客様からよく聞く声",
    reviewSub:
      "Googleレビューやお客様の声では、鮮度、親切な対応、分かりやすいおすすめがよく挙げられています。",
    visitTitle: "Crab Talkへお越しください",
    hoursTitle: "営業時間",
    finalTitle: "今夜の海鮮をお探しですか？",
    finalSub:
      "本日の入荷、サイズ、調理方法についてWhatsAppでお問い合わせください。",
  },
};

const heroSlides = [
  {
    image: img("feature-8days-original-thumbnail.jpg"),
    title: "As Featured on 8 Days",
  },
  {
    image: img("product-live-crab-premium.jpg"),
    title: "Premium Live Crabs",
  },
  {
    image: img("product-yellow-roe-crab-06.jpg"),
    title: "Sri Lanka Roe Crabs",
  },
  {
    image: img("feature-botak-jazz-tiktok.jpg"),
    title: "Botak Jazz TikTok Feature",
  },
  {
    image: img("dish-lobster-yee-mee-fai-kee-hero.jpg"),
    title: "Popular Lobster Yee Mee",
  },
];

const products = [
  {
    title: "Live Mud Crabs",
    image: img("product-live-crab-premium.jpg"),
    desc: "Meaty live crabs suitable for steaming, chilli crab, black pepper crab or ginger scallion crab.",
  },
  {
    title: "Sri Lanka Roe Crabs",
    image: img("product-yellow-roe-crab-06.jpg"),
    desc: "Premium roe crabs with rich roe and firm meat, popular for home dining and special occasions.",
  },
  {
    title: "Live Lobsters",
    image: img("product-boston-lobster-display.jpg"),
    desc: "Boston lobster and green lobster options depending on daily arrivals.",
  },
  {
    title: "Fresh Oysters",
    image: img("product-oysters-premium-02.jpg"),
    desc: "Clean, chilled oysters suitable for seafood platters and weekend gatherings.",
  },
  {
    title: "Manila Clams",
    image: img("product-manila-clams-closeup.jpg"),
    desc: "Great for steaming, soup, white wine style, chilli lala or simple home cooking.",
  },
  {
    title: "Soon Hock & Premium Fish",
    image: img("product-live-soon-hock-premium-fish.jpg"),
    fallback: img("product-live-soon-hock-01.jpg"),
    desc: "Live fish options suitable for steaming, Hong Kong style or premium home cooking.",
  },
];

const homeCooking = [
  "Select your preferred live seafood at Crab Talk",
  "Ask us for recommended cooking style and portion guidance",
  "Bring home and cook fresh for family meals or gatherings",
];

const faiKeeItems = [
  "Cooking support is subject to Fai Kee’s daily capacity",
  "Pre-booking is strongly recommended",
  "Cooking fees and timings may vary by dish and preparation effort",
];

const features = [
  {
    title: "8 Days Feature",
    image: img("feature-8days-original-thumbnail.jpg"),
    text: "Commonwealth live seafood and cooked seafood collaboration feature.",
    link: EIGHT_DAYS_LINK,
  },
  {
    title: "Botak Jazz TikTok",
    image: img("feature-botak-jazz-tiktok.jpg"),
    text: "Creator feature highlighting the lobster yee mee experience.",
    link: BOTAK_JAZZ_LINK,
  },
  {
    title: "AI for Daily Work",
    image: img("AI-feature.jpeg"),
    text: "Story on how Crab Talk uses AI tools for daily business operations.",
    link: AI_FEATURE_LINK,
  },
];

const dishes = [
  {
    title: "Chilli Crab",
    image: img("dish-chilli-crab-premium.jpg"),
  },
  {
    title: "Black Pepper Crab",
    image: img("dish-black-pepper-crab-premium.jpg"),
  },
  {
    title: "Lobster Yee Mee",
    image: img("dish-lobster-yee-mee-closeup-01.jpg"),
  },
  {
    title: "Ginger Scallion Crab",
    image: img("dish-ginger-scallion-crab.jpg"),
  },
];

const reviewThemes = [
  {
    title: "Fresh live seafood",
    text: "Customers often highlight the freshness and quality of the live seafood selection.",
  },
  {
    title: "Friendly recommendations",
    text: "Many customers appreciate patient explanations on size, cooking style and seafood selection.",
  },
  {
    title: "Convenient market experience",
    text: "A practical choice for people who want live seafood for home cooking or nearby cooking support.",
  },
];

const hours = [
  ["Monday", "12–5 pm"],
  ["Tuesday", "8 am–7 pm"],
  ["Wednesday", "8 am–7 pm"],
  ["Thursday", "8 am–7 pm"],
  ["Friday", "8 am–8 pm"],
  ["Saturday", "8 am–8 pm"],
  ["Sunday", "8 am–5 pm"],
];

export default function App() {
  const [lang, setLang] = useState("en");
  const [activeSlide, setActiveSlide] = useState(0);

  const t = copy[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const todayName = useMemo(() => {
    return new Date().toLocaleDateString("en-SG", { weekday: "long" });
  }, []);

  return (
    <div className="site">
      <style>{`
        :root {
          --deep: #02181d;
          --deep-2: #062b32;
          --teal: #0f6f7d;
          --cyan: #6be7ff;
          --gold: #f8c96b;
          --cream: #fff8e7;
          --muted: rgba(255,255,255,.72);
          --line: rgba(255,255,255,.14);
          --card: rgba(255,255,255,.075);
          --card-2: rgba(255,255,255,.105);
          --shadow: 0 24px 70px rgba(0,0,0,.38);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--deep);
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
        }

        .site {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(107,231,255,.18), transparent 34%),
            radial-gradient(circle at top right, rgba(248,201,107,.16), transparent 32%),
            linear-gradient(180deg, #02181d 0%, #082b33 48%, #02181d 100%);
          overflow-x: hidden;
        }

        .container {
          width: min(1160px, calc(100% - 36px));
          margin: 0 auto;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(18px);
          background: rgba(2, 24, 29, .78);
          border-bottom: 1px solid var(--line);
        }

        .headerInner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          min-height: 74px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 180px;
        }

        .brandMark {
          width: 42px;
          height: 42px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          background: linear-gradient(145deg, var(--gold), #fff1ba);
          color: #07242a;
          font-size: 22px;
          box-shadow: 0 10px 28px rgba(248,201,107,.25);
        }

        .brandText strong {
          display: block;
          font-size: 17px;
          letter-spacing: .2px;
        }

        .brandText span {
          display: block;
          color: var(--muted);
          font-size: 12px;
          margin-top: 2px;
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          color: rgba(255,255,255,.76);
          font-size: 14px;
        }

        .nav a {
          text-decoration: none;
          transition: color .2s ease;
        }

        .nav a:hover {
          color: white;
        }

        .topActions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .langSelect {
          height: 38px;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.08);
          color: white;
          padding: 0 10px;
          outline: none;
        }

        .langSelect option {
          color: #061b20;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 42px;
          padding: 0 16px;
          border-radius: 999px;
          border: 1px solid var(--line);
          text-decoration: none;
          font-weight: 800;
          font-size: 14px;
          transition: transform .2s ease, background .2s ease, border-color .2s ease;
          white-space: nowrap;
        }

        .btn:hover {
          transform: translateY(-1px);
        }

        .btnPrimary {
          background: linear-gradient(135deg, #47dcff, #0d93b0);
          color: #031f25;
          border-color: rgba(107,231,255,.5);
          box-shadow: 0 14px 34px rgba(71,220,255,.18);
        }

        .btnGold {
          background: linear-gradient(135deg, var(--gold), #ffe7a0);
          color: #082228;
          border-color: rgba(248,201,107,.55);
          box-shadow: 0 14px 34px rgba(248,201,107,.16);
        }

        .btnGhost {
          background: rgba(255,255,255,.06);
          color: white;
        }

        .hero {
          padding: 54px 0 34px;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.02fr .98fr;
          gap: 34px;
          align-items: center;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 13px;
          border: 1px solid rgba(248,201,107,.35);
          border-radius: 999px;
          background: rgba(248,201,107,.08);
          color: var(--gold);
          font-weight: 900;
          font-size: 13px;
          letter-spacing: .3px;
          margin-bottom: 18px;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(38px, 6vw, 70px);
          line-height: .96;
          letter-spacing: -2.2px;
        }

        .hero h1 span {
          display: block;
          color: var(--gold);
        }

        .heroSub {
          margin: 22px 0 0;
          color: rgba(255,255,255,.78);
          font-size: clamp(16px, 2vw, 20px);
          line-height: 1.65;
          max-width: 680px;
        }

        .heroNote {
          margin: 18px 0 0;
          color: rgba(255,255,255,.68);
          line-height: 1.65;
          max-width: 640px;
        }

        .heroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .addressPill {
          margin-top: 18px;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: rgba(255,255,255,.82);
          padding: 12px 15px;
          border-radius: 18px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.055);
          line-height: 1.45;
        }

        .heroMedia {
          position: relative;
        }

        .heroFrame {
          position: relative;
          height: clamp(250px, 34vw, 390px);
          border-radius: 32px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.2);
          background: linear-gradient(145deg, rgba(255,255,255,.09), rgba(255,255,255,.035));
          box-shadow: var(--shadow);
        }

        .heroFrame img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #061f25;
          padding: 8px;
          display: block;
        }

        .heroCaption {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 18px;
          background: rgba(2,24,29,.78);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,.18);
        }

        .heroCaption strong {
          font-size: 15px;
        }

        .dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(255,255,255,.34);
        }

        .dot.active {
          background: var(--gold);
        }

        .miniStats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 12px;
        }

        .miniStat {
          padding: 14px;
          border-radius: 20px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.065);
        }

        .miniStat strong {
          display: block;
          font-size: 20px;
          color: var(--gold);
          margin-bottom: 4px;
        }

        .miniStat span {
          color: rgba(255,255,255,.68);
          font-size: 12px;
          line-height: 1.35;
        }

        .section {
          padding: 42px 0;
        }

        .sectionHead {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 22px;
        }

        .sectionHead h2 {
          margin: 0;
          font-size: clamp(28px, 4vw, 44px);
          letter-spacing: -1.2px;
        }

        .sectionHead p {
          margin: 10px 0 0;
          max-width: 680px;
          color: var(--muted);
          line-height: 1.65;
        }

        .selectionGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .card {
          border: 1px solid var(--line);
          background: linear-gradient(180deg, rgba(255,255,255,.105), rgba(255,255,255,.055));
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 46px rgba(0,0,0,.18);
        }

        .productCard {
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }

        .imageBox {
          width: 100%;
          height: 178px;
          background: #061f25;
          border-bottom: 1px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .imageBox img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          padding: 6px;
        }

        .cardBody {
          padding: 18px;
        }

        .cardBody h3 {
          margin: 0;
          font-size: 22px;
          letter-spacing: -.4px;
        }

        .cardBody p {
          margin: 10px 0 0;
          color: rgba(255,255,255,.72);
          line-height: 1.55;
          font-size: 15px;
        }

        .processGrid {
          display: grid;
          grid-template-columns: 1.25fr .75fr;
          gap: 18px;
        }

        .premiumPanel {
          padding: 26px;
          border-radius: 32px;
          border: 1px solid rgba(248,201,107,.22);
          background:
            linear-gradient(135deg, rgba(248,201,107,.12), transparent 40%),
            linear-gradient(180deg, rgba(255,255,255,.1), rgba(255,255,255,.05));
          box-shadow: var(--shadow);
        }

        .premiumPanel h2,
        .compactPanel h3 {
          margin: 0;
        }

        .premiumPanel p,
        .compactPanel p {
          color: var(--muted);
          line-height: 1.65;
        }

        .steps {
          display: grid;
          gap: 12px;
          margin-top: 22px;
        }

        .step {
          display: flex;
          gap: 13px;
          align-items: flex-start;
          padding: 14px;
          border-radius: 20px;
          background: rgba(255,255,255,.06);
          border: 1px solid var(--line);
        }

        .stepNum {
          flex: 0 0 34px;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          background: var(--gold);
          color: #082228;
          font-weight: 900;
        }

        .step span {
          color: rgba(255,255,255,.82);
          line-height: 1.55;
        }

        .compactPanel {
          padding: 22px;
          border-radius: 32px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.065);
        }

        .smallList {
          display: grid;
          gap: 10px;
          margin-top: 16px;
        }

        .smallList div {
          padding: 12px;
          border-radius: 17px;
          color: rgba(255,255,255,.72);
          background: rgba(255,255,255,.055);
          border: 1px solid rgba(255,255,255,.09);
          line-height: 1.45;
        }

        .dishStrip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-top: 18px;
        }

        .dishCard {
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.07);
        }

        .dishCard .imageBox {
          height: 138px;
          border: 0;
        }

        .dishCard h3 {
          margin: 0;
          padding: 13px 14px 15px;
          font-size: 16px;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .featureCard .imageBox {
          height: 160px;
        }

        .featureCard a {
          display: inline-flex;
          margin-top: 14px;
          color: var(--gold);
          text-decoration: none;
          font-weight: 900;
        }

        .reviewGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .reviewCard {
          padding: 20px;
          border-radius: 26px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.06);
        }

        .reviewCard strong {
          color: var(--gold);
          display: block;
          margin-bottom: 8px;
        }

        .reviewCard p {
          margin: 0;
          color: rgba(255,255,255,.7);
          line-height: 1.6;
        }

        .visitGrid {
          display: grid;
          grid-template-columns: .95fr 1.05fr;
          gap: 18px;
        }

        .visitCard {
          padding: 24px;
          border-radius: 32px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.065);
        }

        .visitCard h2 {
          margin: 0 0 12px;
        }

        .visitCard p {
          color: var(--muted);
          line-height: 1.65;
        }

        .hoursTable {
          display: grid;
          gap: 8px;
        }

        .hourRow {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 18px;
          padding: 12px 14px;
          border-radius: 16px;
          background: rgba(255,255,255,.055);
          color: rgba(255,255,255,.78);
          border: 1px solid rgba(255,255,255,.075);
        }

        .hourRow.today {
          background: rgba(248,201,107,.13);
          border-color: rgba(248,201,107,.34);
          color: white;
        }

        .finalCta {
          margin: 36px 0 62px;
          padding: 30px;
          border-radius: 34px;
          border: 1px solid rgba(248,201,107,.25);
          background:
            linear-gradient(135deg, rgba(248,201,107,.16), rgba(107,231,255,.08)),
            rgba(255,255,255,.06);
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 20px;
          align-items: center;
          box-shadow: var(--shadow);
        }

        .finalCta h2 {
          margin: 0;
          font-size: clamp(26px, 4vw, 40px);
          letter-spacing: -1px;
        }

        .finalCta p {
          color: var(--muted);
          line-height: 1.6;
          margin: 10px 0 0;
        }

        .stickyMobile {
          display: none;
        }

        @media (max-width: 980px) {
          .nav {
            display: none;
          }

          .heroGrid,
          .processGrid,
          .visitGrid,
          .finalCta {
            grid-template-columns: 1fr;
          }

          .selectionGrid,
          .featureGrid,
          .reviewGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .dishStrip {
            grid-template-columns: repeat(2, 1fr);
          }

          .finalCta {
            text-align: center;
          }

          .finalCta .heroActions {
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .container {
            width: min(100% - 26px, 1160px);
          }

          .headerInner {
            min-height: 66px;
          }

          .brandText span {
            display: none;
          }

          .topActions .btnPrimary {
            display: none;
          }

          .langSelect {
            max-width: 92px;
          }

          .hero {
            padding: 32px 0 24px;
          }

          .hero h1 {
            font-size: 42px;
            letter-spacing: -1.4px;
          }

          .heroSub {
            font-size: 16px;
          }

          .heroFrame {
            height: 280px;
            border-radius: 26px;
          }

          .miniStats {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 30px 0;
          }

          .sectionHead {
            display: block;
          }

          .selectionGrid,
          .featureGrid,
          .reviewGrid,
          .dishStrip {
            grid-template-columns: 1fr;
          }

          .imageBox {
            height: 156px;
          }

          .featureCard .imageBox {
            height: 150px;
          }

          .dishCard .imageBox {
            height: 145px;
          }

          .card,
          .premiumPanel,
          .compactPanel,
          .visitCard,
          .finalCta {
            border-radius: 24px;
          }

          .cardBody {
            padding: 16px;
          }

          .cardBody h3 {
            font-size: 20px;
          }

          .addressPill {
            font-size: 14px;
          }

          .stickyMobile {
            position: fixed;
            left: 12px;
            right: 12px;
            bottom: 12px;
            z-index: 80;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .stickyMobile .btn {
            min-height: 48px;
            box-shadow: 0 12px 35px rgba(0,0,0,.34);
          }

          .site {
            padding-bottom: 74px;
          }
        }
      `}</style>

      <header className="header">
        <div className="container headerInner">
          <a href="#home" className="brand" style={{ textDecoration: "none" }}>
            <div className="brandMark">🦀</div>
            <div className="brandText">
              <strong>Crab Talk SG</strong>
              <span>Live Seafood Supply</span>
            </div>
          </a>

          <nav className="nav">
            <a href="#home">{t.navHome}</a>
            <a href="#selection">{t.navSelection}</a>
            <a href="#how">{t.navCooking}</a>
            <a href="#features">{t.navFeatures}</a>
            <a href="#visit">{t.navVisit}</a>
          </nav>

          <div className="topActions">
            <select
              className="langSelect"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              aria-label="Language"
            >
              <option value="en">EN</option>
              <option value="zh">中文</option>
              <option value="jp">日本語</option>
            </select>

            <a className="btn btnPrimary" href={WHATSAPP_LINK} target="_blank">
              {t.whatsapp}
            </a>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container heroGrid">
            <div>
              <div className="eyebrow">✦ {t.badge}</div>

              <h1>
                Crab Talk SG
                <span>{t.heroTitle}</span>
              </h1>

              <p className="heroSub">{t.heroSub}</p>
              <p className="heroNote">{t.heroNote}</p>

              <div className="heroActions">
                <a className="btn btnGold" href={WHATSAPP_LINK} target="_blank">
                  {t.whatsapp}
                </a>
                <a className="btn btnGhost" href={TELEGRAM_LINK} target="_blank">
                  {t.telegram}
                </a>
                <a className="btn btnGhost" href={MAPS_LINK} target="_blank">
                  {t.map}
                </a>
              </div>

              <div className="addressPill">📍 {t.address}</div>
            </div>

            <div className="heroMedia">
              <div className="heroFrame">
                <img
                  src={heroSlides[activeSlide].image}
                  alt={heroSlides[activeSlide].title}
                />
                <div className="heroCaption">
                  <strong>{heroSlides[activeSlide].title}</strong>
                  <div className="dots">
                    {heroSlides.map((_, index) => (
                      <span
                        key={index}
                        className={`dot ${index === activeSlide ? "active" : ""}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="miniStats">
                <div className="miniStat">
                  <strong>Live</strong>
                  <span>Crabs, lobsters, fish, clams and oysters</span>
                </div>
                <div className="miniStat">
                  <strong>Daily</strong>
                  <span>Fresh arrivals depending on market supply</span>
                </div>
                <div className="miniStat">
                  <strong>Easy</strong>
                  <span>WhatsApp before visiting for availability</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="selection" className="section">
          <div className="container">
            <div className="sectionHead">
              <div>
                <h2>{t.freshTitle}</h2>
                <p>{t.freshSub}</p>
              </div>
              <a className="btn btnGhost" href={WHATSAPP_LINK} target="_blank">
                Check Today’s Stock
              </a>
            </div>

            <div className="selectionGrid">
              {products.map((item) => (
                <article className="card productCard" key={item.title}>
                  <div className="imageBox">
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(e) => {
                        if (item.fallback) e.currentTarget.src = item.fallback;
                      }}
                    />
                  </div>
                  <div className="cardBody">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="section">
          <div className="container processGrid">
            <div className="premiumPanel">
              <h2>{t.homeTitle}</h2>
              <p>{t.homeSub}</p>

              <div className="steps">
                {homeCooking.map((step, index) => (
                  <div className="step" key={step}>
                    <div className="stepNum">{index + 1}</div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="compactPanel">
              <h3>{t.faiKeeTitle}</h3>
              <p>{t.faiKeeSub}</p>

              <div className="smallList">
                {faiKeeItems.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="container">
            <div className="dishStrip">
              {dishes.map((dish) => (
                <article className="dishCard" key={dish.title}>
                  <div className="imageBox">
                    <img src={dish.image} alt={dish.title} />
                  </div>
                  <h3>{dish.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <div className="sectionHead">
              <div>
                <h2>{t.featureTitle}</h2>
                <p>{t.featureSub}</p>
              </div>
            </div>

            <div className="featureGrid">
              {features.map((feature) => (
                <article className="card featureCard" key={feature.title}>
                  <div className="imageBox">
                    <img src={feature.image} alt={feature.title} />
                  </div>
                  <div className="cardBody">
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                    <a href={feature.link} target="_blank">
                      View feature →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="sectionHead">
              <div>
                <h2>{t.reviewTitle}</h2>
                <p>{t.reviewSub}</p>
              </div>
              <a className="btn btnGhost" href={MAPS_LINK} target="_blank">
                View on Google
              </a>
            </div>

            <div className="reviewGrid">
              {reviewThemes.map((review) => (
                <div className="reviewCard" key={review.title}>
                  <strong>{review.title}</strong>
                  <p>{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="visit" className="section">
          <div className="container visitGrid">
            <div className="visitCard">
              <h2>{t.visitTitle}</h2>
              <p>
                <strong>Address:</strong>
                <br />
                {t.address}
              </p>

              <div className="heroActions">
                <a className="btn btnGold" href={WHATSAPP_LINK} target="_blank">
                  {t.whatsapp}
                </a>
                <a className="btn btnGhost" href={TELEGRAM_LINK} target="_blank">
                  {t.telegram}
                </a>
                <a className="btn btnGhost" href={MAPS_LINK} target="_blank">
                  {t.map}
                </a>
              </div>
            </div>

            <div className="visitCard">
              <h2>{t.hoursTitle}</h2>

              <div className="hoursTable">
                {hours.map(([day, time]) => (
                  <div
                    className={`hourRow ${day === todayName ? "today" : ""}`}
                    key={day}
                  >
                    <strong>{day}</strong>
                    <span>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <section className="finalCta">
            <div>
              <h2>{t.finalTitle}</h2>
              <p>{t.finalSub}</p>
            </div>

            <div className="heroActions">
              <a className="btn btnGold" href={WHATSAPP_LINK} target="_blank">
                {t.whatsapp}
              </a>
              <a className="btn btnGhost" href={MAPS_LINK} target="_blank">
                {t.map}
              </a>
            </div>
          </section>
        </div>
      </main>

      <div className="stickyMobile">
        <a className="btn btnGold" href={WHATSAPP_LINK} target="_blank">
          WhatsApp
        </a>
        <a className="btn btnGhost" href={MAPS_LINK} target="_blank">
          Maps
        </a>
      </div>
    </div>
  );
}

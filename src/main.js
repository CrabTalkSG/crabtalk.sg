(function(){
  const copy={
    zh:{heroTag:'实体活海鲜摊位',hoursVary:'营业时间每日不同',heroText:'欢迎到 Commonwealth Crescent Market 的 Crab Talk 选购活螃蟹、膏蟹、龙虾、生蚝、马尼拉蛤、笋壳鱼等。建议到访前通过 WhatsApp 查询当天到货和预订。',checkToday:'查询今日到货',readReviews:'查看真实 Google 评价',important:'重要提示：',notOnline:'Crab Talk 不是线上海鲜店。WhatsApp 主要用于查询当天到货、库存和预订。',googleRating:'Google 商家资料显示的评分',googleReviews:'来自顾客的 Google 评价',todayKicker:'经常更新',todayTitle:'今日新鲜到货',todayText:'供应每天不同。周末热门海鲜可能较早售完，如需膏蟹、龙虾、笋壳鱼、生蚝或蛤，请到访前先 WhatsApp 查询。',sendArrivals:'WhatsApp 查询今日清单',selectionTitle:'新鲜选择',selectionText:'以下是 Crab Talk 常见热门海鲜。供应每天不同，如需特定品项或规格，请到访前先 WhatsApp 查询。',worksTitle:'简单直接的市场式海鲜购买体验',worksText:'现场挑选海鲜，再决定回家料理或在附近安排代煮。',hoursTitle:'营业时间',hoursText:'以下按星期清楚列出。如需活蟹、龙虾、生蚝或特别海鲜，建议先 WhatsApp 查询。',featuredTitle:'本地媒体推荐',featuredText:'Crab Talk 的市场式活海鲜概念已被本地美食媒体和社交平台分享。',reviewsTitle:'真实 Google 评价',reviewsText:'来自 Crab Talk Google 商家资料的真实顾客反馈。',findTitle:'欢迎到我们的实体活海鲜摊位'},
    ja:{heroTag:'実店舗の活き海鮮スタンド',hoursVary:'営業時間は曜日により異なります',heroText:'Commonwealth Crescent Market の Crab Talk で、活ガニ、卵持ちガニ、ロブスター、オイスター、マニラクラム、スーンホックなどをお選びいただけます。ご来店前に WhatsApp で本日の入荷状況をご確認ください。',checkToday:'本日の在庫を確認',readReviews:'Googleの実際の口コミを見る',important:'重要：',notOnline:'Crab Talkはオンライン専門の海鮮店ではありません。WhatsAppは主に本日の入荷、在庫確認、予約のお問い合わせ用です。',googleRating:'Googleビジネスプロフィールの評価',googleReviews:'お客様からのGoogleレビュー',todayKicker:'随時更新',todayTitle:'本日の新鮮入荷',todayText:'在庫は毎日変わります。週末の人気商品は早めに売り切れる場合がありますので、蟹、ロブスター、魚、牡蠣、貝をご希望の場合は来店前にWhatsAppでご確認ください。',sendArrivals:'WhatsAppで本日のリストを確認',selectionTitle:'鮮度抜群の品揃え',selectionText:'Crab Talkの定番人気商品です。在庫は毎日変わりますので、特定の商品やサイズをご希望の場合は来店前にWhatsAppでご確認ください。',worksTitle:'市場スタイルでシンプルに海鮮を購入',worksText:'直接選んで、自宅で調理するか、可能な場合は近隣で調理を手配できます。',hoursTitle:'営業時間',hoursText:'曜日別に分かりやすく表示しています。活蟹、ロブスター、牡蠣、特別入荷品は事前にWhatsAppで在庫確認をおすすめします。',featuredTitle:'地元メディア掲載',featuredText:'Crab Talkの市場型ライブシーフード体験は、地元グルメメディアやSNSで紹介されています。',reviewsTitle:'Googleの実際の口コミ',reviewsText:'Crab TalkのGoogleビジネスプロフィールに掲載された実際のお客様の声です。',findTitle:'実店舗の活き海鮮スタンドへお越しください'}
  };
  const buttons=document.querySelectorAll('[data-lang]');
  const original=new Map();
  document.querySelectorAll('[data-i18n]').forEach(el=>original.set(el,el.textContent));
  function setLang(lang){
    document.documentElement.lang=lang==='zh'?'zh-Hans':lang==='ja'?'ja':'en';
    document.body.classList.toggle('is-zh',lang==='zh');document.body.classList.toggle('is-ja',lang==='ja');
    document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;el.textContent= lang==='en'?original.get(el):(copy[lang]&&copy[lang][key])||original.get(el);});
    buttons.forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));localStorage.setItem('crabtalkLang',lang);
  }
  buttons.forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
  setLang(localStorage.getItem('crabtalkLang')||'en');
  document.querySelectorAll('.wa-track').forEach(a=>a.addEventListener('click',()=>{if(typeof gtag==='function'){gtag('event','whatsapp_click',{event_category:'engagement',event_label:a.textContent.trim()});}}));
})();

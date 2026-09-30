(function(){
  'use strict';

  var SHOP_URL = 'https://shop.crabtalk.sg/';
  var ORIGIN_KEY = 'crabtalk_shop_origin';

  function sourceFromHost(host){
    host = (host || '').toLowerCase();
    if(/(^|\.)google\./.test(host)) return {source:'google',medium:'organic'};
    if(/(^|\.)bing\.com$/.test(host)) return {source:'bing',medium:'organic'};
    if(/(^|\.)facebook\.com$|(^|\.)fb\.com$/.test(host)) return {source:'facebook',medium:'social'};
    if(/(^|\.)instagram\.com$/.test(host)) return {source:'instagram',medium:'social'};
    if(/(^|\.)tiktok\.com$/.test(host)) return {source:'tiktok',medium:'social'};
    return null;
  }

  function getOrigin(){
    var params = new URLSearchParams(window.location.search);
    var taggedSource = params.get('utm_source');
    var taggedMedium = params.get('utm_medium');
    var origin = null;
    if(taggedSource){
      origin = {source:taggedSource,medium:taggedMedium || 'referral',campaign:params.get('utm_campaign') || ''};
    } else if(params.has('gclid') || params.has('gbraid') || params.has('wbraid')){
      origin = {source:'google',medium:'cpc',campaign:''};
    } else if(document.referrer){
      try {
        var referrer = new URL(document.referrer);
        if(referrer.hostname !== window.location.hostname && referrer.hostname !== 'shop.crabtalk.sg'){
          origin = sourceFromHost(referrer.hostname);
        }
      } catch(e) { /* An invalid referrer is left unclassified. */ }
    }
    try {
      if(origin) sessionStorage.setItem(ORIGIN_KEY, JSON.stringify(origin));
      else origin = JSON.parse(sessionStorage.getItem(ORIGIN_KEY) || 'null');
    } catch(e) { /* Tracking must never interfere with shopping. */ }
    return origin || {source:'crabtalk_website',medium:'referral',campaign:''};
  }

  function tagShopLink(link, origin){
    var url;
    try { url = new URL(link.href); } catch(e) { return; }
    if(url.hostname !== 'shop.crabtalk.sg') return;
    if(!url.searchParams.has('utm_source')) url.searchParams.set('utm_source', origin.source);
    if(!url.searchParams.has('utm_medium')) url.searchParams.set('utm_medium', origin.medium);
    if(!url.searchParams.has('utm_campaign')) url.searchParams.set('utm_campaign', origin.campaign || 'website_to_shop');
    if(!url.searchParams.has('utm_content')){
      var location = link.getAttribute('data-shop-source') || 'store_link';
      url.searchParams.set('utm_content', window.location.pathname.replace(/^\//,'') + ':' + location);
    }
    link.href = url.href;
  }

  function language(){
    var lang = (document.documentElement.lang || 'en').toLowerCase();
    if(lang.indexOf('ja') === 0) return 'ja';
    if(lang.indexOf('zh') === 0) return 'zh';
    return 'en';
  }

  function labels(){
    var lang = language();
    if(lang === 'ja') return {
      order:'オンライン注文',
      orderAria:'Crab Talkオンラインストアを開く'
    };
    if(lang === 'zh') return {
      order:'网上订购',
      orderAria:'打开Crab Talk网上商店'
    };
    return {
      order:'Order Online',
      orderAria:'Open the Crab Talk online store'
    };
  }

  function configureShopLinks(root){
    (root || document).querySelectorAll('[data-shop-link]').forEach(function(link){
      link.setAttribute('href', SHOP_URL);
      link.setAttribute('aria-label', link.getAttribute('aria-label') || labels().orderAria);
    });
  }

  function injectLegacyEntryPoints(){
    if(document.querySelector('.site-header')) return;
    var copy = labels();
    var nav = document.querySelector('.nav-links, .navlinks, nav.nav, header nav');
    if(nav && !nav.querySelector('[data-shop-link]')){
      var navLink = document.createElement('a');
      navLink.className = 'ct-legacy-shop-link';
      navLink.textContent = copy.order;
      navLink.setAttribute('data-shop-link','');
      navLink.setAttribute('data-shop-source','legacy_header');
      nav.appendChild(navLink);
    }
    if(!document.querySelector('.ct-legacy-floating-store,[data-shop-floating]')){
      var floating = document.createElement('a');
      floating.className = 'ct-legacy-floating-store';
      floating.textContent = copy.order;
      floating.setAttribute('data-shop-link','');
      floating.setAttribute('data-shop-source','legacy_floating');
      floating.setAttribute('data-shop-floating','');
      floating.setAttribute('aria-label',copy.orderAria);
      document.body.appendChild(floating);
    }
  }

  function sendEvent(name, params){
    if(typeof window.gtag === 'function') window.gtag('event', name, params || {});
  }

  function init(){
    document.body.classList.add('has-store-integration');
    injectLegacyEntryPoints();
    configureShopLinks(document);
    var origin = getOrigin();

    document.addEventListener('click', function(event){
      var link = event.target.closest('a[href]');
      if(!link) return;
      try { if(new URL(link.href).hostname !== 'shop.crabtalk.sg') return; }
      catch(e) { return; }
      tagShopLink(link, origin);
      sendEvent('online_store_click', {
        link_url: link.href,
        link_text: (link.textContent || '').trim().slice(0,100),
        page_path: window.location.pathname,
        button_location: link.getAttribute('data-shop-source') || 'unspecified',
        shop_domain: 'shop.crabtalk.sg'
      });
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

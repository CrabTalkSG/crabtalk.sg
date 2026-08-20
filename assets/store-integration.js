(function(){
  'use strict';

  var SHOP_URL = 'https://shop.crabtalk.sg/';

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

    document.addEventListener('click', function(event){
      var link = event.target.closest('[data-shop-link]');
      if(!link) return;
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

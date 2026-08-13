(function(){
  'use strict';

  var SHOP_PATH = '/shop';
  var CAMPAIGN = 'online_store_launch';
  var WHATSAPP_NUMBER = '6598398671';

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
      orderAria:'Crab Talkオンラインストアを開く',
      whatsapp:'WhatsAppで問い合わせ',
      whatsappShort:'WhatsApp',
      whatsappAria:'WhatsAppでCrab Talkに問い合わせる',
      whatsappMessage:'Crab Talk様、本日の在庫または注文について確認したいです。'
    };
    if(lang === 'zh') return {
      order:'网上订购',
      orderAria:'打开Crab Talk网上商店',
      whatsapp:'WhatsApp咨询',
      whatsappShort:'WhatsApp',
      whatsappAria:'通过WhatsApp联系Crab Talk',
      whatsappMessage:'你好 Crab Talk，我想查询今天的库存或订单。'
    };
    return {
      order:'Order Online',
      orderAria:'Open the Crab Talk online store',
      whatsapp:'WhatsApp Us',
      whatsappShort:'WhatsApp',
      whatsappAria:'Contact Crab Talk on WhatsApp',
      whatsappMessage:"Hi Crab Talk, I would like to check today's stock or ask about an order."
    };
  }

  function trackedShopHref(source){
    var params = new URLSearchParams();
    params.set('utm_source','crabtalk.sg');
    params.set('utm_medium','referral');
    params.set('utm_campaign',CAMPAIGN);
    params.set('utm_content',source || 'unspecified');
    return SHOP_PATH + '?' + params.toString();
  }

  function whatsappHref(){
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(labels().whatsappMessage);
  }

  function whatsappIcon(){
    return '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5A8.48 8.48 0 0 1 21 11v.5Z"></path><path d="M9.4 8.7c.5 2 1.9 3.5 4 4.2"></path></svg>';
  }

  function configureShopLinks(root){
    (root || document).querySelectorAll('[data-shop-link]').forEach(function(link){
      var source = link.getAttribute('data-shop-source') || 'unspecified';
      link.setAttribute('href', trackedShopHref(source));
      link.setAttribute('aria-label', link.getAttribute('aria-label') || labels().orderAria);
    });
  }

  function createWhatsAppLink(className, text, source){
    var copy = labels();
    var link = document.createElement('a');
    link.className = className || '';
    link.href = whatsappHref();
    link.target = '_blank';
    link.rel = 'noopener';
    link.setAttribute('aria-label', copy.whatsappAria);
    link.setAttribute('data-wa-source', source || 'unspecified');
    link.innerHTML = whatsappIcon() + '<span>' + (text || copy.whatsapp) + '</span>';
    return link;
  }

  function injectWhatsAppEntryPoints(){
    var copy = labels();

    // Desktop header: keep online ordering prominent while restoring a direct contact option.
    var headerActions = document.querySelector('.site-header .header-actions');
    if(headerActions && !headerActions.querySelector('[data-wa-source="header"]')){
      var headerWa = createWhatsAppLink('btn btn-whatsapp btn-small header-whatsapp', copy.whatsappShort, 'header');
      var shopButton = headerActions.querySelector('[data-shop-link]');
      if(shopButton) headerActions.insertBefore(headerWa, shopButton);
      else headerActions.appendChild(headerWa);
    }

    // Mobile menu: show WhatsApp directly beside the online-order route.
    var mobileNav = document.querySelector('.mobile-panel nav');
    if(mobileNav && !mobileNav.querySelector('[data-wa-source="mobile_menu"]')){
      var mobileWa = createWhatsAppLink('mobile-whatsapp-link', copy.whatsapp, 'mobile_menu');
      var mobileShop = mobileNav.querySelector('[data-shop-link]');
      if(mobileShop && mobileShop.nextSibling) mobileNav.insertBefore(mobileWa, mobileShop.nextSibling);
      else mobileNav.appendChild(mobileWa);
    }

    // Primary hero CTA: pair Shop Online with WhatsApp wherever a modern hero already has a shop button.
    var hero = document.querySelector('main .hero, main .page-hero');
    var heroActions = hero ? hero.querySelector('.hero-actions') : null;
    if(heroActions && heroActions.querySelector('[data-shop-link]') && !heroActions.querySelector('[data-wa-source="hero"]')){
      heroActions.appendChild(createWhatsAppLink('btn btn-whatsapp', copy.whatsapp, 'hero'));
    }

    // Location/contact card on the modern site.
    var infoList = document.querySelector('#location .info-list');
    if(infoList && !infoList.querySelector('[data-wa-source="location"]')){
      var row = document.createElement('div');
      row.className = 'info-row';
      row.innerHTML = '<strong>WhatsApp</strong>';
      var wa = createWhatsAppLink('inline-whatsapp-link', copy.whatsappShort, 'location');
      row.appendChild(wa);
      infoList.appendChild(row);
    }

    // Footer contact link on modern pages.
    var footerColumns = document.querySelectorAll('.site-footer .footer-grid > div');
    if(footerColumns.length){
      var connectColumn = Array.prototype.find.call(footerColumns, function(col){
        var h3 = col.querySelector('h3');
        return h3 && /Connect|联系|聯絡|お問い合わせ|つながる/i.test(h3.textContent || '');
      });
      if(!connectColumn && footerColumns.length >= 3) connectColumn = footerColumns[footerColumns.length - 1];
      var footerLinks = connectColumn ? connectColumn.querySelector('.footer-links') : null;
      if(footerLinks && !footerLinks.querySelector('[data-wa-source="footer"]')){
        footerLinks.insertBefore(createWhatsAppLink('footer-whatsapp-link', copy.whatsappShort, 'footer'), footerLinks.firstChild);
      }
    }

    // Always-visible contact route. Existing CSS places Shop Online and WhatsApp side-by-side on mobile.
    if(!document.querySelector('.floating-wa[data-crabtalk-whatsapp]')){
      var floating = createWhatsAppLink('floating-wa', copy.whatsappShort, 'floating');
      floating.setAttribute('data-crabtalk-whatsapp','');
      document.body.appendChild(floating);
    }
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
    if(nav && !nav.querySelector('[data-wa-source="legacy_header"]')){
      nav.appendChild(createWhatsAppLink('ct-legacy-wa-link', copy.whatsappShort, 'legacy_header'));
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
    injectWhatsAppEntryPoints();
    configureShopLinks(document);

    document.addEventListener('click', function(event){
      var link = event.target.closest('[data-shop-link]');
      if(!link) return;
      sendEvent('online_store_click', {
        link_url: link.href,
        link_text: (link.textContent || '').trim().slice(0,100),
        page_path: window.location.pathname,
        button_location: link.getAttribute('data-shop-source') || 'unspecified'
      });
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

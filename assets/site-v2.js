(function(){
  'use strict';

  var CRAB_TALK_NUMBER = '6598398671';

  var menuButton = document.querySelector('[data-menu-toggle]');
  var menuPanel = document.querySelector('[data-mobile-panel]');

  function closeMenu(){
    if(!menuPanel || !menuButton) return;
    menuPanel.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
    document.body.classList.remove('menu-open');
  }

  if(menuButton && menuPanel){
    menuButton.addEventListener('click', function(){
      var open = menuPanel.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
    });
    menuPanel.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') closeMenu();
    });
  }

  function sendEvent(name, params){
    if(typeof window.gtag === 'function'){
      window.gtag('event', name, params || {});
    }
  }

  function isWhatsAppLink(href){
    return href.indexOf('wa.me') > -1 || href.indexOf('api.whatsapp.com') > -1;
  }

  function isCrabTalkWhatsApp(href){
    return href.replace(/\D/g, '').indexOf(CRAB_TALK_NUMBER) > -1;
  }

  document.addEventListener('click', function(event){
    var link = event.target.closest('a');
    if(!link) return;

    var href = link.getAttribute('href') || '';
    var source = link.dataset.waSource || link.dataset.track || 'unspecified';
    var common = {
      link_url: link.href,
      link_text: (link.textContent || '').trim().slice(0, 100),
      page_path: window.location.pathname,
      button_location: source
    };

    if(isWhatsAppLink(href)){
      if(isCrabTalkWhatsApp(href)){
        // One GA4 key event and one Google Ads conversion per Crab Talk WhatsApp click.
        sendEvent('whatsapp_click', common);
        if(typeof window.gtag === 'function'){
          window.gtag('event', 'conversion', {
            send_to: 'AW-799808799/VS8rCKrimLYcEJ-6sP0C'
          });
        }
      } else {
        // Partner WhatsApp clicks are measured separately and do not count as Crab Talk ad leads.
        sendEvent(source === 'unspecified' ? 'partner_whatsapp_click' : source, common);
      }
      return;
    }

    if(link.target === '_blank'){
      sendEvent('outbound_click', common);
    }
  });

  document.querySelectorAll('img[loading="lazy"]').forEach(function(img){
    img.addEventListener('error', function(){
      var card = img.closest('.product-card,.directory-item,.page-hero-media,.feature-image');
      if(card) card.classList.add('image-error');
    });
  });
})();

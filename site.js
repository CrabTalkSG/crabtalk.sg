(function () {
  'use strict';

  var CRABTALK_NUMBER = '6598398671';
  var ADS_CONVERSION = 'AW-799808799/VS8rCKrimLYcEJ-6sP0C';

  function sendEvent(name, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    }
  }

  // Existing inline onclick attributes use trackClick(). WhatsApp is handled
  // centrally below so the GA4 key event and Google Ads conversion fire once.
  window.trackClick = function (name, params) {
    if (!name || /^whatsapp/i.test(name)) return;
    sendEvent(name, params || {});
  };

  function buttonLocation(link) {
    return link.dataset.location || link.id || link.getAttribute('aria-label') ||
      (link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80) || 'unknown';
  }

  function isWhatsAppLink(link) {
    if (!link || !link.href) return false;
    return /(?:wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)/i.test(link.href);
  }

  function isCrabTalkWhatsApp(link) {
    return link.href.replace(/\D/g, '').indexOf(CRABTALK_NUMBER) !== -1;
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest ? event.target.closest('a') : null;
    if (!isWhatsAppLink(link)) return;

    var params = {
      link_url: link.href,
      page_path: window.location.pathname,
      button_location: buttonLocation(link)
    };

    if (!isCrabTalkWhatsApp(link)) {
      sendEvent('partner_whatsapp_click', params);
      return;
    }

    if (link.dataset.crabtalkTracked === 'true') return;
    link.dataset.crabtalkTracked = 'true';
    event.preventDefault();

    var completed = false;
    var targetWindow = null;
    if (link.target === '_blank') {
      targetWindow = window.open('about:blank', '_blank');
      if (targetWindow) targetWindow.opener = null;
    }

    function continueToWhatsApp() {
      if (completed) return;
      completed = true;
      if (targetWindow) targetWindow.location.href = link.href;
      else window.location.href = link.href;
    }

    sendEvent('whatsapp_click', params);

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: ADS_CONVERSION,
        event_callback: continueToWhatsApp
      });
      window.setTimeout(continueToWhatsApp, 700);
    } else {
      continueToWhatsApp();
    }
  }, true);
})();

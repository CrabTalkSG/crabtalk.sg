
(function(){
  var menuButton=document.querySelector('[data-menu-toggle]');
  var menuPanel=document.querySelector('[data-mobile-panel]');
  function closeMenu(){
    if(!menuPanel||!menuButton)return;
    menuPanel.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
    document.body.classList.remove('menu-open');
  }
  if(menuButton&&menuPanel){
    menuButton.addEventListener('click',function(){
      var open=menuPanel.classList.toggle('open');
      menuButton.setAttribute('aria-expanded',String(open));
      document.body.classList.toggle('menu-open',open);
    });
    menuPanel.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeMenu);});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu();});
  }

  function sendEvent(name,params){
    if(typeof window.gtag==='function'){
      window.gtag('event',name,params||{});
    }
  }

  document.addEventListener('click',function(event){
    var link=event.target.closest('a');
    if(!link)return;
    var href=link.getAttribute('href')||'';
    var source=link.dataset.waSource||link.dataset.track||'unspecified';
    if(href.indexOf('wa.me')>-1||href.indexOf('api.whatsapp.com')>-1){
      sendEvent('whatsapp_click',{
        link_url:link.href,
        link_text:(link.textContent||'').trim().slice(0,100),
        page_path:window.location.pathname,
        button_location:source
      });
      if(typeof window.gtag==='function'){
        window.gtag('event','conversion',{
          send_to:'AW-799808799/VS8rCKrimLYcEJ-6sP0C'
        });
      }
    }else if(link.target==='_blank'){
      sendEvent('outbound_click',{
        link_url:link.href,
        link_text:(link.textContent||'').trim().slice(0,100),
        page_path:window.location.pathname
      });
    }
  });

  document.querySelectorAll('img[loading="lazy"]').forEach(function(img){
    img.addEventListener('error',function(){
      img.closest('.product-card,.directory-item,.page-hero-media,.feature-image')?.classList.add('image-error');
    });
  });
})();

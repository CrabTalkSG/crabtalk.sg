
(function(){
  const toggle=document.querySelector('[data-menu-toggle]');
  const menu=document.querySelector('[data-menu]');
  if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});menu.addEventListener('click',e=>{if(e.target.closest('a')){menu.classList.remove('open');toggle.setAttribute('aria-expanded','false')}})}
  const search=document.querySelector('[data-product-search]');
  const cards=[...document.querySelectorAll('[data-product-card]')];
  const buttons=[...document.querySelectorAll('[data-filter]')];
  const noResults=document.querySelector('[data-no-results]');
  let filter='all';
  function apply(){const q=(search?.value||'').trim().toLowerCase();let shown=0;cards.forEach(card=>{const cat=card.dataset.category||'';const text=(card.dataset.name+' '+card.textContent).toLowerCase();const okFilter=filter==='all'||cat===filter;const okQuery=!q||text.includes(q);card.hidden=!(okFilter&&okQuery);if(!card.hidden)shown++});if(noResults)noResults.hidden=shown!==0;document.querySelectorAll('.directory-group').forEach(group=>{group.hidden=![...group.querySelectorAll('[data-product-card]')].some(c=>!c.hidden)})}
  buttons.forEach(btn=>btn.addEventListener('click',()=>{filter=btn.dataset.filter;buttons.forEach(b=>b.classList.toggle('active',b===btn));apply()}));
  search?.addEventListener('input',apply);
})();

document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.querySelector('.menu-btn');
  const mobile=document.querySelector('.mobile-nav');
  if(menu&&mobile) menu.addEventListener('click',()=>mobile.classList.toggle('open'));

  document.querySelectorAll('.research-toggle').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const card=btn.closest('.research-card');
      const content=card.querySelector('.research-content');
      const open=card.classList.toggle('open');
      btn.setAttribute('aria-expanded',String(open));
      content.hidden=!open;
    });
  });

  const search=document.querySelector('#search');
  if(search){
    const cards=[...document.querySelectorAll('.research-card')];
    search.addEventListener('input',()=>{
      const q=search.value.toLowerCase().trim();
      cards.forEach(card=>{
        const match=(card.dataset.title+' '+card.dataset.author+' '+card.innerText).toLowerCase().includes(q);
        card.classList.toggle('hidden',!!q&&!match);
      });
    });
  }
  const openAll=document.querySelector('#openAll');
  const closeAll=document.querySelector('#closeAll');
  function setAll(open){document.querySelectorAll('.research-card').forEach(card=>{card.classList.toggle('open',open);const btn=card.querySelector('.research-toggle');const content=card.querySelector('.research-content');if(btn)btn.setAttribute('aria-expanded',String(open));if(content)content.hidden=!open;});}
  if(openAll)openAll.addEventListener('click',()=>setAll(true));
  if(closeAll)closeAll.addEventListener('click',()=>setAll(false));
});

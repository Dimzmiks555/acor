const menuButton=document.querySelector('.menu-button');
const navigation=document.querySelector('#navigation');
function closeMenu(){navigation.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.querySelector('.menu-word').textContent='Меню';menuButton.querySelector('.menu-status').src='/img/icons/plus.svg';}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';navigation.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));menuButton.querySelector('.menu-word').textContent=open?'Закрыть':'Меню';menuButton.querySelector('.menu-status').src=open?'/img/icons/dash.svg':'/img/icons/plus.svg';});
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!navigation.hidden){closeMenu();menuButton.focus();}});
document.addEventListener('click',event=>{if(!navigation.hidden&&!navigation.contains(event.target)&&!menuButton.contains(event.target))closeMenu();});

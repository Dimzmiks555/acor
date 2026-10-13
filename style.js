const menuButton=document.querySelector('.menu-button');
const navigation=document.querySelector('#navigation');
function setMenu(open,restoreFocus=false){
 navigation.inert=!open;
 menuButton.setAttribute('aria-expanded',String(open));
 menuButton.querySelector('.menu-word').textContent=open?'Закрыть':'Обзор';
 menuButton.querySelector('.menu-status').textContent=open?'[ × ]':'[ 04 ]';
 document.body.classList.toggle('menu-open',open);
 if(restoreFocus)menuButton.focus();
}
setMenu(false);
menuButton.addEventListener('click',()=>setMenu(menuButton.getAttribute('aria-expanded')!=='true'));
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',event=>{
 if(menuButton.getAttribute('aria-expanded')!=='true')return;
 if(event.key==='Escape')setMenu(false,true);
 if(event.key==='Tab'){
  const controls=[menuButton,...navigation.querySelectorAll('a')];
  const index=controls.indexOf(document.activeElement);
  event.preventDefault();
  controls[(index+(event.shiftKey?-1:1)+controls.length)%controls.length].focus();
 }
});
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
const motionItems=document.querySelectorAll('.section-heading,.intro h2,.intro-bottom,.product-card,.packing-copy,.packing figure,.review-grid figure,.buy-section>div');
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.1});
if(!reducedMotion.matches)motionItems.forEach((el,index)=>{el.classList.add('reveal');el.style.setProperty('--reveal-delay',`${index%3*70}ms`);observer.observe(el);});
let frame=0;
const hero=document.querySelector('.hero-wrap');
function renderParallax(){
 frame=0;
 const distance=Math.min(scrollY,hero.offsetHeight);
 const amount=reducedMotion.matches||innerWidth<761?0:distance;
 hero.style.setProperty('--background-shift',`${amount*.17}px`);
 hero.style.setProperty('--product-shift',`${amount*.09}px`);
 hero.style.setProperty('--wordmark-shift',`${-amount*.035}px`);
}
function queueParallax(){if(!frame)frame=requestAnimationFrame(renderParallax);}
addEventListener('scroll',queueParallax,{passive:true});
addEventListener('resize',queueParallax,{passive:true});
reducedMotion.addEventListener('change',()=>{if(reducedMotion.matches)motionItems.forEach(el=>el.classList.add('is-visible'));queueParallax();});
queueParallax();

let configPromise=fetch('/runtime.json').then(r=>r.json()).catch(()=>({formUrl:null}));
const dialog=document.querySelector('dialog');
let interactions=new AbortController();
const listen=(el,event,fn)=>el.addEventListener(event,fn,{signal:interactions.signal});
document.querySelectorAll('[data-book]').forEach(button=>listen(button,'click',async()=>{
 const location=button.dataset.book;
 // Extension point: CTA click only; never a Google Form submission event.
 window.dispatchEvent(new CustomEvent('imatters:booking-click',{detail:{location,event:'booking_cta_click'}}));
 const config=await configPromise;
 if(config.formUrl){try{const url=new URL(config.formUrl);if(url.protocol==='https:'&&['docs.google.com','forms.gle'].includes(url.hostname)){window.location.assign(url.href);return;}}catch{}}
 dialog.showModal();
}));
document.querySelectorAll('[data-close],.close').forEach(b=>listen(b,'click',()=>dialog.close()));
listen(dialog,'click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
const menu=document.querySelector('.menu');listen(menu,'click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));});
document.querySelectorAll('nav a').forEach(a=>listen(a,'click',()=>menu.setAttribute('aria-expanded','false')));
listen(document,'keydown',e=>{if(e.key==='Escape')menu.setAttribute('aria-expanded','false');});

// Progressive enhancement: HTML stays visible if the animation library fails.
let animationContext;
const revealed=new WeakSet();
function initAnimations(){
 if(animationContext||!window.gsap||!window.ScrollTrigger)return;
 gsap.registerPlugin(ScrollTrigger);
 animationContext=gsap.matchMedia();
 animationContext.add('(prefers-reduced-motion: no-preference)',()=>{
  const tweens=new Set();
  const entries=[...document.querySelectorAll('h1,h2,.service-card,.steps article')];
  entries.forEach(el=>{
   if(revealed.has(el))return;
   // Off-screen content is never hidden in advance. Start only as it enters.
   ScrollTrigger.create({trigger:el,start:'top 92%',once:true,onEnter:()=>{
    revealed.add(el);
    const tween=gsap.fromTo(el,{opacity:.15,y:16},{opacity:1,y:0,duration:.5,ease:'power2.out',clearProps:'opacity,transform',onComplete:()=>tweens.delete(tween)});
    tweens.add(tween);
   }});
  });
  return ()=>{tweens.forEach(tween=>tween.kill());entries.forEach(el=>{el.style.removeProperty('opacity');el.style.removeProperty('transform');});};
 });
 animationContext.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)',()=>{
  document.querySelectorAll('[data-parallax-frame]').forEach(frame=>{
   gsap.fromTo(frame.querySelector('[data-parallax-layer]'),{y:-20},{y:20,ease:'none',scrollTrigger:{trigger:frame,start:'top bottom',end:'bottom top',scrub:true,invalidateOnRefresh:true}});
  });
 });
}
function cleanupAnimations(){animationContext?.revert();animationContext=null;}
addEventListener('pagehide',()=>{cleanupAnimations();interactions.abort();});
// Traditional HTML navigation creates a fresh document; BFCache only restores animations.
addEventListener('pageshow',event=>{if(event.persisted)location.reload();});
initAnimations();
document.fonts?.ready.then(()=>{if(animationContext)ScrollTrigger.refresh();});

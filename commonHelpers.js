import{A as g,a as h,b as y}from"./assets/vendor-c4f2e476.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();g.create({baseURL:"https://portfolio-js.b.goit.study/api"});const v={listEl:document.querySelector(".benefits-list")},b=[{svg:"images/svg/icons.svg#user",title:"Expertise",text:"As a highly experienced developer, I have deep knowledge of programming and website development."},{svg:"images/svg/icons.svg#message",title:"Communication",text:" Understanding your needs and wants is my priority and I am always open to discussions and corrections."},{svg:"images/svg/icons.svg#brush",title:"Art",text:"Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life. "},{svg:"images/svg/icons.svg#hourglass",title:"Urgent execution",text:"I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work."}];function x(e){const t=e.svg,n=e.title,a=e.text;return`<li class="benefits-list-item">
        <span class="bg-icon">
          <svg class="icon-ben" width="24" height="24">
          <use href="${t}"></use>
          </svg>
          </span>
          <h3 class="benefits-item-title">${n}</h3>
          <p class="benefits-item-text">${a}</p>
      </li>`}function w(e){return e.map(x).join("")}function k(e){const t=w(e);v.listEl.insertAdjacentHTML("beforeend",t)}k(b);VANTA.NET({el:"#animation-box",mouseControls:!0,touchControls:!0,gyroControls:!0,minHeight:100,minWidth:200,scale:1,scaleMobile:1,color:15547204,backgroundColor:1842464,points:17,maxDistance:25});const E={listEl:document.querySelector(".faq-list")},T=[{title:"What programming languages are most often used in your project?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{title:"What are the deadlines for the project?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"What payment methods do you accept?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"How can I contact you?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{title:"Do you provide advice or support?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"What does the process of developing a software product look like from idea to implementation?",text:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}];function j(e){const t=e.title,n=e.text;return`
    <li class="ac" id="ac">
    <h3 class="ac-header">
    <button type="button" class="ac-trigger" id="ac-header">
    ${t}
    <span class="circle-faq">
    <svg class="icon-faq " width="12" height="8">
    <use href="images/svg/icons.svg#arrowDown"></use>
    </svg>
    </span>
    </button>
    </h3>
    <div class="ac-panel">
    <p class="ac-text" id="ac-text">
    ${n}
    </p>
    </div>
    </li>
    `}function A(e){return e.map(j).join("")}function q(e){const t=A(e);E.listEl.insertAdjacentHTML("afterbegin",t)}q(T);new h(".accordion-container",{});y.create(`
     <div class="container">
     <div class="modal">
    <h3 class="title-modal">Thank you for your interest in cooperation!</h3>
    <p class="text-modal">
      The manager will contact you shortly to discuss further details and
      opportunities for cooperation. Please stay in touch.
    </p>
    <a href="" class="close"
      ><svg class="icon" width="22" height="22">
        <use href="images/svg/icons.svg#close"></use>
      </svg>
    </a>
  </div>
</div>

`,{onShow:e=>{e.element().querySelector("a").onclick=e.close,document.addEventListener("keydown",t=>{t.code==="Escape"&&e.close()}),document.body.style.position="fixed"},onClose:e=>{console.log("onClose",e),document.body.style.position=""}});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const n=document.querySelector(this.getAttribute("href"));if(n){let u=function(i){d===null&&(d=i);const c=i-d,l=f(c,o,s,r);window.scrollTo(0,l),c<r&&requestAnimationFrame(u)},f=function(i,c,l,m){return i/=m/2,i<1?l/2*i*i+c:(i--,-l/2*(i*(i-2)-1)+c)};const a=n.getBoundingClientRect().top+window.pageYOffset,o=window.pageYOffset,s=a-o,r=500;let d=null;requestAnimationFrame(u)}})});let L=document.querySelectorAll(".section-animation");function p(){let e=window.innerHeight;L.forEach(t=>{t.getBoundingClientRect().top<e-100&&(t.style.opacity="1",t.style.transform="translateY(0)")})}p();window.addEventListener("scroll",p);
//# sourceMappingURL=commonHelpers.js.map

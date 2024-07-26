import{A as k,a as y,b as E}from"./assets/vendor-c4f2e476.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();k.create({baseURL:"https://portfolio-js.b.goit.study/api"});const T={accordionContainerEl:document.querySelector(".about-me-accordion-container")},L=[{title:"About me",textFirst:"I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.",textSecond:"Able to work both independently and in a team.I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions.Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work.I am always looking for opportunities for self - improvement.I actively study new technologies and practices to stay abreast of the latest innovations.I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."},{title:"Role",textFirst:"Frontend development",textSecond:"HeadlessCMS, Wordpress",textThird:"Blender(enjoy)"},{title:"Education",textFirst:"2018 - 2019  / Frontend Development Diploma, GoIT IT School, New York ",textSecond:"2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York",textThird:"2020 - 2022 / Advanced Blender Animation Techniques, Udemy"}];function S(e){return e.map(t=>`
  <li class="ac" id="about-ac">
    <h3 class="ac-header" id="about-ac-header">
      <button type="button" class="ac-trigger" id="about-ac-trigger">
      ${t.title}
       <span class="about-circle"><svg class="about-ac-icon" width="10" height="5">
                <use href="./svg/icons.svg#arrowDown"></use>
              </svg>
              </span>
      </button>
    </h3>
    <div class="ac-panel" id="about-ac-panel">
      <p class="ac-text" id="about-ac-text">${t.textFirst}</p>
       <p class="ac-text" id="about-ac-text">${t.textSecond}</p>
       <p class="ac-text" id="about-ac-text">${t.textThird||""}</p>
    </div>
  </li>`).join("")}function q(){const e=S(L);T.accordionContainerEl.innerHTML=e}q();new y(".about-me-accordion-container",{openOnInit:[0]});const l="/js2team_proj/assets/icons-6e183fea.svg",A={listEl:document.querySelector(".benefits-list")},I=[{svg:`${l}#user`,title:"Expertise",text:"As a highly experienced developer, I have deep knowledge of programming and website development."},{svg:`${l}#message`,title:"Communication",text:" Understanding your needs and wants is my priority and I am always open to discussions and corrections."},{svg:`${l}#brush`,title:"Art",text:"Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life. "},{svg:`${l}#hourglass`,title:"Urgent execution",text:"I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work."}];function j(e){const t=e.svg,s=e.title,i=e.text;return`<li class="benefits-list-item">
        <span class="bg-icon">
          <svg class="icon-ben" width="24" height="24">
          <use href="${t}"></use>
          </svg>
          </span>
          <h3 class="benefits-item-title">${s}</h3>
          <p class="benefits-item-text">${i}</p>
      </li>`}function $(e){return e.map(j).join("")}function M(e){const t=$(e);A.listEl.insertAdjacentHTML("beforeend",t)}M(I);const p=VANTA.NET({mouseControls:!0,touchControls:!0,gyroControls:!0,minHeight:200,minWidth:200,scale:1,scaleMobile:1,maxDistance:25,el:"#animation-box",color:15547204,backgroundColor:1842464});document.querySelectorAll(".bg-icon");function C(){p.setOptions({color:15547204})}function O(){p.setOptions({color:13034279})}function P(){p.setOptions({color:16744200})}const D=document.querySelector(".covers"),g=document.querySelectorAll(".marquee__line");function B(e,t){e.forEach(s=>{s.isIntersecting?g.forEach(i=>i.classList.add("animate")):g.forEach(i=>i.classList.remove("animate"))})}let F={threshold:0},H=new IntersectionObserver(B,F);H.observe(D);const N={listEl:document.querySelector(".faq-list")},W=[{title:"What programming languages are most often used in your project?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{title:"What are the deadlines for the project?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"What payment methods do you accept?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"How can I contact you?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{title:"Do you provide advice or support?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"What does the process of developing a software product look like from idea to implementation?",text:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}];function Y(e){const t=e.title,s=e.text;return`
    <li class="ac" id="ac">
    <h3 class="ac-header">
    <button type="button" class="ac-trigger" id="ac-header">
    ${t}
    <span class="circle-faq">
    <svg class="icon-faq " width="12" height="8">
    <use href="${l}#arrowDown"></use>
    </svg>
    </span>
    </button>
    </h3>
    <div class="ac-panel">
    <p class="ac-text" id="ac-text">
    ${s}
    </p>
    </div>
    </li>
    `}function R(e){return e.map(Y).join("")}function U(e){const t=R(e);N.listEl.insertAdjacentHTML("afterbegin",t)}U(W);new y(".accordion-container",{});const r={deskMenuBtn:document.querySelector(".desk-menu-btn"),deskMenu:document.querySelector(".desk-menu"),deskMenuBox:document.querySelector(".desk-menu-box"),header:document.querySelector(".header")};function v(){r.deskMenu.classList.add("visually-hidden")}r.deskMenuBtn.addEventListener("click",()=>{r.deskMenu.classList.toggle("visually-hidden")});r.deskMenu.addEventListener("click",e=>{e.target.tagName==="A"&&v()});document.addEventListener("click",e=>{r.deskMenuBox.contains(e.target)||v()});let m=0;window.addEventListener("scroll",()=>{const e=window.scrollY||document.documentElement.scrollTop;e>m?r.header.classList.add("hidden"):e<m&&r.header.classList.remove("hidden"),m=e});E.create(`
     <div class="container">
     <div class="modal">
    <h3 class="title-modal">Thank you for your interest in cooperation!</h3>
    <p class="text-modal">
      The manager will contact you shortly to discuss further details and
      opportunities for cooperation. Please stay in touch.
    </p>
    <a href="" class="close"
      ><svg class="icon" width="22" height="22">
        <use href="${l}#close"></use>
      </svg>
    </a>
  </div>
</div>
`,{onShow:e=>{e.element().querySelector("a").onclick=e.close,document.addEventListener("keydown",t=>{t.code==="Escape"&&e.close()}),document.body.style.position="fixed"},onClose:e=>{console.log("onClose",e),document.body.style.position=""}});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const s=document.querySelector(this.getAttribute("href"));if(s){let h=function(a){f===null&&(f=a);const d=a-f,u=w(d,o,n,c);window.scrollTo(0,u),d<c&&requestAnimationFrame(h)},w=function(a,d,u,x){return a/=x/2,a<1?u/2*a*a+d:(a--,-u/2*(a*(a-2)-1)+d)};const i=s.getBoundingClientRect().top+window.pageYOffset,o=window.pageYOffset,n=i-o,c=500;let f=null;requestAnimationFrame(h)}})});let _=document.querySelectorAll(".section-animation");function b(){let e=window.innerHeight;_.forEach(t=>{t.getBoundingClientRect().top<e-100&&(t.style.opacity="1",t.style.transform="translateY(0)")})}b();window.addEventListener("scroll",b);const V={themeList:document.querySelector(".theme-list")};V.themeList.addEventListener("click",e=>{switch(console.log(e.target.dataset.action),e.target.dataset.action){case"red":return C();case"yellow":return O();case"orange":return P()}});
//# sourceMappingURL=commonHelpers.js.map

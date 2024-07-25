import{A as y,a as p,b as v}from"./assets/vendor-c4f2e476.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();y.create({baseURL:"https://portfolio-js.b.goit.study/api"});const b={accordionContainerEl:document.querySelector(".about-me-accordion-container")},w=[{title:"About me",textFirst:"I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.",textSecond:"Able to work both independently and in a team.I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions.Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work.I am always looking for opportunities for self - improvement.I actively study new technologies and practices to stay abreast of the latest innovations.I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."},{title:"Role",textFirst:"Frontend development",textSecond:"HeadlessCMS, Wordpress",textThird:"Blender(enjoy)"},{title:"Education",textFirst:"2018 - 2019  / Frontend Development Diploma, GoIT IT School, New York ",textSecond:"2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York",textThird:"2020 - 2022 / Advanced Blender Animation Techniques, Udemy"}];function x(e){return e.map(t=>`
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
  </li>`).join("")}function k(){const e=x(w);b.accordionContainerEl.innerHTML=e}k();new p(".about-me-accordion-container",{openOnInit:[0]});const T={listEl:document.querySelector(".benefits-list")},I=[{svg:"images/svg/icons.svg#user",title:"Expertise",text:"As a highly experienced developer, I have deep knowledge of programming and website development."},{svg:"images/svg/icons.svg#message",title:"Communication",text:" Understanding your needs and wants is my priority and I am always open to discussions and corrections."},{svg:"images/svg/icons.svg#brush",title:"Art",text:"Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life. "},{svg:"images/svg/icons.svg#hourglass",title:"Urgent execution",text:"I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work."}];function A(e){const t=e.svg,i=e.title,a=e.text;return`<li class="benefits-list-item">
        <span class="bg-icon">
          <svg class="icon-ben" width="24" height="24">
          <use href="${t}"></use>
          </svg>
          </span>
          <h3 class="benefits-item-title">${i}</h3>
          <p class="benefits-item-text">${a}</p>
      </li>`}function E(e){return e.map(A).join("")}function q(e){const t=E(e);T.listEl.insertAdjacentHTML("beforeend",t)}q(I);const u=VANTA.NET({mouseControls:!0,touchControls:!0,gyroControls:!0,minHeight:200,minWidth:200,scale:1,scaleMobile:1,maxDistance:25,el:"#animation-box",color:15547204,backgroundColor:1842464}),L=document.querySelectorAll(".bg-icon");console.log(L);function j(){u.setOptions({color:15547204})}function S(){u.setOptions({color:13034279})}function C(){u.setOptions({color:16744200})}const P={listEl:document.querySelector(".faq-list")},O=[{title:"What programming languages are most often used in your project?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{title:"What are the deadlines for the project?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"What payment methods do you accept?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"How can I contact you?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{title:"Do you provide advice or support?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"What does the process of developing a software product look like from idea to implementation?",text:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}];function $(e){const t=e.title,i=e.text;return`
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
    ${i}
    </p>
    </div>
    </li>
    `}function D(e){return e.map($).join("")}function F(e){const t=D(e);P.listEl.insertAdjacentHTML("afterbegin",t)}F(O);new p(".accordion-container",{});v.create(`
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

`,{onShow:e=>{e.element().querySelector("a").onclick=e.close,document.addEventListener("keydown",t=>{t.code==="Escape"&&e.close()}),document.body.style.position="fixed"},onClose:e=>{console.log("onClose",e),document.body.style.position=""}});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const i=document.querySelector(this.getAttribute("href"));if(i){let f=function(s){d===null&&(d=s);const c=s-d,l=g(c,o,n,r);window.scrollTo(0,l),c<r&&requestAnimationFrame(f)},g=function(s,c,l,h){return s/=h/2,s<1?l/2*s*s+c:(s--,-l/2*(s*(s-2)-1)+c)};const a=i.getBoundingClientRect().top+window.pageYOffset,o=window.pageYOffset,n=a-o,r=500;let d=null;requestAnimationFrame(f)}})});let M=document.querySelectorAll(".section-animation");function m(){let e=window.innerHeight;M.forEach(t=>{t.getBoundingClientRect().top<e-100&&(t.style.opacity="1",t.style.transform="translateY(0)")})}m();window.addEventListener("scroll",m);const H={themeList:document.querySelector(".theme-list")};H.themeList.addEventListener("click",e=>{switch(console.log(e.target.dataset.action),e.target.dataset.action){case"red":return j();case"yellow":return S();case"orange":return C()}});
//# sourceMappingURL=commonHelpers.js.map

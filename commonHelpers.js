import{A as P,a as k,S as E,b as S}from"./assets/vendor-01adc155.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();P.create({baseURL:"https://portfolio-js.b.goit.study/api"});const q={accordionContainerEl:document.querySelector(".about-me-accordion-container")},M=[{title:"About me",textFirst:"I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.",textSecond:"Able to work both independently and in a team.I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions.Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work.I am always looking for opportunities for self - improvement.I actively study new technologies and practices to stay abreast of the latest innovations.I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."},{title:"Role",textFirst:"Frontend development",textSecond:"HeadlessCMS, Wordpress",textThird:"Blender(enjoy)"},{title:"Education",textFirst:"2018 - 2019  / Frontend Development Diploma, GoIT IT School, New York ",textSecond:"2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York",textThird:"2020 - 2022 / Advanced Blender Animation Techniques, Udemy"}];function I(e){return e.map(t=>`
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
  </li>`).join("")}function N(){const e=I(M);q.accordionContainerEl.innerHTML=e}N();new k(".about-me-accordion-container",{openOnInit:[0]});const d="/js2team_proj/assets/icons-6e183fea.svg",C={listEl:document.querySelector(".benefits-list")},O=[{svg:`${d}#user`,title:"Expertise",text:"As a highly experienced developer, I have deep knowledge of programming and website development."},{svg:`${d}#message`,title:"Communication",text:" Understanding your needs and wants is my priority and I am always open to discussions and corrections."},{svg:`${d}#brush`,title:"Art",text:"Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life. "},{svg:`${d}#hourglass`,title:"Urgent execution",text:"I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work."}];function W(e){const t=e.svg,o=e.title,a=e.text;return`<li class="benefits-list-item">
        <span class="bg-icon">
          <svg class="icon-ben" width="24" height="24">
          <use href="${t}"></use>
          </svg>
          </span>
          <h3 class="benefits-item-title">${o}</h3>
          <p class="benefits-item-text">${a}</p>
      </li>`}function z(e){return e.map(W).join("")}function B(e){const t=z(e);C.listEl.insertAdjacentHTML("beforeend",t)}B(O);const b=VANTA.NET({mouseControls:!0,touchControls:!0,gyroControls:!0,minHeight:200,minWidth:200,scale:1,scaleMobile:1,maxDistance:25,el:"#animation-box",color:15547204,backgroundColor:1842464});document.querySelectorAll(".bg-icon");function Y(){b.setOptions({color:15547204})}function H(){b.setOptions({color:13034279})}function Q(){b.setOptions({color:16744200})}const R=document.querySelector(".covers"),y=document.querySelectorAll(".marquee__line");function J(e,t){e.forEach(o=>{o.isIntersecting?y.forEach(a=>a.classList.add("animate")):y.forEach(a=>a.classList.remove("animate"))})}let U={threshold:0},D=new IntersectionObserver(J,U);D.observe(R);const K={listEl:document.querySelector(".faq-list")},F=[{title:"What programming languages are most often used in your project?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{title:"What are the deadlines for the project?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"What payment methods do you accept?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"How can I contact you?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{title:"Do you provide advice or support?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"What does the process of developing a software product look like from idea to implementation?",text:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}];function V(e){const t=e.title,o=e.text;return`
    <li class="ac" id="ac">
    <h3 class="ac-header">
    <button type="button" class="ac-trigger" id="ac-header">
    ${t}
    <span class="circle-faq">
    <svg class="icon-faq " width="12" height="8">
    <use href="${d}#arrowDown"></use>
    </svg>
    </span>
    </button>
    </h3>
    <div class="ac-panel">
    <p class="ac-text" id="ac-text">
    ${o}
    </p>
    </div>
    </li>
    `}function _(e){return e.map(V).join("")}function X(e){const t=_(e);K.listEl.insertAdjacentHTML("afterbegin",t)}X(F);new k(".accordion-container",{});const c={deskMenuBtn:document.querySelector(".desk-menu-btn"),deskMenu:document.querySelector(".desk-menu"),deskMenuBox:document.querySelector(".desk-menu-box"),header:document.querySelector(".header")};function j(){c.deskMenu.classList.add("visually-hidden")}c.deskMenuBtn.addEventListener("click",()=>{c.deskMenu.classList.toggle("visually-hidden")});c.deskMenu.addEventListener("click",e=>{e.target.tagName==="A"&&j()});document.addEventListener("click",e=>{c.deskMenuBox.contains(e.target)||j()});let f=0;window.addEventListener("scroll",()=>{const e=window.scrollY||document.documentElement.scrollTop;e>f?c.header.classList.add("hidden"):e<f&&c.header.classList.remove("hidden"),f=e});const G="/js2team_proj/assets/image_1_mob@1x-89b2e206.webp",Z="/js2team_proj/assets/image_1_mob@2x-999825f4.webp",$="/js2team_proj/assets/image_1_tab_desk@1x-90b1035f.webp",ee="/js2team_proj/assets/image_1_tab_desk@2x-25537a1a.webp",te="/js2team_proj/assets/image_2_mob@1x-29b35221.webp",se="/js2team_proj/assets/image_2_mob@2x-4a031e92.webp",oe="/js2team_proj/assets/image_2_tab_desk@1x-f2489662.webp",ne="/js2team_proj/assets/image_2_tab_desk@2x-0e0ab3ec.webp",ie="data:image/webp;base64,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",ae="/js2team_proj/assets/image_3_mob@2x-f08587ef.webp",re="/js2team_proj/assets/image_3_tab_desk@1x-c6b16f91.webp",ce="/js2team_proj/assets/image_3_tab_desk@2x-c6650a6e.webp",i={project1_mob1x:G,project1_mob2x:Z,project1_tab1x:$,project1_tab2x:ee,project2_mob1x:te,project2_mob2x:se,project2_tab1x:oe,project2_tab2x:ne,project3_mob1x:ie,project3_mob2x:ae,project3_tab1x:re,project3_tab2x:ce},le=[{skill1:"&num;react",skill2:"&num;js",skill3:"&num;node js",skill4:"&num;git",title:"Programming Across Borders: Ideas, Technologies, Innovations",href:"https://github.com/koleso8/js2team_proj",link:"See project",imgMob1:i.project1_mob1x,imgMob2:i.project1_mob2x,imgTab1:i.project1_tab1x,imgTab2:i.project1_tab2x},{skill1:"&num;react",skill2:"&num;js",skill3:"&num;node js",skill4:"&num;git",title:"Programming Across Borders: Ideas, Technologies, Innovations",href:"https://github.com/koleso8/js2team_proj",link:"See project",imgMob1:i.project2_mob1x,imgMob2:i.project2_mob2x,imgTab1:i.project2_tab1x,imgTab2:i.project2_tab2x},{skill1:"&num;react",skill2:"&num;js",skill3:"&num;node js",skill4:"&num;git",title:"Programming Across Borders: Ideas, Technologies, Innovations",href:"https://github.com/koleso8/js2team_proj",link:"See project",imgMob1:i.project3_mob1x,imgMob2:i.project3_mob2x,imgTab1:i.project3_tab1x,imgTab2:i.project3_tab2x}],de=document.querySelector(".projects-cards"),g=document.querySelector(".swiper-button-prev"),h=document.querySelector(".swiper-button-next"),x=document.querySelector(".icon-prev"),w=document.querySelector(".icon-next");function ue(e){return e.map(t=>`<li class="projects-card swiper-slide">
          <div class="projects-card-desc">
            <ul class="projects-card-skills">
              <li><p class="projects-card-skill">${t.skill1}</p></li>
              <li><p class="projects-card-skill">${t.skill2}</p></li>
              <li><p class="projects-card-skill">${t.skill3}</p></li>
              <li><p class="projects-card-skill">${t.skill4}</p></li>
            </ul>
            <p class="projects-card-title">
              ${t.title}
            </p>
            <a
              class="projects-card-link"
              target="_blank"
              href="${t.href}"
              >${t.link}</a
            >
          </div>
          <div class="projects-card-image">
           <picture>
            <source
                 media="(min-width: 1440px)"
                srcset="
                ${t.imgTab1} 1x,
                ${t.imgTab2} 2x
                "
                type="image/webp"
            />
            <source
                media="(min-width: 768px)"
                srcset="
                ${t.imgTab1} 1x,
                ${t.imgTab2} 2x
                "
                type="image/webp"
            />
            <source
                media="(max-width: 767px)"
                srcset="
                ${t.imgMob1} 1x,
                ${t.imgMob2} 2x
                "
                type="image/webp"
            />
            <img
                src="${t.imgMob1}"
                alt="project"
                width="311"
                height="195"
                class="projects-card-img"
            />
            </picture>
          </div>
        </li>`).join("")}function pe(e){const t=ue(e);de.innerHTML=t}pe(le);document.addEventListener("DOMContentLoaded",()=>{const e=new E(".swiper-container",{slidesPerView:1,spaceBetween:20});function t(){e.isBeginning?(g.classList.add("disabled"),x.classList.add("disabled")):(g.classList.remove("disabled"),x.classList.remove("disabled")),e.isEnd?(h.classList.add("disabled"),w.classList.add("disabled")):(h.classList.remove("disabled"),w.classList.remove("disabled"))}h.addEventListener("click",()=>{e.slideNext(1e3)}),g.addEventListener("click",()=>{e.slidePrev(1e3)}),document.addEventListener("keydown",o=>{o.key==="ArrowRight"?e.slideNext(1e3):o.key==="ArrowLeft"?e.slidePrev(1e3):o.key==="Tab"&&(o.preventDefault(),o.shiftKey?e.slidePrev(1e3):e.slideNext(1e3))}),e.on("slideChange",t),t()});S.create(`
     <div class="container">
     <div class="modal">
    <h3 class="title-modal">Thank you for your interest in cooperation!</h3>
    <p class="text-modal">
      The manager will contact you shortly to discuss further details and
      opportunities for cooperation. Please stay in touch.
    </p>
    <a href="" class="close"
      ><svg class="icon" width="22" height="22">
        <use href="${d}#close"></use>
      </svg>
    </a>
  </div>
</div>
`,{onShow:e=>{e.element().querySelector("a").onclick=e.close,document.addEventListener("keydown",t=>{t.code==="Escape"&&e.close()}),document.body.style.position="fixed"},onClose:e=>{console.log("onClose",e),document.body.style.position=""}});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const o=document.querySelector(this.getAttribute("href"));if(o){let v=function(r){m===null&&(m=r);const u=r-m,p=A(u,s,n,l);window.scrollTo(0,p),u<l&&requestAnimationFrame(v)},A=function(r,u,p,T){return r/=T/2,r<1?p/2*r*r+u:(r--,-p/2*(r*(r-2)-1)+u)};const a=o.getBoundingClientRect().top+window.pageYOffset,s=window.pageYOffset,n=a-s,l=500;let m=null;requestAnimationFrame(v)}})});let me=document.querySelectorAll(".section-animation");function L(){let e=window.innerHeight;me.forEach(t=>{t.getBoundingClientRect().top<e-100?(t.style.opacity="1",t.style.transform="translateY(0)"):(t.style.opacity="0",t.style.transform="translateY(0)")})}L();window.addEventListener("scroll",L);const fe={themeList:document.querySelector(".theme-list")};fe.themeList.addEventListener("click",e=>{switch(console.log(e.target.dataset.action),e.target.dataset.action){case"red":return Y();case"yellow":return H();case"orange":return Q()}});
//# sourceMappingURL=commonHelpers.js.map

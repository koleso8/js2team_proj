import{A as R,S as x,N as L,K as P,M,a as $,b as z,c as Y}from"./assets/vendor-e6f07230.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();const B=R.create({baseURL:"https://portfolio-js.b.goit.study/api"});async function Q(){return(await B.get("/reviews")).data}async function D(e){return(await B.post("/requests",e)).data}const d="/js2team_proj/assets/icons-6e183fea.svg";x.use([L,P,M]);const I={accordionContainerEl:document.querySelector(".about-me-accordion-container"),swiperWrapperEl:document.querySelector(".swiper-wrapper")},J=[{title:"About me",textFirst:"I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.",textSecond:"Able to work both independently and in a team.I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions.Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work.I am always looking for opportunities for self - improvement.I actively study new technologies and practices to stay abreast of the latest innovations.I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."},{title:"Role",textFirst:"Frontend development",textSecond:"HeadlessCMS, Wordpress",textThird:"Blender(enjoy)"},{title:"Education",textFirst:"2018 - 2019  / Frontend Development Diploma, GoIT IT School, New York ",textSecond:"2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York",textThird:"2020 - 2022 / Advanced Blender Animation Techniques, Udemy"}],U=["HTML / CSS","JavaScript","React","Node. js","React Native","Soft skills","Python"];function V(e){return e.map(t=>`
  <li class="ac" id="about-ac">
    <h3 class="ac-header" id="about-ac-header">
      <button type="button" class="ac-trigger" id="about-ac-trigger">
      ${t.title}
       <span class="about-circle"><svg class="about-ac-icon" width="12" height="8">
                <use href="${d}#arrowDown"></use>
              </svg>
              </span>
      </button>
    </h3>
    <div class="ac-panel" id="about-ac-panel">
      <p class="ac-text" id="about-ac-text">${t.textFirst}</p>
       <p class="ac-text" id="about-ac-text">${t.textSecond}</p>
       <p class="ac-text" id="about-ac-text">${t.textThird||""}</p>
    </div>
  </li>`).join("")}function K(){const e=V(J);I.accordionContainerEl.innerHTML=e}K();new $(".about-me-accordion-container",{openOnInit:[0]});function F(e){return e.map(t=>`
    <div class="swiper-slide">${t}</div>
        `).join("")}function G(){const e=F(U);I.swiperWrapperEl.innerHTML=e}G();const u=new x(".about-skills-swiper",{modules:[L,P,M],navigation:{nextEl:".about-swiper-button-next",grabCursor:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!1,sensitivity:1,eventsTarget:".about-skills-swiper"},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},loop:!0,setWrapperSize:!0,spaceBetween:0,speed:1e3,simulateTouch:!1,slideToClickedSlide:!0,slidesPerGroup:1,grabCursor:!0});function q(){const e=u.slides;e.forEach(s=>s.classList.remove("is-first")),e[u.activeIndex].classList.add("is-first")}document.addEventListener("keydown",e=>{e.key==="Tab"?(e.preventDefault(),u.slideNext(1e3)):e.key==="Shift"&&(e.preventDefault(),u.slidePrev(1e3))});u.update();u.on("slideChange",q);u.on("slideChangeTransitionEnd",q);q();const X={listEl:document.querySelector(".benefits-list")},Z=[{svg:`${d}#user`,title:"Expertise",text:"As a highly experienced developer, I have deep knowledge of programming and website development."},{svg:`${d}#message`,title:"Communication",text:" Understanding your needs and wants is my priority and I am always open to discussions and corrections."},{svg:`${d}#brush`,title:"Art",text:"Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life. "},{svg:`${d}#hourglass`,title:"Urgent execution",text:"I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work."}];function ee(e){const t=e.svg,s=e.title,l=e.text;return`<li class="benefits-list-item">
        <span class="bg-icon">
          <svg class="icon-ben" width="24" height="24">
          <use href="${t}"></use>
          </svg>
          </span>
          <h3 class="benefits-item-title">${s}</h3>
          <p class="benefits-item-text">${l}</p>
      </li>`}function te(e){return e.map(ee).join("")}function se(e){const t=te(e);X.listEl.insertAdjacentHTML("beforeend",t)}se(Z);const b=VANTA.NET({mouseControls:!0,touchControls:!0,gyroControls:!0,minHeight:200,minWidth:200,scale:1,scaleMobile:1,maxDistance:25,el:"#animation-box",color:15547204,backgroundColor:1842464});function ie(){b.setOptions({color:15547204})}function oe(){b.setOptions({color:13034279})}function ne(){b.setOptions({color:16744200})}function ae(){b.setOptions({color:2835521})}function ce(){b.setOptions({color:16872})}const le="/js2team_proj/assets/1@2х-a357cafa.webp",re="/js2team_proj/assets/1_1x-8af67d25.webp",de="/js2team_proj/assets/4@2х-1e0e78b9.webp",ue="/js2team_proj/assets/4_1x-32ae2e13.webp",me="/js2team_proj/assets/5@2х-09b0daa2.webp",pe="/js2team_proj/assets/5_1x-6c94befd.webp",be="/js2team_proj/assets/6@2х-0ae99116.webp",he="/js2team_proj/assets/6_1x-2d387991.webp",ge="/js2team_proj/assets/7@2х-255834f3.webp",fe="/js2team_proj/assets/7_1x-0e407f1a.webp",xe="/js2team_proj/assets/8@2х-563f898c.webp",we="/js2team_proj/assets/8_1x-cddca86a.webp",ve="/js2team_proj/assets/9@2х-286a2bd3.webp",ye="/js2team_proj/assets/9_1x-12803bfe.webp",je="/js2team_proj/assets/10@2х-b2cb52f1.webp",ke="/js2team_proj/assets/10_1x-d251b59b.webp",Le="/js2team_proj/assets/11@2х-7955e579.webp",qe="/js2team_proj/assets/11_1x-0361553e.webp",_e="/js2team_proj/assets/12@2х-b67bfe9b.webp",Ae="/js2team_proj/assets/12_1x-b047004f.webp";let Ee=[re,le,ue,de,pe,me,he,be,fe,ge,we,xe,ye,ve,ke,je,qe,Le,Ae,_e];function Se(e){return`
       <div class="marquee">
        <ul class="marquee__inner">
        <li class="marquee__line animate line1">
        <div class="marquee_picture">
     <picture>
     <source media="(min-width: 1440px)" srcset="
                                    ${e[0]} 1x,
                                    ${e[1]} 2x" />
    <source media="(min-width: 768px)" srcset=" 
                                    ${e[0]} 1x,
                                    ${e[1]} 2x" />
     <source media="(max-width: 767px)" srcset="
                                    ${e[0]} 1x,
                                    ${e[1]} 2x" />
      <img class="project-pic" src="
      ${e[0]}" alt="website" width="282" height="162" loading="lazy"/> </picture> </div> </li>
                        <li class="marquee__line animate line1">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${e[2]} 1x,
                                    ${e[3]} 2x" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${e[2]} 1x,
                                    ${e[3]} 2x" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${e[2]} 1x,
                                    ${e[3]} 2x" />
                                    <img class="project-pic" src="
                                    ${e[2]}" alt="website" width="282"
                                    height="162" loading="lazy" />
                                </picture>
                            </div> </li>

                        <li class="marquee__line animate line1">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${e[4]} 1x,
                                    ${e[5]} 2x" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${e[4]} 1x,
                                    ${e[5]} 2x" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${e[4]} 1x,
                                    ${e[5]} 2x"/>
                                    <img class="project-pic" src="
                                    ${e[4]}" alt="website" width="282"
                                        height="162" loading="lazy" />
                                </picture>
                            </div> </li></ul>

                    <ul class="marquee__inner">
                        <li class="marquee__line animate line2">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${e[6]} 1x,
                                    ${e[7]} 2x" />
                        <source media="(min-width: 768px)" srcset="
                        ${e[6]} 1x,
                        ${e[7]} 2x" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${e[6]} 1x,
                                    ${e[7]} 2x" />
                                    <img class="project-pic" src="
                                    ${e[6]}" alt="website" width="282"
                                        height="162" loading="lazy" />
                                </picture>
                            </div>
                        </li>
                        <li class="marquee__line animate line2">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${e[8]} 1x,
                                     ${e[9]} 2x" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${e[8]} 1x,
                                    ${e[9]} 2x" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${e[8]} 1x,
                                    ${e[9]} 2x" />
                                    <img class="project-pic" src="
                                    ${e[8]}" alt="website" width="282"
                                        height="162" loading="lazy" />
                                </picture>
                            </div>
                        </li>
                        <li class="marquee__line animate line2">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${e[10]} 1x,
                                     ${e[11]} 2x" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${e[10]} 1x,
                                    ${e[11]} 2x" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${e[10]} 1x,
                                    ${e[11]} 2x" />
                                    <img class="project-pic" src="
                                    ${e[10]}" alt="website" width="282"
                                        height="162" loading="lazy"  />
                                </picture></div> </li>
                        <li class="marquee__line animate line2">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${e[12]} 1x,
                                    ${e[13]} 2x" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${e[12]} 1x,
                                     ${e[13]} 2x" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${e[12]} 1x,
                                    ${e[13]} 2x" />
                                    <img class="project-pic" src="
                                    ${e[12]}" alt="website" width="282"
                                        height="162" loading="lazy" />
                                </picture></div></li></ul>
                    <ul class="marquee__inner">
                        <li class="marquee__line animate line1">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${e[12]} 1x,
                                    ${e[13]} 2x" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${e[12]} 1x,
                                     ${e[13]} 2x" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${e[12]} 1x,
                                    ${e[13]} 2x" />
                                    <img class="project-pic" src="
                                    ${e[12]}" alt="website" width="282"
                                        height="162" loading="lazy" />
                                </picture></div></li>
                        <li class="marquee__line animate line1">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${e[14]} 1x,
                                    ${e[15]} 2x" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${e[14]} 1x,
                                     ${e[15]} 2x" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${e[14]} 1x,
                                     ${e[15]} 2x" />
                                    <img class="project-pic" src="
                                    ${e[14]}" alt="website" width="282"
                                    height="162" loading="lazy" />
                                </picture> </div> </li>
                        <li class="marquee__line animate line1">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${e[16]} 1x,
                                    ${e[17]} 2x" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${e[16]} 1x,
                                    ${e[17]} 2x" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${e[16]} 1x,
                                    ${e[17]} 2x" />
                                    <img class="project-pic" src="
                                    ${e[16]}" alt="website" width="282"
                                        height="162" loading="lazy" />
                                </picture>
                            </div>
                        </li>

                        <li class="marquee__line animate line1">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${e[18]} 1x,
                                     ${e[19]} 2x" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${e[18]} 1x,
                                     ${e[19]} 2x" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${e[18]} 1x,
                                    ${e[19]} 2x" />
                                    <img class="project-pic" src="
                                    ${e[18]}" alt="website" width="282"
                                     height="162" loading="lazy" />
                                </picture>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>`}document.querySelector(".background-circle3").innerHTML=Se(Ee);const Te={listEl:document.querySelector(".faq-list")},Pe=[{title:"What programming languages are most often used in your project?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{title:"What are the deadlines for the project?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"What payment methods do you accept?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"How can I contact you?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{title:"Do you provide advice or support?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"What does the process of developing a software product look like from idea to implementation?",text:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}];function Me(e){const t=e.title,s=e.text;return`
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
    ${s}
    </p>
    </div>
    </li>
    `}function $e(e){return e.map(Me).join("")}function ze(e){const t=$e(e);Te.listEl.insertAdjacentHTML("afterbegin",t)}ze(Pe);new $(".accordion-container",{});const r={deskMenuBtn:document.querySelector(".desk-menu-btn"),deskMenu:document.querySelector(".desk-menu"),deskMenuBox:document.querySelector(".desk-menu-box"),header:document.querySelector(".header"),mobMenuBtn:document.querySelector(".mob-menu-btn"),mobMenuBackdrop:document.querySelector(".mob-menu-backdrop")};function C(){r.deskMenu.classList.add("visually-hidden")}r.deskMenuBtn.addEventListener("click",()=>{r.deskMenu.classList.toggle("visually-hidden")});r.deskMenu.addEventListener("click",e=>{e.target.tagName==="A"&&C()});document.addEventListener("click",e=>{r.deskMenuBox.contains(e.target)||C()});let w=0;window.addEventListener("scroll",()=>{const e=window.scrollY||document.documentElement.scrollTop;e>w?r.header.classList.add("hidden"):e<w&&r.header.classList.remove("hidden"),w=e});r.mobMenuBtn.addEventListener("click",Be);function Be(){z.create(`
    <div class="mob-menu-backdrop">
      <div class="mob-menu-modal">
        <div class="rectangles-container">
          <div class="rectangle"></div>
          <div class="rectangle"></div>
          <div class="rectangle"></div>
          <div class="rectangle"></div>
          <div class="rectangle"></div>
          <div class="rectangle"></div>
        </div>
         <button class="mob-menu-close-btn">
        <span class="mob-menu-close-btn-line mob-menu-close-btn-line1"></span>
  <span class="mob-menu-close-btn-line mob-menu-close-btn-line2"></span>
      </button>
        <ul class="mob-menu-list">
          <li class="mob-menu-item">
            <a href="#about-me" class="mob-menu-link">
              About me
            </a>
          </li>
          <li class="mob-menu-item">
            <a href="#benefits" class="mob-menu-link">
              Benefits
            </a>
          </li>
          <li class="mob-menu-item">
            <a href="#projects" class="mob-menu-link">
              Projects
            </a>
          </li>
          <li class="mob-menu-item">
            <a href="#faq" class="mob-menu-link">
              FAQ
            </a>
          </li>
        </ul>
        <a href="#work-together" class="mob-order-btn">
          Order the project
        </a>
      </div>
    </div>
    `,{onShow:t=>{const s=t.element().querySelectorAll("a");t.element().querySelector(".mob-menu-backdrop").addEventListener("click",()=>{t.close()}),s.forEach(o=>{o.addEventListener("click",a=>{a.preventDefault();const m=document.querySelector(o.getAttribute("href"));m&&m.scrollIntoView({behavior:"smooth"}),t.close()})});const i=t.element().querySelector(".mob-order-btn");i&&i.addEventListener("click",o=>{o.preventDefault();const a=document.querySelector(i.getAttribute("href"));a&&a.scrollIntoView({behavior:"smooth"}),t.close()})}}).show()}const Ie="/js2team_proj/assets/image_1_mob@1x-89b2e206.webp",Ce="/js2team_proj/assets/image_1_mob@2x-999825f4.webp",Ne="/js2team_proj/assets/image_1_tab_desk@1x-90b1035f.webp",Oe="/js2team_proj/assets/image_1_tab_desk@2x-25537a1a.webp",We="/js2team_proj/assets/image_2_mob@1x-29b35221.webp",He="/js2team_proj/assets/image_2_mob@2x-4a031e92.webp",Re="/js2team_proj/assets/image_2_tab_desk@1x-f2489662.webp",Ye="/js2team_proj/assets/image_2_tab_desk@2x-0e0ab3ec.webp",Qe="data:image/webp;base64,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",De="/js2team_proj/assets/image_3_mob@2x-f08587ef.webp",Je="/js2team_proj/assets/image_3_tab_desk@1x-c6b16f91.webp",Ue="/js2team_proj/assets/image_3_tab_desk@2x-c6650a6e.webp",n={project1_mob1x:Ie,project1_mob2x:Ce,project1_tab1x:Ne,project1_tab2x:Oe,project2_mob1x:We,project2_mob2x:He,project2_tab1x:Re,project2_tab2x:Ye,project3_mob1x:Qe,project3_mob2x:De,project3_tab1x:Je,project3_tab2x:Ue},Ve=[{skill1:"&num;react",skill2:"&num;js",skill3:"&num;node js",skill4:"&num;git",title:"Programming Across Borders: Ideas, Technologies, Innovations",href:"https://github.com/koleso8/js2team_proj",link:"See project",imgMob1:n.project1_mob1x,imgMob2:n.project1_mob2x,imgTab1:n.project1_tab1x,imgTab2:n.project1_tab2x},{skill1:"&num;react",skill2:"&num;js",skill3:"&num;node js",skill4:"&num;git",title:"Programming Across Borders: Ideas, Technologies, Innovations",href:"https://github.com/koleso8/js2team_proj",link:"See project",imgMob1:n.project2_mob1x,imgMob2:n.project2_mob2x,imgTab1:n.project2_tab1x,imgTab2:n.project2_tab2x},{skill1:"&num;react",skill2:"&num;js",skill3:"&num;node js",skill4:"&num;git",title:"Programming Across Borders: Ideas, Technologies, Innovations",href:"https://github.com/koleso8/js2team_proj",link:"See project",imgMob1:n.project3_mob1x,imgMob2:n.project3_mob2x,imgTab1:n.project3_tab1x,imgTab2:n.project3_tab2x}],Ke=document.querySelector(".projects-cards"),v=document.querySelector(".swiper-button-prev"),y=document.querySelector(".swiper-button-next"),A=document.querySelector(".icon-prev"),E=document.querySelector(".icon-next");function Fe(e){return e.map(t=>`<li class="projects-card swiper-slide">
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
                loading="lazy"
            />
            </picture>
          </div>
        </li>`).join("")}function Ge(e){const t=Fe(e);Ke.innerHTML=t}Ge(Ve);document.addEventListener("DOMContentLoaded",()=>{const e=new x(".swiper-container",{slidesPerView:1,spaceBetween:20,grabCursor:!0});function t(){e.isBeginning?(v.classList.add("disabled"),A.classList.add("disabled")):(v.classList.remove("disabled"),A.classList.remove("disabled")),e.isEnd?(y.classList.add("disabled"),E.classList.add("disabled")):(y.classList.remove("disabled"),E.classList.remove("disabled"))}y.addEventListener("click",()=>{e.slideNext(1e3)}),v.addEventListener("click",()=>{e.slidePrev(1e3)}),document.addEventListener("keydown",s=>{s.key==="ArrowRight"?e.slideNext(1e3):s.key==="ArrowLeft"?e.slidePrev(1e3):s.key==="Tab"&&(s.preventDefault(),s.shiftKey?e.slidePrev(1e3):e.slideNext(1e3))}),e.on("slideChange",t),t()});const Xe=document.querySelector(".reviews-list");async function Ze(){try{const e=await Q();et(e)}catch{throw new Error("Not found")}}Ze();function et(e){const t=e.map(s=>`<li class="reviews-item swiper-slide">
          <img src="${s.avatar_url}" alt="${s.author}"/>
          <h3>${s.author}</h3>
          <p>${s.review}</p>
        </li>`).join("");Xe.insertAdjacentHTML("beforeend",t)}new x(".reviews-swiper",{modules:[L,Y],speed:500,navigation:{nextEl:".reviews-swiper-button-next",prevEl:".reviews-swiper-button-prev"},slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});const tt=z.create(`
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
`,{onShow:e=>{e.element().querySelector("a").onclick=e.close,document.addEventListener("keydown",t=>{t.code==="Escape"&&e.close()}),document.body.style.position="fixed"},onClose:e=>{console.log("onClose",e),document.body.style.position=""}});function st(){return tt.show()}const f=document.querySelector(".form"),j=document.querySelector(".comments"),S=document.querySelector(".email");f.addEventListener("submit",async e=>{e.preventDefault();const t=f.elements.email.value.trim(),s=f.elements.comments.value.trim();await D({email:t,comment:s}),st(),f.reset()});j.addEventListener("input",()=>{const e=j.value.slice(0,150).replace("...","");e.length>=150&&(j.value=e+"...")});S.addEventListener("input",()=>{const e=S.value;e.validity.valid?(e.classList.add("valid"),e.classList.remove("invalid")):(e.classList.add("invalid"),e.classList.remove("valid"))});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const s=document.querySelector(this.getAttribute("href"));if(s){let _=function(c){m===null&&(m=c);const p=c-m,g=W(p,i,o,a);window.scrollTo(0,g),p<a&&requestAnimationFrame(_)},W=function(c,p,g,H){return c/=H/2,c<1?g/2*c*c+p:(c--,-g/2*(c*(c-2)-1)+p)};const l=s.getBoundingClientRect().top+window.pageYOffset,i=window.pageYOffset,o=l-i,a=500;let m=null;requestAnimationFrame(_)}})});let it=document.querySelectorAll(".section-animation");function N(){let e=window.innerHeight;it.forEach(t=>{t.getBoundingClientRect().top<e-100?(t.style.opacity="1",t.style.transform="translateY(0)"):(t.style.opacity="0",t.style.transform="translateY(0)")})}N();window.addEventListener("scroll",N);const ot=document.querySelector(".theme-red"),nt=document.querySelector(".theme-yellow"),at=document.querySelector(".theme-orange"),ct=document.querySelector(".theme-green"),lt=document.querySelector(".theme-blue"),T=document.querySelector("body"),k=document.querySelector(".choose-theme-btn"),O=document.querySelector(".theme-buttons");function h(e){T.classList="",T.classList.add(e),k.classList.remove("hidden"),O.classList.add("hidden")}ot.addEventListener("click",()=>{h("red"),ie()});nt.addEventListener("click",()=>{h("yellow"),oe()});at.addEventListener("click",()=>{h("orange"),ne()});ct.addEventListener("click",()=>{h("green"),ae()});lt.addEventListener("click",()=>{h("blue"),ce()});k.addEventListener("click",()=>{O.classList.remove("hidden"),k.classList.add("hidden")});
//# sourceMappingURL=commonHelpers.js.map

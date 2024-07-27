import{A as z,S as x,N as _,K as A,M as q,a as T,b as I}from"./assets/vendor-407bd766.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();z.create({baseURL:"https://portfolio-js.b.goit.study/api"});const r="/js2team_proj/assets/icons-6e183fea.svg";x.use([_,A,q]);const S={accordionContainerEl:document.querySelector(".about-me-accordion-container"),swiperWrapperEl:document.querySelector(".swiper-wrapper")},C=[{title:"About me",textFirst:"I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.",textSecond:"Able to work both independently and in a team.I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions.Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work.I am always looking for opportunities for self - improvement.I actively study new technologies and practices to stay abreast of the latest innovations.I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."},{title:"Role",textFirst:"Frontend development",textSecond:"HeadlessCMS, Wordpress",textThird:"Blender(enjoy)"},{title:"Education",textFirst:"2018 - 2019  / Frontend Development Diploma, GoIT IT School, New York ",textSecond:"2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York",textThird:"2020 - 2022 / Advanced Blender Animation Techniques, Udemy"}],N=["HTML / CSS","JavaScript","React","Node. js","React Native","Soft skills","Python"];function W(e){return e.map(t=>`
  <li class="ac" id="about-ac">
    <h3 class="ac-header" id="about-ac-header">
      <button type="button" class="ac-trigger" id="about-ac-trigger">
      ${t.title}
       <span class="about-circle"><svg class="about-ac-icon" width="10" height="5">
                <use href="${r}#arrowDown"></use>
              </svg>
              </span>
      </button>
    </h3>
    <div class="ac-panel" id="about-ac-panel">
      <p class="ac-text" id="about-ac-text">${t.textFirst}</p>
       <p class="ac-text" id="about-ac-text">${t.textSecond}</p>
       <p class="ac-text" id="about-ac-text">${t.textThird||""}</p>
    </div>
  </li>`).join("")}function O(){const e=W(C);S.accordionContainerEl.innerHTML=e}O();new T(".about-me-accordion-container",{openOnInit:[0]});function B(e){return e.map(t=>`
    <div class="swiper-slide">${t}</div>
        `).join("")}function H(){const e=B(N);S.swiperWrapperEl.innerHTML=e}H();const l=new x(".about-skills-swiper",{modules:[_,A,q],navigation:{nextEl:".about-swiper-button-next",grabCursor:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},breakpoints:{375:{slidesPerView:2,width:260},768:{slidesPerView:3,width:600},1440:{slidesPerView:6,width:1200}},loop:!0,setWrapperSize:!0,spaceBetween:0,speed:600,simulateTouch:!1,slideToClickedSlide:!0,slidesPerGroup:1});function f(){const e=l.slides;e.forEach(s=>s.classList.remove("is-first")),e[l.activeIndex].classList.add("is-first")}document.addEventListener("keydown",e=>{e.key==="Tab"?(e.preventDefault(),l.slideNext(600)):e.key==="Shift"&&(e.preventDefault(),l.slidePrev(600))});l.update();l.on("slideChange",f);l.on("slideChangeTransitionEnd",f);f();const Y={listEl:document.querySelector(".benefits-list")},Q=[{svg:`${r}#user`,title:"Expertise",text:"As a highly experienced developer, I have deep knowledge of programming and website development."},{svg:`${r}#message`,title:"Communication",text:" Understanding your needs and wants is my priority and I am always open to discussions and corrections."},{svg:`${r}#brush`,title:"Art",text:"Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life. "},{svg:`${r}#hourglass`,title:"Urgent execution",text:"I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work."}];function R(e){const t=e.svg,s=e.title,n=e.text;return`<li class="benefits-list-item">
        <span class="bg-icon">
          <svg class="icon-ben" width="24" height="24">
          <use href="${t}"></use>
          </svg>
          </span>
          <h3 class="benefits-item-title">${s}</h3>
          <p class="benefits-item-text">${n}</p>
      </li>`}function J(e){return e.map(R).join("")}function D(e){const t=J(e);Y.listEl.insertAdjacentHTML("beforeend",t)}D(Q);const y=VANTA.NET({mouseControls:!0,touchControls:!0,gyroControls:!0,minHeight:200,minWidth:200,scale:1,scaleMobile:1,maxDistance:25,el:"#animation-box",color:15547204,backgroundColor:1842464});document.querySelectorAll(".bg-icon");function U(){y.setOptions({color:15547204})}function K(){y.setOptions({color:13034279})}function V(){y.setOptions({color:16744200})}const F="/js2team_proj/assets/1@2х-a357cafa.webp",G="/js2team_proj/assets/1_1x-8af67d25.webp",X="/js2team_proj/assets/4@2х-1e0e78b9.webp",Z="/js2team_proj/assets/4_1x-32ae2e13.webp",ee="/js2team_proj/assets/5@2х-09b0daa2.webp",te="/js2team_proj/assets/5_1x-6c94befd.webp",se="/js2team_proj/assets/6@2х-0ae99116.webp",ie="/js2team_proj/assets/6_1x-2d387991.webp",oe="/js2team_proj/assets/7@2х-255834f3.webp",ae="/js2team_proj/assets/7_1x-0e407f1a.webp",ne="/js2team_proj/assets/8@2х-563f898c.webp",ce="/js2team_proj/assets/8_1x-cddca86a.webp",re="/js2team_proj/assets/9@2х-286a2bd3.webp",le="/js2team_proj/assets/9_1x-12803bfe.webp",de="/js2team_proj/assets/10@2х-b2cb52f1.webp",pe="/js2team_proj/assets/10_1x-d251b59b.webp",me="/js2team_proj/assets/11@2х-7955e579.webp",ue="/js2team_proj/assets/11_1x-0361553e.webp",he="/js2team_proj/assets/12@2х-b67bfe9b.webp",ge="/js2team_proj/assets/12_1x-b047004f.webp";let we=[G,F,Z,X,te,ee,ie,se,ae,oe,ce,ne,le,re,pe,de,ue,me,ge,he];function be(e){return e.map(t=>`
       <div class="marquee">
         <ul class="marquee__inner">
                        <li class="marquee__line animate line1">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${e[0]} 1x,
                                    ${e[1]} 2x"
                                     type="image/webp" width="544" height="314" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${e[0]} 1x,
                                    ${e[1]} 2x
                    " type="image/webp" width="544" height="314" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${e[0]} 1x,
                                    ${e[1]} 2x
                    " type="image/webp" width="282" />
                                    <img class="project-pic" src="
                                    ${e[0]}" alt="website" width="282"
                                        height="162" loading="lazy" />
                                </picture>
                            </div> </li>

                        <li class="marquee__line animate line1">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${e[2]} 1x,
                                    ${e[3]} 2x" 
                                    type="image/webp" width="544" height="314" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${e[2]} 1x,
                                    ${e[3]} 2x"
                                     type="image/webp" width="544" height="314" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${e[2]} 1x,
                                    ${e[3]} 2x" type="image/webp" width="282" />
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
                                    ${e[5]} 2x
                    " type="image/webp" width="544" height="314" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${e[4]} 1x,
                                    ${e[5]} 2x
                    " type="image/webp" width="544" height="314" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${e[4]} 1x,
                                    ${e[5]} 2x
                    " type="image/webp" width="282" />
                                    <img class="project-pic" src="
                                    ${e[4]}" alt="website" width="282"
                                        height="162" loading="lazy" />
                                </picture>
                            </div> </li>
                            
                    </ul>
                    <ul class="marquee__inner">
                        <li class="marquee__line animate line2">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${e[6]} 1x,
                                    ${e[7]} 2x
                    " type="image/webp" width="544" height="314" />
                        <source media="(min-width: 768px)" srcset="
                        ${e[6]} 1x,
                        ${e[7]} 2x
                    " type="image/webp" width="544" height="314" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${e[6]} 1x,
                                    ${e[7]} 2x
                    " type="image/webp" width="282" />
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
                                     ${e[9]} 2x
                    " type="image/webp" width="544" height="314" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${e[8]} 1x,
                                    ${e[9]} 2x
                    " type="image/webp" width="544" height="314" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${e[8]} 1x,
                                    ${e[9]} 2x
                    " type="image/webp" width="282" />
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
                                     ${e[11]} 2x
                    " type="image/webp" width="544" height="314" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${e[10]} 1x,
                                    ${e[11]} 2x
                    " type="image/webp" width="544" height="314" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${e[10]} 1x,
                                    ${e[11]} 2x
                    " type="image/webp" width="282" />
                                    <img class="project-pic" src="
                                    ${e[10]}" alt="website" width="282"
                                        height="162" loading="lazy" />
                                </picture>
                            </div>
                        </li>

                        <li class="marquee__line animate line2">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${e[12]} 1x,
                                    ${e[13]} 2x
                    " type="image/webp" width="544" height="314" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${e[12]} 1x,
                                     ${e[13]} 2x
                    " type="image/webp" width="544" height="314" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${e[12]} 1x,
                                    ${e[13]} 2x
                    " type="image/webp" width="282" />
                                    <img class="project-pic" src="
                                    ${e[12]}" alt="website" width="282"
                                        height="162" loading="lazy" />
                                </picture>
                            </div>
                        </li>
                    </ul>
                    <ul class="marquee__inner">
                        <li class="marquee__line animate line1">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${e[14]} 1x,
                                    ${e[15]} 2x
                    " type="image/webp" width="544" height="314" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${e[14]} 1x,
                                     ${e[15]} 2x
                    " type="image/webp" width="544" height="314" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${e[14]} 1x,
                                     ${e[15]} 2x
                    " type="image/webp" width="282" />
                                    <img class="project-pic" src="
                                    ${e[14]}" alt="website" width="282"
                                    height="162" loading="lazy" />
                                </picture>
                            </div>
                        </li>
                        <li class="marquee__line animate line1">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${e[16]} 1x,
                                    ${e[17]} 2x
                    " type="image/webp" width="544" height="314" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${e[16]} 1x,
                                    ${e[17]} 2x
                    " type="image/webp" width="544" height="314" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${e[16]} 1x,
                                    ${e[17]} 2x
                    " type="image/webp" width="282" />
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
                                     ${e[19]} 2x
                    " type="image/webp" width="544" height="314" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${e[18]} 1x,
                                     ${e[19]} 2x
                    " type="image/webp" width="544" height="314" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${e[18]} 1x,
                                    ${e[19]} 2x " type="image/webp" width="282" />
                                    <img class="project-pic" src="
                                    ${e[18]}" alt="website" width="282"
                                        height="162" loading="lazy" />
                                </picture>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>`).join("")}function xe(e){let t=be(e);document.querySelector(".background-circle3").innerHTML=t}xe(we);const fe=document.querySelector(".covers"),j=document.querySelectorAll(".marquee__line");function ye(e,t){e.forEach(s=>{s.isIntersecting?j.forEach(n=>n.classList.add("animate")):j.forEach(n=>n.classList.remove("animate"))})}let ve={threshold:0},je=new IntersectionObserver(ye,ve);je.observe(fe);const ke={listEl:document.querySelector(".faq-list")},Le=[{title:"What programming languages are most often used in your project?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{title:"What are the deadlines for the project?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"What payment methods do you accept?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"How can I contact you?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{title:"Do you provide advice or support?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"What does the process of developing a software product look like from idea to implementation?",text:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}];function _e(e){const t=e.title,s=e.text;return`
    <li class="ac" id="ac">
    <h3 class="ac-header">
    <button type="button" class="ac-trigger" id="ac-header">
    ${t}
    <span class="circle-faq">
    <svg class="icon-faq " width="12" height="8">
    <use href="${r}#arrowDown"></use>
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
    `}function Ae(e){return e.map(_e).join("")}function qe(e){const t=Ae(e);ke.listEl.insertAdjacentHTML("afterbegin",t)}qe(Le);new T(".accordion-container",{});const d={deskMenuBtn:document.querySelector(".desk-menu-btn"),deskMenu:document.querySelector(".desk-menu"),deskMenuBox:document.querySelector(".desk-menu-box"),header:document.querySelector(".header")};function P(){d.deskMenu.classList.add("visually-hidden")}d.deskMenuBtn.addEventListener("click",()=>{d.deskMenu.classList.toggle("visually-hidden")});d.deskMenu.addEventListener("click",e=>{e.target.tagName==="A"&&P()});document.addEventListener("click",e=>{d.deskMenuBox.contains(e.target)||P()});let g=0;window.addEventListener("scroll",()=>{const e=window.scrollY||document.documentElement.scrollTop;e>g?d.header.classList.add("hidden"):e<g&&d.header.classList.remove("hidden"),g=e});const Te="/js2team_proj/assets/image_1_mob@1x-89b2e206.webp",Se="/js2team_proj/assets/image_1_mob@2x-999825f4.webp",Pe="/js2team_proj/assets/image_1_tab_desk@1x-90b1035f.webp",Ee="/js2team_proj/assets/image_1_tab_desk@2x-25537a1a.webp",Me="/js2team_proj/assets/image_2_mob@1x-29b35221.webp",$e="/js2team_proj/assets/image_2_mob@2x-4a031e92.webp",ze="/js2team_proj/assets/image_2_tab_desk@1x-f2489662.webp",Ie="/js2team_proj/assets/image_2_tab_desk@2x-0e0ab3ec.webp",Ce="data:image/webp;base64,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",Ne="/js2team_proj/assets/image_3_mob@2x-f08587ef.webp",We="/js2team_proj/assets/image_3_tab_desk@1x-c6b16f91.webp",Oe="/js2team_proj/assets/image_3_tab_desk@2x-c6650a6e.webp",a={project1_mob1x:Te,project1_mob2x:Se,project1_tab1x:Pe,project1_tab2x:Ee,project2_mob1x:Me,project2_mob2x:$e,project2_tab1x:ze,project2_tab2x:Ie,project3_mob1x:Ce,project3_mob2x:Ne,project3_tab1x:We,project3_tab2x:Oe},Be=[{skill1:"&num;react",skill2:"&num;js",skill3:"&num;node js",skill4:"&num;git",title:"Programming Across Borders: Ideas, Technologies, Innovations",href:"https://github.com/koleso8/js2team_proj",link:"See project",imgMob1:a.project1_mob1x,imgMob2:a.project1_mob2x,imgTab1:a.project1_tab1x,imgTab2:a.project1_tab2x},{skill1:"&num;react",skill2:"&num;js",skill3:"&num;node js",skill4:"&num;git",title:"Programming Across Borders: Ideas, Technologies, Innovations",href:"https://github.com/koleso8/js2team_proj",link:"See project",imgMob1:a.project2_mob1x,imgMob2:a.project2_mob2x,imgTab1:a.project2_tab1x,imgTab2:a.project2_tab2x},{skill1:"&num;react",skill2:"&num;js",skill3:"&num;node js",skill4:"&num;git",title:"Programming Across Borders: Ideas, Technologies, Innovations",href:"https://github.com/koleso8/js2team_proj",link:"See project",imgMob1:a.project3_mob1x,imgMob2:a.project3_mob2x,imgTab1:a.project3_tab1x,imgTab2:a.project3_tab2x}],He=document.querySelector(".projects-cards"),w=document.querySelector(".swiper-button-prev"),b=document.querySelector(".swiper-button-next"),k=document.querySelector(".icon-prev"),L=document.querySelector(".icon-next");function Ye(e){return e.map(t=>`<li class="projects-card swiper-slide">
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
        </li>`).join("")}function Qe(e){const t=Ye(e);He.innerHTML=t}Qe(Be);document.addEventListener("DOMContentLoaded",()=>{const e=new x(".swiper-container",{slidesPerView:1,spaceBetween:20,grabCursor:!0});function t(){e.isBeginning?(w.classList.add("disabled"),k.classList.add("disabled")):(w.classList.remove("disabled"),k.classList.remove("disabled")),e.isEnd?(b.classList.add("disabled"),L.classList.add("disabled")):(b.classList.remove("disabled"),L.classList.remove("disabled"))}b.addEventListener("click",()=>{e.slideNext(1e3)}),w.addEventListener("click",()=>{e.slidePrev(1e3)}),document.addEventListener("keydown",s=>{s.key==="ArrowRight"?e.slideNext(1e3):s.key==="ArrowLeft"?e.slidePrev(1e3):s.key==="Tab"&&(s.preventDefault(),s.shiftKey?e.slidePrev(1e3):e.slideNext(1e3))}),e.on("slideChange",t),t()});I.create(`
     <div class="container">
     <div class="modal">
    <h3 class="title-modal">Thank you for your interest in cooperation!</h3>
    <p class="text-modal">
      The manager will contact you shortly to discuss further details and
      opportunities for cooperation. Please stay in touch.
    </p>
    <a href="" class="close"
      ><svg class="icon" width="22" height="22">
        <use href="${r}#close"></use>
      </svg>
    </a>
  </div>
</div>
`,{onShow:e=>{e.element().querySelector("a").onclick=e.close,document.addEventListener("keydown",t=>{t.code==="Escape"&&e.close()}),document.body.style.position="fixed"},onClose:e=>{console.log("onClose",e),document.body.style.position=""}});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const s=document.querySelector(this.getAttribute("href"));if(s){let v=function(c){h===null&&(h=c);const m=c-h,u=M(m,i,o,p);window.scrollTo(0,u),m<p&&requestAnimationFrame(v)},M=function(c,m,u,$){return c/=$/2,c<1?u/2*c*c+m:(c--,-u/2*(c*(c-2)-1)+m)};const n=s.getBoundingClientRect().top+window.pageYOffset,i=window.pageYOffset,o=n-i,p=500;let h=null;requestAnimationFrame(v)}})});let Re=document.querySelectorAll(".section-animation");function E(){let e=window.innerHeight;Re.forEach(t=>{t.getBoundingClientRect().top<e-100?(t.style.opacity="1",t.style.transform="translateY(0)"):(t.style.opacity="0",t.style.transform="translateY(0)")})}E();window.addEventListener("scroll",E);const Je={themeList:document.querySelector(".theme-list")};Je.themeList.addEventListener("click",e=>{switch(console.log(e.target.dataset.action),e.target.dataset.action){case"red":return U();case"yellow":return K();case"orange":return V()}});
//# sourceMappingURL=commonHelpers.js.map

import{A as r,a as c,b as l}from"./assets/vendor-c4f2e476.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();r.create({baseURL:"https://portfolio-js.b.goit.study/api"});const d={listEl:document.querySelector(".benefits-list")},u=[{svg:"../svg/icons.svg#user",title:"Expertise",text:"As a highly experienced developer, I have deep knowledge of programming and website development."},{svg:"../svg/icons.svg#message",title:"Communication",text:" Understanding your needs and wants is my priority and I am always open to discussions and corrections."},{svg:"../svg/icons.svg#brush",title:"Art",text:"Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life. "},{svg:"../svg/icons.svg#hourglass",title:"Urgent execution",text:"I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work."}];function p(e){const s=e.svg,i=e.title,n=e.text;return`<li class="benefits-list-item">
        <span class="bg-icon">
          <svg class="icon-ben" width="24" height="24">
          <use href="${s}"></use>
          </svg>
          </span>
          <h3 class="benefits-item-title">${i}</h3>
          <p class="benefits-item-text">${n}</p>
      </li>`}function f(e){return e.map(p).join("")}function h(e){const s=f(e);d.listEl.insertAdjacentHTML("beforeend",s)}h(u);const m={listEl:document.querySelector(".faq-list")},g=[{title:"What programming languages are most often used in your project?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{title:"What are the deadlines for the project?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"What payment methods do you accept?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"How can I contact you?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{title:"Do you provide advice or support?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"What does the process of developing a software product look like from idea to implementation?",text:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}];function y(e){const s=e.title,i=e.text;return`
    <li class="ac" id="ac">
    <h3 class="ac-header">
    <button type="button" class="ac-trigger" id="ac-header">
    ${s}
    <span class="circle-faq">
    <svg class="icon-faq " width="12" height="8">
    <use href="../svg/icons.svg#arrowDown"></use>
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
    `}function v(e){return e.map(y).join("")}function b(e){const s=v(e);m.listEl.insertAdjacentHTML("afterbegin",s)}b(g);new c(".accordion-container",{});l.create(`
     <div class="container">
     <div class="modal">
    <h3 class="title-modal">Thank you for your interest in cooperation!</h3>
    <p class="text-modal">
      The manager will contact you shortly to discuss further details and
      opportunities for cooperation. Please stay in touch.
    </p>
    <a href="" class="close"
      ><svg class="icon" width="22" height="22">
        <use href="svg/icons.svg#close"></use>
      </svg>
    </a>
  </div>
</div>

`,{onShow:e=>{e.element().querySelector("a").onclick=e.close,document.addEventListener("keydown",s=>{s.code==="Escape"&&e.close()}),document.body.style.position="fixed"},onClose:e=>{console.log("onClose",e),document.body.style.position=""}});
//# sourceMappingURL=commonHelpers.js.map

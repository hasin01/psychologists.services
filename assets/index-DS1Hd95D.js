(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const r={backgroundModal:document.querySelector(".modal"),formLoginModal:document.querySelector(".form-login-modal"),formLoginCloseBtn:document.querySelector(".form-login-close-btn"),formLoginOpen:document.querySelector(".auth-item-login"),formRegisterOpen:document.querySelector(".auth-item-register"),formRegister:document.querySelector(".form-register-modal"),formRegisterCloseBtn:document.querySelector(".form-register-close-btn")},c=t=>{t.classList.remove("is-hidden"),r.backgroundModal.classList.remove("is-hidden")},d=t=>{t.classList.add("is-hidden"),r.backgroundModal.classList.add("is-hidden")};r.formLoginOpen.addEventListener("click",()=>{c(r.formLoginModal)});r.formLoginCloseBtn.addEventListener("click",()=>{d(r.formLoginModal)});r.formRegisterOpen.addEventListener("click",()=>{c(r.formRegister)});r.formRegisterCloseBtn.addEventListener("click",()=>{d(r.formRegister)});

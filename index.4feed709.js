const c=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};c();var d=[{day:"mon",amount:17.45},{day:"tue",amount:34.91},{day:"wed",amount:52.36},{day:"thu",amount:31.07},{day:"fri",amount:23.39},{day:"sat",amount:43.28},{day:"sun",amount:25.48}];const s=document.querySelector(".card__chart--bar"),l=[];d.forEach(r=>{l.push(r.day),m(r.day,r.amount)});function m(r,n){const a=document.createElement("div");a.classList.add("bar__column"),a.innerHTML=`
    <p class="bar--expense slide-top">$${n}</p>
    <div class='bar'></div>
    <p class="bar--day">${r}</p>`,s.appendChild(a)}
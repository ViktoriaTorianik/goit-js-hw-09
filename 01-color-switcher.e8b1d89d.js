const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");e.setAttribute("disabled",""),t.addEventListener("click",(function(){timerId=setInterval((()=>{t.setAttribute("disabled",""),e.removeAttribute("disabled"),r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(){clearInterval(timerId),t.removeAttribute("disabled"),e.setAttribute("disabled","")}));
//# sourceMappingURL=01-color-switcher.e8b1d89d.js.map

!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");e.setAttribute("disabled",""),t.addEventListener("click",(function(){timerId=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.setAttribute("disabled","true"),e.removeAttribute("disable")})),e.addEventListener("click",(function(){clearInterval(timerId),t.removeAttribute("disable"),e.setAttribute("disabled","true")})),console.log(t)}();
//# sourceMappingURL=01-color-switcher.1c72fcef.js.map

const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.body;let r=null;function n(){d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(function(){r=setInterval(n,1e3),t.setAttribute("disabled",""),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(r),e.setAttribute("disabled",""),t.removeAttribute("disabled")})),e.setAttribute("disabled","");
//# sourceMappingURL=01-color-switcher.58e01fba.js.map
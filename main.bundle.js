!function(){"use strict";var e=document.querySelector(".input-form"),t=document.querySelector(".output"),n=document.querySelector(".prompt"),l=e.elements[0],a="".concat("user","@").concat("browser"," $");n.textContent=a,e.addEventListener("submit",(function(e){var n,a,r;switch(l.value){case"":r="\n";break;case"clear":t.innerHTML="",r="";break;case"help":r="Commands:\n            * help - Show this manual\n            * clear - Clear the screen\n            That is all for now :)";break;default:r='Command "'.concat(l.value,'" not found!')}r=null===(n=r.replaceAll("<","&lt;").replaceAll(">","&gt;").trim())||void 0===n?void 0:n.replaceAll("\n","<br>"),t.insertAdjacentHTML("beforeend",'<p class="console">'.concat(null!==(a=r)&&void 0!==a?a:"","</p>")),l.value="",e.preventDefault()}))}();
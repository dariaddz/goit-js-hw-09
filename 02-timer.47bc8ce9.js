parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d2uN":[function(require,module,exports) {
const e=document.querySelector(".timer"),t=document.querySelectorAll(".field"),o=document.querySelectorAll(".value"),n=document.querySelectorAll(".label"),r=document.querySelector(".value[data-days]"),s=document.querySelector(".value[data-hours]"),l=document.querySelector(".value[data-minutes]"),a=document.querySelector(".value[data-seconds]"),c=document.querySelector("button[data-start]");e.style.display="flex";for(let y of t)y.style.marginRight="15px",y.style.textAlign="center",y.style.fontSize="50px",y.style.fontWeight="500";for(let y of n)y.style.display="block",y.style.fontSize="36px",y.style.fontWeight="400";class u{constructor({onTick:e}){this.onTick=e}start(){const e=new Date("Novenber 24, 2021 14:25:00");setInterval(()=>{const t=Date.now(),o=e-t,n=this.convertMs(o);this.onTick(n)},1e3)}pad(e){return String(e).padStart(2,"0")}convertMs(e){return{days:this.pad(Math.floor(e/864e5)),hours:this.pad(Math.floor(e%864e5/36e5)),minutes:this.pad(Math.floor(e%864e5%36e5/6e4)),seconds:this.pad(Math.floor(e%864e5%36e5%6e4/1e3))}}}const d=new u({onTick:i});function i({days:e,hours:t,minutes:o,seconds:n}){r.textContent=`${e}`,s.textContent=`${t}`,l.textContent=`${o}`,a.textContent=`${n}`}c.addEventListener("click",()=>{d.start()});
},{}]},{},["d2uN"], null)
//# sourceMappingURL=/goit-js-hw-09/02-timer.47bc8ce9.js.map
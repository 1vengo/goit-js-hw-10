import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,i as p}from"./assets/vendor-BbbuE1sJ.js";const e=document.querySelector("button[data-start]"),o=document.getElementById("datetime-picker"),r={days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")};let c=null,u=null;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const n=new Date;c=t[0],c<=n?(e.disabled=!0,p.error({title:"Error",message:"Please choose a date in the future",position:"topRight"})):e.disabled=!1}};h(o,b);function g(t){const l=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),f=Math.floor(t%36e5/6e4),y=Math.floor(t%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:y}}function a(t){return String(t).padStart(2,"0")}function i({days:t,hours:n,minutes:s,seconds:d}){r.days.textContent=a(t),r.hours.textContent=a(n),r.minutes.textContent=a(s),r.seconds.textContent=a(d)}function w(){u=setInterval(()=>{const n=c-new Date;if(n<=0)clearInterval(u),i({days:0,hours:0,minutes:0,seconds:0}),e.disabled=!0,o.disabled=!1,o.style.color="",e.style.color="",e.style.background="";else{const s=g(n);i(s)}},1e3)}e.addEventListener("click",()=>{e.disabled=!0,o.disabled=!0,o.style.color="#989898",e.style.background="#cfcfcf",e.style.color="#989898",w()});
//# sourceMappingURL=1-timer.js.map

import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const n=document.querySelector(".form");n.addEventListener("submit",function(e){e.preventDefault();const i=n.elements.delay,r=n.elements.state;let t=Number(i.value);const o=r.value;t<1500&&(t=1500),c(t,o).then(s=>{iziToast.success({title:"Success",message:`✅ Fulfilled promise in ${s}ms`})}).catch(s=>{iziToast.error({title:"Error",message:`❌ Rejected promise in ${s}ms`})}),i.value="",r.forEach(s=>s.checked=!1)});function c(e,i){return new Promise((r,t)=>{setTimeout(()=>{i==="fulfilled"?r(e):t(e)},e)})}
//# sourceMappingURL=2-cnackbar.js.map
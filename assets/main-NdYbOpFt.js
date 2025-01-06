import{i as A,g as _,a as M,c as V,u as T,s as N,b as U,o as B,d as q,e as j,f as W,h as H,q as L,j as w,k as C,l as D,m as b,n as E}from"./vendor-CwnuWi2a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const p of i)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function r(i){const p={};return i.integrity&&(p.integrity=i.integrity),i.referrerPolicy&&(p.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?p.credentials="include":i.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function n(i){if(i.ep)return;i.ep=!0;const p=r(i);fetch(i.href,p)}})();const e={backgroundModal:document.querySelector(".modal"),formLoginModal:document.querySelector(".form-login-modal"),formLoginCloseBtn:document.querySelector(".form-login-close-btn"),formLoginOpen:document.querySelector(".auth-item-login"),formRegisterOpen:document.querySelector(".auth-item-register"),formRegisterModal:document.querySelector(".form-register-modal"),formRegisterCloseBtn:document.querySelector(".form-register-close-btn"),formRegister:document.querySelector(".form-registration"),formLogin:document.querySelector(".form-login"),registerNameInput:document.querySelector(".form-name-input-register-js"),registerEmailInput:document.querySelector(".form-email-input-register-js"),registerPasswordInput:document.querySelector(".form-password-input-register-js"),loginEmailInput:document.querySelector(".form-email-input-login-js"),loginPasswordInput:document.querySelector(".form-password-input-login-js"),authBtn:document.querySelector(".auth-wrapper"),userInfo:document.querySelector(".user-info"),userName:document.querySelector(".user-name"),signOutBtn:document.querySelector(".user-logout"),navList:document.querySelector(".nav-list"),navHome:document.querySelector(".nav-home"),navPsychologists:document.querySelector(".nav-psychologist"),navFavorites:document.querySelector(".nav-favorites"),pageFavorites:document.querySelector(".nav-list-item-favorites"),sortPsichologs:document.querySelector(".sort-psichologs"),customSelectTrigger:document.querySelector(".custom-select-trigger"),customOption:document.querySelectorAll(".custom-option"),customSelect:document.querySelector(".custom-select"),paginationBtn:document.querySelector(".pagination-prev"),customSelect:document.querySelector(".custom-select"),customSelectTrigger:document.querySelector(".custom-select-trigger"),customOption:document.querySelectorAll(".custom-option"),loaderWraper:document.querySelector(".loader-wrapper"),card:document.querySelector(".psicholog-list-item"),cardFavoriteBtn:document.querySelectorAll(".psicholog-favorite-btn")},K={apiKey:"AIzaSyBtgyesIcDyvFIh-YBM6E33MhgPDKypzII",authDomain:"psychologistsservices.firebaseapp.com",databaseURL:"https://psychologistsservices-default-rtdb.firebaseio.com",projectId:"psychologistsservices",storageBucket:"psychologistsservices.firebasestorage.app",messagingSenderId:"718750248328",appId:"1:718750248328:web:573026e49e9fc425809e3d",measurementId:"G-5J9TZ4E4D9"},Z=A(K),f=_(Z),G=async(t,s,r)=>{try{const i=(await V(f,t,s)).user;return await T(i,{displayName:r}),console.log("User registered and profile updated:",i),i}catch(n){const i=n.code,p=n.message;throw console.error(`Error ${i}: ${p}`),n}},J=async(t,s)=>{try{const r=await N(f,t,s);return console.log("Пользователь вошел в систему:",r.user),r.user}catch(r){const n=r.code,i=r.message;throw console.error(`Ошибка ${n}: ${i}`),r}},k=M(),Y=async t=>{try{const s=f.currentUser;if(s){const r=s.uid,n=q(k,"psychologists",t),i=await j(n);if(i.exists()){const m={...i.data(),id:t},d=q(k,"users",r,"profiles",t);await W(d,m),console.log("Объект успешно добавлен в профиль пользователя.")}else console.log("Документ не найден.")}else console.log("Пользователь не авторизован.")}catch(s){console.error("Ошибка обновления профиля:",s)}},F=async t=>{try{const s=f.currentUser;if(s){const r=s.uid,n=q(k,"users",r,"profiles",t);await H(n),console.log("Документ успешно удалён из профиля пользователя.")}else console.log("Пользователь не авторизован.")}catch(s){console.error("Ошибка удаления профиля:",s)}},Q=()=>{U(f).then(()=>{console.log("signOut")}).catch(t=>{console.error("Sign out error:",t)})},$=t=>{B(f,s=>{s?(s.displayName,t(s)):t(null)})};e.signOutBtn&&e.signOutBtn.addEventListener("click",()=>{Q()});const O=t=>{if(t)if(t.displayName)e.userInfo.style.display="flex",e.userName.textContent=t.displayName,e.authBtn.classList.add("is-hidden"),e.pageFavorites.classList.remove("is-hidden");else return;else e.userInfo.style.display="none",e.userName.textContent="",e.authBtn.classList.remove("is-hidden-modal"),e.authBtn.classList.remove("is-hidden"),e.pageFavorites.classList.add("is-hidden")};$(O);const R=t=>{t.keyCode===27&&X()},z=t=>{t.classList.remove("is-hidden-modal"),e.backgroundModal.classList.remove("is-hidden-modal"),document.addEventListener("keydown",R)},y=t=>{t.classList.add("is-hidden-modal"),e.backgroundModal.classList.add("is-hidden-modal"),document.removeEventListener("keydown",R),$(O)},X=()=>{y(e.formLoginModal),y(e.formRegisterModal)};e.formLoginOpen&&e.formLoginOpen.addEventListener("click",()=>{z(e.formLoginModal)});e.formLoginCloseBtn&&e.formLoginCloseBtn.addEventListener("click",()=>{y(e.formLoginModal)});e.formRegisterOpen&&e.formRegisterOpen.addEventListener("click",()=>{z(e.formRegisterModal)});e.formRegisterCloseBtn&&e.formRegisterCloseBtn.addEventListener("click",()=>{y(e.formRegisterModal)});e.backgroundModal&&e.backgroundModal.addEventListener("click",t=>{t.target===e.backgroundModal&&(y(e.formLoginModal),y(e.formRegisterModal))});e.formRegister&&e.formRegister.addEventListener("submit",async t=>{t.preventDefault();const s=e.registerEmailInput.value,r=e.registerPasswordInput.value,n=e.registerNameInput.value;try{await G(s,r,n),y(e.formRegisterModal)}catch(i){alert("Registration failed"),console.error("Registration failed:",i)}});e.formLogin&&e.formLogin.addEventListener("submit",async t=>{t.preventDefault();const s=e.loginEmailInput.value,r=e.loginPasswordInput.value;try{await J(s,r),y(e.formLoginModal)}catch(n){alert("Login failed"),console.error("Login failed:",n)}});const S="data:image/svg+xml,%3csvg%20width='26.000000'%20height='26.000000'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdesc%3e%20Created%20with%20Pixso.%20%3c/desc%3e%3cdefs%3e%3cclipPath%20id='clip41_352'%3e%3crect%20id='heart'%20rx='0.000000'%20width='25.000000'%20height='25.000000'%20transform='translate(0.500000%200.500000)'%20fill='white'%20fill-opacity='0'/%3e%3c/clipPath%3e%3c/defs%3e%3crect%20id='heart'%20rx='0.000000'%20width='25.000000'%20height='25.000000'%20transform='translate(0.500000%200.500000)'%20fill='%23FFFFFF'%20fill-opacity='0'/%3e%3cg%20clip-path='url(%23clip41_352)'%3e%3cpath%20id='Vector'%20d='M20.64%203.7C19.92%203.4%2019.14%203.24%2018.36%203.24C17.57%203.24%2016.8%203.4%2016.08%203.7C15.35%204%2014.7%204.44%2014.14%204.99L13%206.14L11.85%204.99C10.73%203.87%209.21%203.24%207.63%203.24C6.05%203.24%204.54%203.87%203.42%204.99C2.3%206.11%201.67%207.62%201.67%209.2C1.67%2010.78%202.3%2012.3%203.42%2013.42L4.57%2014.57L13%2022.99L21.42%2014.57L22.57%2013.42C23.13%2012.86%2023.56%2012.21%2023.86%2011.48C24.16%2010.76%2024.32%209.99%2024.32%209.2C24.32%208.42%2024.16%207.65%2023.86%206.92C23.56%206.2%2023.13%205.54%2022.57%204.99C22.02%204.44%2021.36%204%2020.64%203.7Z'%20stroke='%23191A15'%20stroke-opacity='1.000000'%20stroke-width='2.000000'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e",P="data:image/svg+xml,%3csvg%20width='26.000000'%20height='26.000000'%20viewBox='0%200%2024.645%2021.7512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdesc%3e%20Created%20with%20Pixso.%20%3c/desc%3e%3cdefs/%3e%3cpath%20id='Vector'%20d='M21.89%202.74C21.34%202.19%2020.68%201.75%2019.96%201.45C19.24%201.15%2018.46%201%2017.68%201C16.9%201%2016.12%201.15%2015.4%201.45C14.68%201.75%2014.02%202.19%2013.47%202.74L12.32%203.89L11.17%202.74C10.05%201.62%208.54%201%206.95%201C5.37%201%203.86%201.62%202.74%202.74C1.62%203.86%201%205.37%201%206.96C1%208.54%201.62%2010.05%202.74%2011.17L3.89%2012.32L12.32%2020.75L20.75%2012.32L21.89%2011.17C22.45%2010.62%2022.89%209.96%2023.19%209.24C23.49%208.51%2023.64%207.74%2023.64%206.96C23.64%206.17%2023.49%205.4%2023.19%204.67C22.89%203.95%2022.45%203.29%2021.89%202.74Z'%20fill='%2354BE96'%20fill-opacity='1.000000'%20fill-rule='nonzero'/%3e%3cpath%20id='Vector'%20d='M19.96%201.45C19.24%201.15%2018.46%201%2017.68%201C16.9%201%2016.12%201.15%2015.4%201.45C14.68%201.75%2014.02%202.19%2013.47%202.74L12.32%203.89L11.17%202.74C10.05%201.62%208.54%201%206.95%201C5.37%201%203.86%201.62%202.74%202.74C1.62%203.86%201%205.37%201%206.96C1%208.54%201.62%2010.05%202.74%2011.17L3.89%2012.32L12.32%2020.75L20.75%2012.32L21.89%2011.17C22.45%2010.62%2022.89%209.96%2023.19%209.24C23.49%208.51%2023.64%207.74%2023.64%206.96C23.64%206.17%2023.49%205.4%2023.19%204.67C22.89%203.95%2022.45%203.29%2021.89%202.74C21.34%202.19%2020.68%201.75%2019.96%201.45Z'%20stroke='%2354BE96'%20stroke-opacity='1.000000'%20stroke-width='2.000000'%20stroke-linejoin='round'/%3e%3c/svg%3e";if(window.location.pathname==="/psychologists.services/psychologists.html"){const t=M(),s={field:"name",order:"asc",limit:3,lastVisibleDoc:null,isPaginationFinished:!1};let r=[],n=[];const i=()=>{e.paginationBtn.classList.remove("is-hidden"),e.loaderWraper.classList.add("is-hidden")},p=()=>{e.paginationBtn.classList.add("is-hidden"),e.loaderWraper.classList.remove("is-hidden")},m=async()=>{try{if(p(),s.isPaginationFinished)return;const o=s.lastVisibleDoc?L(w(t,"psychologists"),C(s.field,s.order),D(s.lastVisibleDoc),b(s.limit)):L(w(t,"psychologists"),C(s.field,s.order),b(s.limit)),l=await E(o);if(l.size===0)s.isPaginationFinished=!0;else{s.lastVisibleDoc=l.docs[l.docs.length-1];const a=l.docs.map(h=>({id:h.id,...h.data()}));r=r.concat(a),await d(f.currentUser),u(r)}}catch(o){console.error("Error fetching data:",o)}finally{i()}},d=async o=>{try{if(!o){console.error("User is not authenticated.");return}const l=L(w(t,"users",o.uid,"profiles"));n=(await E(l)).docs.map(h=>h.id),console.log("Favorites fetched:",n)}catch(l){console.error("Error fetching data:",l)}},u=o=>{const l=document.querySelector(".psicholog-list");l.innerHTML="",o.map(a=>{const h=n.includes(a.id),g=document.createElement("li");g.dataset.id=a.id,g.classList.add("psicholog-list-item"),g.innerHTML=`
      <div>
        <img src="${a.avatar_url}" alt="psychologist" class="psicholog-img" width="96px" height="96px">
      </div>
      <div class="psicholog-info">
        <p class="psicholog-title">Psychologist</p>
        <h3 class="psicholog-name">${a.name}</h3>
        <ul class="psicholog-specialization">
          <li class="psicholog-specialization-item">Experience: <span>${a.experience}</span></li>
          <li class="psicholog-specialization-item">License: <span>${a.license}</span></li>
          <li class="psicholog-specialization-item">Specialization: <span>${a.specialization}</span></li>
          <li class="psicholog-specialization-item">Initial consultation: <span>${a.initial_consultation}</span></li>
        </ul>
        <p class="psicholog-description">${a.about}</p>
        <button class="psicholog-btn">Read more</button>
        <div class="psicholog-rating-price-wrapper">
          <div class="psicholog-rating">Rating: <span>${a.rating}</span></div>
          <div class="psicholog-rating-line"></div>
          <div class="psicholog-price">Price / 1 hour: <span>${a.price_per_hour}</span></div>
          <button><img class="psicholog-favorite-btn" src="${h?P:S}" alt="favorite" ></button>
        </div>
      </div>
    `,g.querySelector(".psicholog-btn").addEventListener("click",()=>{}),g.querySelector(".psicholog-favorite-btn").addEventListener("click",v=>{v.target.src.includes(S)?(v.target.src=P,Y(a.id)):(v.target.src=S,F(a.id))}),l.appendChild(g)})},c=o=>{const l={"a-z":{field:"name",order:"asc"},"z-a":{field:"name",order:"desc"},"less-than-10":{field:"price_per_hour",order:"asc"},"greater-than-10":{field:"price_per_hour",order:"desc"},popular:{field:"rating",order:"desc"},"not-popular":{field:"rating",order:"asc"}};if(l[o]){const{field:a,order:h}=l[o];s.field=a,s.order=h,s.lastVisibleDoc=null,s.isPaginationFinished=!1,r=[],m()}};e.customSelectTrigger&&(e.customSelectTrigger.addEventListener("click",function(){e.customSelect.classList.toggle("open")}),e.customOption.forEach(o=>{o.addEventListener("click",function(){e.customSelectTrigger.textContent=this.textContent,e.customOption.forEach(l=>l.classList.remove("custom-select-active")),this.classList.add("custom-select-active"),c(this.dataset.value),e.customSelect.classList.remove("open")})}),document.addEventListener("click",o=>{e.customSelect.contains(o.target)||e.customSelect.classList.remove("open")})),document.addEventListener("DOMContentLoaded",()=>{e.paginationBtn&&e.paginationBtn.addEventListener("click",()=>{if(s.isPaginationFinished){e.paginationBtn.classList.add("is-hidden");return}m()})}),B(f,o=>{o?d(o).then(()=>{m()}):m()})}const I=M();if(window.location.pathname==="/psychologists.services/favorites.html"){const t={field:"name",order:"asc",limit:3,lastVisibleDoc:null,isPaginationFinished:!1};let s=[];const r=()=>{e.loaderWraper.classList.add("is-hidden")},n=()=>{e.loaderWraper.classList.remove("is-hidden")},i=async d=>{try{if(n(),t.isPaginationFinished)return;if(!d){console.error("User is not authenticated.");return}const u=t.lastVisibleDoc?L(w(I,"users",d.uid,"profiles"),C(t.field,t.order),D(t.lastVisibleDoc),b(t.limit)):L(w(I,"users",d.uid,"profiles"),C(t.field,t.order),b(t.limit)),c=await E(u);if(c.size===0)t.isPaginationFinished=!0,e.paginationBtn.classList.add("is-hidden");else{t.lastVisibleDoc=c.docs[c.docs.length-1];const o=c.docs.map(l=>({id:l.id,...l.data()}));s=s.concat(o),p(s),s.length===0?e.paginationBtn.classList.add("is-hidden"):e.paginationBtn.classList.remove("is-hidden")}}catch(u){console.error("Error fetching data:",u)}finally{r()}},p=d=>{const u=document.querySelector(".psicholog-list");u.innerHTML="",d.forEach(c=>{const o=document.createElement("li");o.dataset.id=c.id,o.classList.add("psicholog-list-item"),o.innerHTML=`
            <div>
                <img src="${c.avatar_url}" alt="psychologist" class="psicholog-img" width="96px" height="96px">
            </div>
            <div class="psicholog-info">
                <p class="psicholog-title">Psychologist</p>
                <h3 class="psicholog-name">${c.name}</h3>
                <ul class="psicholog-specialization">
                    <li class="psicholog-specialization-item">Experience: <span>${c.experience}</span></li>
                    <li class="psicholog-specialization-item">License: <span>${c.license}</span></li>
                    <li class="psicholog-specialization-item">Specialization: <span>${c.specialization}</span></li>
                    <li class="psicholog-specialization-item">Initial consultation: <span>${c.initial_consultation}</span></li>
                </ul>
                <p class="psicholog-description">${c.about}</p>
                <button class="psicholog-btn">Read more</button>
                <div class="psicholog-rating-price-wrapper">
                    <div class="psicholog-rating">Rating: <span>${c.rating}</span></div>
                    <div class="psicholog-rating-line"></div>
                    <div class="psicholog-price">Price / 1 hour: <span>${c.price_per_hour}</span></div>
                    <button><img class="psicholog-favorite-btn" src="${P}" alt="favorite"></button>
                </div>
            </div>
        `,o.querySelector(".psicholog-btn").addEventListener("click",l=>{const a=o.querySelector(".psicholog-info"),h="reviews-list";let g=a.querySelector(`#${h}`);g?g.remove():(g=document.createElement("ul"),g.id=h,c.reviews&&c.reviews.length>0&&c.reviews.forEach((v,x)=>{x<2&&(g.innerHTML+=`
                          <li class="profile-reviewer-item">
                              <div class="profile-reviewer-info-wrapper">
                                  <div class="profile-reviewer-img">${v.reviewer[0]}</div>
                                  <div class="profile-reviewer-info">
                                      <h4 class="reviews-reviewer">${v.reviewer}</h4>
                                      <p class="reviews-rating">${v.rating}</p>
                                  </div>
                              </div>
                              <p class="reviews-comment">${v.comment}</p>
                          </li>
                          `)}),a.appendChild(g))}),o.querySelector(".psicholog-favorite-btn").addEventListener("click",l=>{l.target.src=S;const a=l.target.closest("li");a&&a.remove(),F(c.id)}),u.appendChild(o)})},m=d=>{const u={"a-z":{field:"name",order:"asc"},"z-a":{field:"name",order:"desc"},"less-than-10":{field:"price_per_hour",order:"asc"},"greater-than-10":{field:"price_per_hour",order:"desc"},popular:{field:"rating",order:"desc"},"not-popular":{field:"rating",order:"asc"}};if(u[d]){const{field:c,order:o}=u[d];t.field=c,t.order=o,t.lastVisibleDoc=null,t.isPaginationFinished=!1,s=[],i(f.currentUser)}};e.customSelectTrigger&&(e.customSelectTrigger.addEventListener("click",()=>{e.customSelect.classList.toggle("open")}),e.customOption.forEach(d=>{d.addEventListener("click",function(){e.customSelectTrigger.textContent=this.textContent,e.customOption.forEach(u=>u.classList.remove("custom-select-active")),this.classList.add("custom-select-active"),m(this.dataset.value),e.customSelect.classList.remove("open")})}),document.addEventListener("click",d=>{e.customSelect.contains(d.target)||e.customSelect.classList.remove("open")})),document.addEventListener("DOMContentLoaded",()=>{e.paginationBtn&&e.paginationBtn.addEventListener("click",()=>{if(t.isPaginationFinished){e.paginationBtn.classList.add("is-hidden");return}i(f.currentUser)}),B(f,d=>{d&&i(d)})})}switch(window.location.pathname){case"/psychologists.services/index.html":e.navHome.classList.add("nav-list-item-active");break;case"/psychologists.services/psychologists.html":e.navPsychologists.classList.add("nav-list-item-active");break;case"/psychologists.services/favorites.html":e.navFavorites.classList.add("nav-list-item-active");break}
//# sourceMappingURL=main-NdYbOpFt.js.map

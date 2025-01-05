import {
  collection,
  getDocs,
  getFirestore,
  query,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import refs from "./refs";
const db = getFirestore();

const paginationState = {
  field: "name",            
  order: "asc",              
  limit: 3,                  
  lastVisibleDoc: null,       
  isPaginationFinished: false 
};

let allDataArray = []; 

const hideLoadingIndicator = () => {
  refs.paginationBtn.classList.remove("is-hidden"); 
  refs.loaderWraper.classList.add("is-hidden"); 
};

const loading = () => {
  refs.paginationBtn.classList.add("is-hidden"); 
  refs.loaderWraper.classList.remove("is-hidden"); 
};

const getData = async () => {
  try {
    console.log(paginationState.field);
    console.log(paginationState.order);

    loading();

    if (paginationState.isPaginationFinished) return;

    const q = paginationState.lastVisibleDoc
      ? query(
          collection(db, "psychologists"),
          orderBy(paginationState.field, paginationState.order),
          startAfter(paginationState.lastVisibleDoc),
          limit(paginationState.limit)
        )
      : query(
          collection(db, "psychologists"),
          orderBy(paginationState.field, paginationState.order),
          limit(paginationState.limit)
        );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.size === 0) {
      paginationState.isPaginationFinished = true;
    } else {
      paginationState.lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
      const dataArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      allDataArray = allDataArray.concat(dataArray);
      handleCardRender(allDataArray);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    hideLoadingIndicator();
  }
};


const handleCardRender = (data) => {
  const card = document.querySelector(".psicholog-list");
  card.innerHTML = "";

  data.forEach((el) => {
    const listItem = document.createElement("li");
    listItem.classList.add("psicholog-list-item");
    listItem.innerHTML = `
      <div>
        <img src="${el.avatar_url}" alt="psychologist" class="psicholog-img" width="96px" height="96px">
      </div>
      <div class="psicholog-info">
        <p class="psicholog-title">Psychologist</p>
        <h3 class="psicholog-name">${el.name}</h3>
        <ul class="psicholog-specialization">
          <li class="psicholog-specialization-item">Experience: <span>${el.experience}</span></li>
          <li class="psicholog-specialization-item">License: <span>${el.license}</span></li>
          <li class="psicholog-specialization-item">Specialization: <span>${el.specialization}</span></li>
          <li class="psicholog-specialization-item">Initial consultation: <span>${el.initial_consultation}</span></li>
        </ul>
        <p class="psicholog-description">${el.about}</p>
        <button class="psicholog-btn">Read more</button>
        <div class="psicholog-rating-price-wrapper">
          <div class="psicholog-rating">Rating: <span>${el.rating}</span></div>
          <div class="psicholog-rating-line"></div>
          <div class="psicholog-price">Price / 1 hour: <span>${el.price_per_hour}</span></div>
          <button><img class="psicholog-favorite-btn" src="img/heart.svg" alt="favorite"></button>
        </div>
      </div>
    `;
    card.appendChild(listItem);
  });
};

const sortPsichologsValue = (value) => {
  console.log(value);
  const sortOptions = {
    "a-z": { field: "name", order: "asc" },
    "z-a": { field: "name", order: "desc" },
    "less-than-10": { field: "price_per_hour", order: "asc" },
    "greater-than-10": { field: "price_per_hour", order: "desc" },
    "popular": { field: "rating", order: "desc" },
    "not-popular": { field: "rating", order: "asc" },

  };

  if (sortOptions[value]) {
    const { field, order } = sortOptions[value];
    
    paginationState.field = field;
    paginationState.order = order;
    paginationState.lastVisibleDoc = null;
    paginationState.isPaginationFinished = false;

    allDataArray = []; 
    getData(); 
  }
};

if (refs.customSelectTrigger) {
  refs.customSelectTrigger.addEventListener("click", function () {
    refs.customSelect.classList.toggle("open");
  });

  refs.customOption.forEach((option) => {
    option.addEventListener("click", function () {
      refs.customSelectTrigger.textContent = this.textContent;
      refs.customOption.forEach((opt) => opt.classList.remove("custom-select-active"));
      this.classList.add("custom-select-active");
      sortPsichologsValue(this.dataset.value);
      refs.customSelect.classList.remove("open");
    });
  });

  document.addEventListener("click", (e) => {
    if (!refs.customSelect.contains(e.target)) {
      refs.customSelect.classList.remove("open");
    }
  });
}
console.log(refs.paginationBtn);
document.addEventListener("DOMContentLoaded", () => {
  const pagination = document.querySelector(".pagination-prev");

  if (pagination) {
    pagination.addEventListener("click", () => {
      if (paginationState.isPaginationFinished) return;
      getData();
    });
  }
});

getData();

import { collection, getDocs, getFirestore, query, orderBy, limit, startAfter } from "firebase/firestore";
import refs from "./refs";
import { updateProfileUserCard, updateProfileUserCardDell } from "./auth";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import heart from "../img/heart.svg";
import heartFavorite from '../img/heart-favorite.svg';

const db = getFirestore();

if (window.location.pathname === "/psychologists.services/favorites.html") {

  const paginationState = {
    field: "name",
    order: "asc",
    limit: 3,
    lastVisibleDoc: null,
    isPaginationFinished: false,
  };

  let allDataArray = [];

  const hideLoadingIndicator = () => {
    refs.loaderWraper.classList.add("is-hidden");
  };

  const showLoadingIndicator = () => {
    refs.loaderWraper.classList.remove("is-hidden");
  };

  const getDataFavorite = async (user) => {
    try {
      showLoadingIndicator();
      if (paginationState.isPaginationFinished) return;
      if (!user) {
        console.error("User is not authenticated.");
        return;
      }
      const q = paginationState.lastVisibleDoc
        ? query(
            collection(db, "users", user.uid, "profiles"),
            orderBy(paginationState.field, paginationState.order),
            startAfter(paginationState.lastVisibleDoc),
            limit(paginationState.limit)
          )
        : query(
            collection(db, "users", user.uid, "profiles"),
            orderBy(paginationState.field, paginationState.order),
            limit(paginationState.limit)
          );
  
      const querySnapshot = await getDocs(q);
      if (querySnapshot.size === 0) {
        paginationState.isPaginationFinished = true;
        refs.paginationBtn.classList.add("is-hidden");
      } else {
        paginationState.lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
        const dataArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        allDataArray = allDataArray.concat(dataArray);
        handleCardRender(allDataArray);
        
        // Check if allDataArray is empty after rendering
        if (allDataArray.length === 0) {
          refs.paginationBtn.classList.add("is-hidden");
        } else {
          refs.paginationBtn.classList.remove("is-hidden");
        }
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
    const isFavorites = true;

    data.forEach((el) => {
        const listItem = document.createElement("li");
        listItem.dataset.id = el.id; 
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
                    <button><img class="psicholog-favorite-btn" src="${isFavorites ? heartFavorite : heart}" alt="favorite"></button>
                </div>
            </div>
        `;

        listItem.querySelector(".psicholog-btn").addEventListener("click", () => {
          const cardWrapper = listItem.querySelector(".psicholog-info");
          const reviewsElementId = 'reviews-list'; 
          let divelement = cardWrapper.querySelector(`#${reviewsElementId}`);
          
          if (divelement) {
              divelement.remove();
          } else {
           
              divelement = document.createElement("ul");
              divelement.id = reviewsElementId;
              
              if (el.reviews && el.reviews.length > 0) {
                  el.reviews.forEach((review, index) => {
                      if (index < 2) {
                          divelement.innerHTML += `
                          <li class="profile-reviewer-item">
                              <div class="profile-reviewer-info-wrapper">
                                  <div class="profile-reviewer-img">${review.reviewer[0]}</div>
                                  <div class="profile-reviewer-info">
                                      <h4 class="reviews-reviewer">${review.reviewer}</h4>
                                      <p class="reviews-rating">${review.rating}</p>
                                  </div>
                              </div>
                              <p class="reviews-comment">${review.comment}</p>
                          </li>
                          `;
                      }
                  });
              }
              
              cardWrapper.appendChild(divelement);
          }
      });
      


        listItem.querySelector(".psicholog-favorite-btn").addEventListener("click", (i) => {
            i.target.src = heart;
            const cardItem = i.target.closest('li');
            if (cardItem) { cardItem.remove(); } 
            updateProfileUserCardDell(el.id);
        });

        card.appendChild(listItem);
    });
};





  const sortPsichologsValue = (value) => {
    const sortOptions = {
      "a-z": { field: "name", order: "asc" },
      "z-a": { field: "name", order: "desc" },
      "less-than-10": { field: "price_per_hour", order: "asc" },
      "greater-than-10": { field: "price_per_hour", order: "desc" },
      popular: { field: "rating", order: "desc" },
      "not-popular": { field: "rating", order: "asc" },
    };

    if (sortOptions[value]) {
      const { field, order } = sortOptions[value];
      paginationState.field = field;
      paginationState.order = order;
      paginationState.lastVisibleDoc = null;
      paginationState.isPaginationFinished = false;
      allDataArray = [];
      getDataFavorite(auth.currentUser);
    }
  };

  if (refs.customSelectTrigger) {
    refs.customSelectTrigger.addEventListener("click", () => {
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

  document.addEventListener("DOMContentLoaded", () => {
    if (refs.paginationBtn) {
      refs.paginationBtn.addEventListener("click", () => {
        if (paginationState.isPaginationFinished) {
          refs.paginationBtn.classList.add("is-hidden");
          return;
        }
        getDataFavorite(auth.currentUser);
      });
    }
  
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getDataFavorite(user);
      }
    });
  });
}

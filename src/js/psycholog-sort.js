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
import { updateProfileUserCard, updateProfileUserCardDell } from "./auth";
import heart from "../img/heart.svg";
import heartFavorite from "../img/heart-favorite.svg";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

if (window.location.pathname === "/psychologists.services/psychologists.html") {
  const db = getFirestore();

  const paginationState = {
    field: "name",
    order: "asc",
    limit: 3,
    lastVisibleDoc: null,
    isPaginationFinished: false,
  };

  let allDataArray = [];
  let favoriteitem = [];

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
        paginationState.lastVisibleDoc =
          querySnapshot.docs[querySnapshot.docs.length - 1];
        const dataArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        allDataArray = allDataArray.concat(dataArray);
        await getDataFavorite(auth.currentUser); 
        handleCardRender(allDataArray);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      hideLoadingIndicator();
    }
  };

  const getDataFavorite = async (user) => {
    try {
      if (!user) {
        console.error("User is not authenticated.");
        return;
      }
      const q = query(collection(db, "users", user.uid, "profiles"));
      const querySnapshot = await getDocs(q);
      favoriteitem = querySnapshot.docs.map((doc) => doc.id);
      console.log("Favorites fetched:", favoriteitem);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCardRender = (data) => {
    const card = document.querySelector(".psicholog-list");
    card.innerHTML = "";

    data.map((el) => {
      const isFavorites = favoriteitem.includes(el.id);

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
          <button><img class="psicholog-favorite-btn" src="${isFavorites ? heartFavorite : heart}" alt="favorite" ></button>
        </div>
      </div>
    `;

      listItem.querySelector(".psicholog-btn").addEventListener("click", () => {});

      listItem.querySelector(".psicholog-favorite-btn").addEventListener("click", (i) => {
        const currentSrc = i.target.src;
        if (currentSrc.includes(heart)) {
          i.target.src = heartFavorite;
          updateProfileUserCard(el.id);
        } else {
          i.target.src = heart;
          updateProfileUserCardDell(el.id);
        }
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
        refs.customOption.forEach((opt) =>
          opt.classList.remove("custom-select-active")
        );
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
        getData();
      });
    }
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      getDataFavorite(user).then(() => {
        getData();
      });
    } else {
      getData(); 
    }
  });
}

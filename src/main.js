import {  monitorAuthState, signOutUser } from "./js/auth";
import refs from "./js/refs";
import "./js/modal"

switch (window.location.pathname) {
  case "/psychologists.services/index.html":
    refs.navHome.classList.add("nav-list-item-active");
    break;

  case "/psychologists.services/psychologists.html":
    refs.navPsychologists.classList.add("nav-list-item-active");
    break;

  case "/psychologists.services/favorites.html":
    refs.navFavorites.classList.add("nav-list-item-active");
    break;

  default:
    break;
}

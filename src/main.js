import { login, monitorAuthState, register, signOutUser } from "./js/auth";

const refs = {
  backgroundModal: document.querySelector(".modal"),
  formLoginModal: document.querySelector(".form-login-modal"),
  formLoginCloseBtn: document.querySelector(".form-login-close-btn"),
  formLoginOpen: document.querySelector(".auth-item-login"),
  formRegisterOpen: document.querySelector(".auth-item-register"),
  formRegisterModal: document.querySelector(".form-register-modal"),
  formRegisterCloseBtn: document.querySelector(".form-register-close-btn"),
  formRegister: document.querySelector(".form-registration"),
  formLogin: document.querySelector(".form-login"),
  registerNameInput: document.querySelector(".form-name-input-register-js"),
  registerEmailInput: document.querySelector(".form-email-input-register-js"),
  registerPasswordInput: document.querySelector(
    ".form-password-input-register-js"
  ),
  loginEmailInput: document.querySelector(".form-email-input-login-js"),
  loginPasswordInput: document.querySelector(".form-password-input-login-js"),
  authBtn: document.querySelector(".auth-wrapper"),
  userInfo: document.querySelector(".user-info"),
  userName: document.querySelector(".user-name"),
  signOutBtn: document.querySelector(".user-logout"),
  navList: document.querySelector(".nav-list"),
};

const handelKeyDown = (e) => {
  if (e.keyCode === 27) {
    closeModal(refs.formLoginModal);
    closeModal(refs.formRegisterModal);
  }
};

const openModal = (modal) => {
  modal.classList.remove("is-hidden-modal");
  refs.backgroundModal.classList.remove("is-hidden-modal");
  document.addEventListener("keydown", handelKeyDown);
};

const closeModal = (modal) => {
  modal.classList.add("is-hidden-modal");
  refs.backgroundModal.classList.add("is-hidden-modal");
  document.removeEventListener("keydown", handelKeyDown);
};

if (refs.formLoginOpen) {
  refs.formLoginOpen.addEventListener("click", () => {
    openModal(refs.formLoginModal);
  });
}

if (refs.formLoginCloseBtn) {
  refs.formLoginCloseBtn.addEventListener("click", () => {
    closeModal(refs.formLoginModal);
  });
}

if (refs.formRegisterOpen) {
  refs.formRegisterOpen.addEventListener("click", () => {
    openModal(refs.formRegisterModal);
  });
}

if (refs.formRegisterCloseBtn) {
  refs.formRegisterCloseBtn.addEventListener("click", () => {
    closeModal(refs.formRegisterModal);
  });
}

if (refs.backgroundModal) {
  refs.backgroundModal.addEventListener("click", (event) => {
    if (event.target === refs.backgroundModal) {
      closeModal(refs.formLoginModal);
      closeModal(refs.formRegisterModal);
    }
  });
}

if (refs.formRegister) {
  refs.formRegister.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = refs.registerEmailInput.value;
    const password = refs.registerPasswordInput.value;
    const name = refs.registerNameInput.value;
    try {
      await register(email, password, name);
      monitorAuthState(userName); 
      closeModal(refs.formRegisterModal);
    } catch (error) {
      alert("Registration failed");
      console.error("Registration failed:", error);
    }
  });
}

if (refs.formLogin) {
  refs.formLogin.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = refs.loginEmailInput.value;
    const password = refs.loginPasswordInput.value;
    try {
      await login(email, password);
      closeModal(refs.formLoginModal);
    } catch (error) {
      alert("Login failed");
      console.error("Login failed:", error);
    }
  });
}

const userName = (user) => {
  if (user) {
    if (user.displayName) {
      refs.userInfo.style.display = "flex";
      refs.userName.textContent = user.displayName;
      refs.authBtn.classList.add("is-hidden");

    } else {
      return;
    }
  } else {
    refs.userInfo.style.display = "none";
    refs.userName.textContent = "";
    refs.authBtn.classList.remove("is-hidden");
  }
};


if (refs.signOutBtn) {
  refs.signOutBtn.addEventListener("click", () => {
    signOutUser();
  });
}

monitorAuthState(userName);

const backgroundModal = document.querySelector(".modal");

const formLoginModal = document.querySelector(".form-login-modal");

const formLoginCloseBtn = document.querySelector(".form-login-close-btn");

const formLoginOpen = document.querySelector(".auth-item-login");

const formRegisterOpen = document.querySelector(" .auth-item-register");

const formRegister = document.querySelector(".form-register-modal");

const formRegisterCloseBtn = document.querySelector(".form-register-close-btn");

const openModal = (modal) => {
  modal.classList.remove("is-hidden");
  backgroundModal.classList.remove("is-hidden");
};

const closeModal = (modal) => {
  modal.classList.add("is-hidden");
  backgroundModal.classList.add("is-hidden");
};

formLoginOpen.addEventListener("click", () => {
  openModal(formLoginModal);
});

formLoginCloseBtn.addEventListener("click", () => {
  closeModal(formLoginModal);
});

formRegisterOpen.addEventListener("click", () => {
  openModal(formRegister);
});

formRegisterCloseBtn.addEventListener("click", () => {
  closeModal(formRegister);
});

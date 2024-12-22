
const refs = {
    backgroundModal: document.querySelector(".modal"),
    formLoginModal: document.querySelector(".form-login-modal"),
    formLoginCloseBtn: document.querySelector(".form-login-close-btn"),
    formLoginOpen: document.querySelector(".auth-item-login"),
    formRegisterOpen: document.querySelector(".auth-item-register"),
    formRegister: document.querySelector(".form-register-modal"),
    formRegisterCloseBtn: document.querySelector(".form-register-close-btn"),
}

const openModal = (modal) => {
    modal.classList.remove("is-hidden");
    refs.backgroundModal.classList.remove("is-hidden");
};

const closeModal = (modal) => {
    modal.classList.add("is-hidden");
    refs.backgroundModal.classList.add("is-hidden");
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
        openModal(refs.formRegister);
    });
}

if (refs.formRegisterCloseBtn) {
    refs.formRegisterCloseBtn.addEventListener("click", () => {
        closeModal(refs.formRegister);
    });
}
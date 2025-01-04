import { login, monitorAuthState, register, userName } from "./auth";
import refs from "./refs";

const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      closeAllModals();
    }
  };
  
  const openModal = (modal) => {
    modal.classList.remove("is-hidden-modal");
    refs.backgroundModal.classList.remove("is-hidden-modal");
    document.addEventListener("keydown", handleKeyDown);
  };
  
  const closeModal = (modal) => {
    modal.classList.add("is-hidden-modal");
    refs.backgroundModal.classList.add("is-hidden-modal");
    document.removeEventListener("keydown", handleKeyDown);
    monitorAuthState(userName);
  };
  const closeAllModals = () => {
    closeModal(refs.formLoginModal);
    closeModal(refs.formRegisterModal);
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
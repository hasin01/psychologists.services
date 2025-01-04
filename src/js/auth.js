import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { auth } from "./firebase";
import refs from "./refs";

const register = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(user, {
      displayName: displayName
    });
    console.log("User registered and profile updated:", user);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error ${errorCode}: ${errorMessage}`);
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error ${errorCode}: ${errorMessage}`);
    throw error;
  }
};

const signOutUser = () => {
  signOut(auth).then(() => {
    console.log("signOut");
  }).catch((error) => {
    console.error("Sign out error:", error);
  });
};

const monitorAuthState =  (updateUI) => {
 onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.displayName;
      updateUI(user);
    } else {
      updateUI(null);
    }
  });
};


if (refs.signOutBtn) {
  refs.signOutBtn.addEventListener("click", () => {
    signOutUser();
  });
}




export const userName = (user) => {
  if (user) {
    if (user.displayName) {
      refs.userInfo.style.display = "flex";
      refs.userName.textContent = user.displayName;
      refs.authBtn.classList.add("is-hidden");
      refs.pageFavorites.classList.remove("is-hidden");
    } else {
      return;
    }
  } else {
    refs.userInfo.style.display = "none";
    refs.userName.textContent = "";
    refs.authBtn.classList.remove("is-hidden-modal");
    refs.authBtn.classList.remove("is-hidden");
    refs.pageFavorites.classList.add("is-hidden");
  }
};
monitorAuthState(userName);


export { register, login, monitorAuthState, signOutUser };

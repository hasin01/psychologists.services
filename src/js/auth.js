import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";
import refs from "./refs";
import {
  doc,
  setDoc,
  getFirestore,
  updateDoc,
  arrayUnion,
  getDoc,
  deleteDoc,
} from "firebase/firestore";

const register = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await updateProfile(user, {
      displayName: displayName,
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
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Пользователь вошел в систему:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Ошибка ${errorCode}: ${errorMessage}`);
    throw error;
  }
};

const db = getFirestore();

const updateProfileUserCard = async (docId) => {
  try {
    const user = auth.currentUser;
    if (user) {
      const userId = user.uid;

      const sourceDocRef = doc(db, "psychologists", docId);
      const docSnapshot = await getDoc(sourceDocRef);

      if (docSnapshot.exists()) {
        const data = docSnapshot.data();

        const profileWithId = {
          ...data,
          id: docId,
        };

        const targetDocRef = doc(db, "users", userId, "profiles", docId);

        await setDoc(targetDocRef, profileWithId);
        console.log("Объект успешно добавлен в профиль пользователя.");
      } else {
        console.log("Документ не найден.");
      }
    } else {
      console.log("Пользователь не авторизован.");
    }
  } catch (error) {
    console.error("Ошибка обновления профиля:", error);
  }
};
const updateProfileUserCardDell = async (docId) => {
  try {
    const user = auth.currentUser;
    if (user) {
      const userId = user.uid;
      const targetDocRef = doc(db, "users", userId, "profiles", docId);
      await deleteDoc(targetDocRef);
      console.log("Документ успешно удалён из профиля пользователя.");
    } else {
      console.log("Пользователь не авторизован.");
    }
  } catch (error) {
    console.error("Ошибка удаления профиля:", error);
  }
};

const signOutUser = () => {
  signOut(auth)
    .then(() => {
      console.log("signOut");
    })
    .catch((error) => {
      console.error("Sign out error:", error);
    });
};

const monitorAuthState = (updateUI) => {
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

export {
  register,
  login,
  monitorAuthState,
  signOutUser,
  updateProfileUserCard,
  updateProfileUserCardDell,
};

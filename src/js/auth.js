import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { auth } from "./firebase";

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

export { register, login, monitorAuthState, signOutUser };

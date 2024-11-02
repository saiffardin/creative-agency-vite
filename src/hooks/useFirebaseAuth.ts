import { firebaseApp } from "@utils/firebase.config";
import { FirebaseAuthUserType } from "./types/firebase-auth-user-types";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

interface HookRetType {
  firebaseGoogleAuth: () => Promise<FirebaseAuthUserType>;
}

const useFirebaseAuth = (): HookRetType => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebaseApp);

  const firebaseGoogleAuth = async (): Promise<FirebaseAuthUserType> => {
    try {
      const result = await signInWithPopup(auth, provider);
      const { displayName, email, photoURL, uid } = result.user;

      return { displayName, email, photoURL, uid, isSignedIn: true };
    } catch (error) {
      console.error("Firebase Auth Error:", error);
      return {
        displayName: null,
        email: null,
        photoURL: null,
        uid: null,
        isSignedIn: false,
      };
    }
  };

  return { firebaseGoogleAuth };
};

export default useFirebaseAuth;

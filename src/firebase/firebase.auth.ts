import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {fireBaseApp} from "./firebase.config.ts";
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt : "select_account "
});
export const auth = getAuth(fireBaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
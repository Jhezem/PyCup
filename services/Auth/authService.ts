import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
  User,
} from "@firebase/auth";
import { auth } from "../../lib/firebase";
import { AuthResult } from "./IAuthService";

class AuthMethods {
  loginWithGoogle = async (): Promise<AuthResult> => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((result: UserCredential) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        const user = result.user;

        return { token, user };
      })
      .catch((error) => {
        return { error };
      });
  };

  signUpWithEmail = async (
    email: string,
    password: string
  ): Promise<AuthResult> => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        const user = userCredential.user;
        return { user };
      })
      .catch((error) => {
        return { error };
      });
  };

  signInWithEmail = async (
    email: string,
    password: string
  ): Promise<AuthResult> => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        const user = userCredential.user;
        return { user };
      })
      .catch((error) => {
        return { error };
      });
  };
}

class AuthService extends AuthMethods {
  logout = async () => {
    await auth.signOut();
  };
}

export default new AuthService();

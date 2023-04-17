"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthResult } from "../services/Auth/IAuthService";
import AuthService from "../services/Auth/authService";
import { IUseAuth } from "./IUseAuth";
import { auth } from "../lib/firebase";

const AuthContext = createContext<IUseAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthResult | null>(null);
  const [error, setError] = useState<AuthResult | null>(null);

  const loginWithGoogle = async () => {
    const { user, error } = await AuthService.loginWithGoogle();

    setUser((user as AuthResult) ?? null);
    setError((error as AuthResult) ?? null);
  };

  const registerWithEmail = async (email: string, password: string) => {
    const { user, error } = await AuthService.signUpWithEmail(email, password);

    setUser((user as AuthResult) ?? null);
    setError((error as AuthResult) ?? null);
  };

  const loginWithEmail = async (email: string, password: string) => {
    const { user, error } = await AuthService.signInWithEmail(email, password);

    setUser((user as AuthResult) ?? null);
    setError((error as AuthResult) ?? null);
  };

  const logout = async () => await AuthService.logout();

  const value = {
    user,
    error,
    loginWithGoogle,
    loginWithEmail,
    registerWithEmail,
    logout,
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user as AuthResult));
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

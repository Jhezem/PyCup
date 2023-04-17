import { AuthResult } from "../services/Auth/IAuthService";

export interface IUseAuth {
  user: AuthResult | null;
  error: AuthResult | null;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  registerWithEmail: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

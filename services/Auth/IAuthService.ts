import { User } from "@firebase/auth";

interface AuthError {
  code: string;
  message: string;
}

export interface AuthResult {
  user?: User;
  token?: string | undefined;
  error?: AuthError;
}

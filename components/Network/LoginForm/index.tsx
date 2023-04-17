import React, { useState } from "react";
import Link from "next/link";
import styles from "./LoginForm.module.css";
import { useAuth } from "../../../hooks/useAuth";

interface loginForm {
  signup: boolean;
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
}

export const LoginForm = ({ signup = false, onSubmit }: loginForm) => {
  const { loginWithGoogle, loginWithEmail, registerWithEmail, error } =
    useAuth()!;
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const isValidForm = () => {
    if (userCredentials.email === "" || userCredentials.password === "")
      return false;
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(isValidForm());
    if (!isValidForm()) return;

    if (!signup)
      return loginWithEmail(userCredentials.email, userCredentials.password);

    registerWithEmail(userCredentials.email, userCredentials.password);
  };

  return (
    <main>
      <div className={styles.form}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <span>{signup ? "REGISTRATE" : "INICIA SESION"}</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.form_group}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.form_group}>
              <input type="submit" value={signup ? "Registrarse" : "Entrar"} />
            </div>
          </form>
          {error && (
            <div className={styles.auth_error}>
              <span>
                Ocurrió un error al {signup ? "Registrarse" : "Iniciar sesión"}
              </span>
            </div>
          )}
          <div className={styles.social_login}>
            <div className={styles.google}>
              <i
                className="fa-brands fa-google"
                onClick={() => loginWithGoogle()}
              />
            </div>
          </div>
          <div className={styles.register}>
            {signup ? (
              <span>
                Ya tenes cuenta? <Link href="social/login">Inicia sesión.</Link>
              </span>
            ) : (
              <span>
                Aún no tenes cuenta?{" "}
                <Link href="social/register">Regístrate.</Link>
              </span>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

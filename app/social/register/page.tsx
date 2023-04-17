"use client";
import { LoginForm } from "../../../components/Network/LoginForm";

export default function Register() {
  const login = () => console.log("submit");

  return <LoginForm signup={true} onSubmit={login} />;
}

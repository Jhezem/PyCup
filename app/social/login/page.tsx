"use client";
import { LoginForm } from "../../../components/Network/LoginForm";

export default function LogIn() {
  const login = () => console.log("submit");
  return <LoginForm signup={false} onSubmit={login} />;
}

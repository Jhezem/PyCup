import React from "react";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import styles from "./MainLayout.module.css";

export default function MainLayout({children} : React.PropsWithChildren) {
  return (
    <div className={styles.container}>
    <Header />
    {children}
    <Footer />
    </div>
  )
}

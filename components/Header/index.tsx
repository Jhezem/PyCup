import React from "react";
import { Navbar } from "../Navbar";
import Image from "next/image";
import styles from "./Header.module.css"

export const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <Image
        src={"/img/rapbattle.jpg"}
        width={1600}
        height={600}
        alt="banner"
        style={{
            filter: 'brightness(0.3)',
            width: "100%"
        }}
      />
      <div className={styles.cta}>
      <h1>¡Se parte del <span>futuro</span> <br/> del <span>freestyle</span>!</h1>
      <div className={styles.cta_container}>
      <a className={styles.main_cta}>Ver torneos</a>
      <a className={styles.create_account}>Registrate</a>
      </div>
      </div>
    </header>
  );
};

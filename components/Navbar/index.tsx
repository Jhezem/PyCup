import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
      <span className={styles.hamburger}>
        <i
          className="fa-solid fa-bars"
          onClick={() => setToggleNav(!toggleNav)}
        />
      </span>
      <nav className={styles.navigation_container}>
        <a>Py Cup</a>
        <div
          className={`${styles.navigation_wrapper} ${
            toggleNav ? styles.show_nav : styles.hide_nav
          }`}
        >
          <ul>
            <li>
              <Link href={"/"}>Inicio</Link>
            </li>
            <li>
              <Link href={"/"}>Eventos</Link>
            </li>
            <li>
              <Link href={"/"}>Freestylers</Link>
            </li>
            <li>
              <Link href={"/"}>Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

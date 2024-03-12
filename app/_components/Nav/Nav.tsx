import React from "react";
import Styles from "./Nav.module.scss";
import Link from "next/link";
export default function Nav() {
  return (
    <>
      <nav className={Styles.nav}>
        <h1>Spice labels</h1>
        <ul className={Styles.navList}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

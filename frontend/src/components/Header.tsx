import React from "react";
import styles from "../styles/components/header.module.css";
import logo from "../assets/festXsvce_logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    // <div className={styles.body}>
    <div className={styles.container}>
      <>
        <img src={logo} alt="Tech Fest" className={styles.logo} />
      </>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/departments"}>Events</Link>
        <Link to={"/"}>Get Passes</Link>
        <Link to={"/location"}>Location</Link>
      </nav>
    </div>
    // </div>
  );
}

export default Header;

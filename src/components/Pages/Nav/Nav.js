import React from "react";
import styles from "./Nav.module.css";
import logo from "../../UI/Images/logo.png";
import NavItems from "./NavItems";
import { Link } from "@tanstack/react-location";

const Navigation = () => {
  return (
    <nav className={`${styles["primary-header"]}`}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="" />
      </Link>
      <NavItems />
    </nav>
  );
};
export default Navigation;

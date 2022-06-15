import React from 'react';
import styles from "./Nav.module.css"
import logo from "../UI/Images/logo.png"
import NavItems from "./NavItems";


const Navigation = () => {



    return (

        <nav className={`${styles['primary-header']} + flex`}>
            <a href="#landing page"> <img className={styles.logo} src={logo} alt="" /></a>

            <NavItems/>
            </nav>

    )
}
export default Navigation;
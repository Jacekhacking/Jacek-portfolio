import React from "react";
import styles from "./Footer.module.css"
const Footer = () => {
    return(
        <div className={styles['footer-container']}>
            <p>Email: Jacekhacking@gmail.com</p>
            <p>Github: @ blah blah blah</p>
            <p>LinkedIn: @filler</p>
        </div>
    )
}

export default Footer;

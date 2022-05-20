import React from "react";
import styles from "./Footer.module.css"
const Footer = () => {
    return(
        <div className={styles['footer-container']}>
            <section className={styles['footer-text']}>Email: Jacekhacking@gmail.com</section>
            <section className={styles['footer-text']}>Github: @ blah blah blah</section>
            <section className={styles['footer-text']}>LinkedIn: @filler</section>
        </div>
    )
}

export default Footer;

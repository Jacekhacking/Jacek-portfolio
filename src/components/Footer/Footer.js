import React from "react";
import styles from "./Footer.module.css"
const Footer = () => {
    return(
        <div className={styles['footer-container']}>
            <section className={styles['footer-text']}>Email: <a href="mailto:Jacekhacking@gmail.com"> JacekHacking@gmail.com</a> </section>
            <section className={styles['footer-text']}>Github: <a href="https://github.com/Jacekhacking">GitHub</a></section>
            <section className={styles['footer-text']}>LinkedIn: @filler</section>
        </div>
    )
}

export default Footer;

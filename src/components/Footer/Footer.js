import React from "react";
import styles from "./Footer.module.css"
import twitter from "../UI/social logos/twitter.png"
import github from "../UI/social logos/GitHub-Mark-64px.png"
import linkedin from "../UI/social logos/linkedin.png"

const Footer = () => {
    return(
        <div className={styles['footer-container']}>
            <section className={styles['footer-text']}>Email: <a href="mailto:Jacekhacking@gmail.com"> JacekHacking@gmail.com</a> </section>

            <div className={'flex'}>
                <section className={styles['footer-text']}>Github: <a href="https://github.com/Jacekhacking">GitHub</a></section>
                <a href="https://twitter.com/JH_WebDev"><img className={styles['social-img']} src={twitter} alt="twitter"/></a>
                <a href="https://github.com/Jacekhacking"><img className={styles['social-img']} src={github} alt="github"/></a>
                <a href="https://www.linkedin.com/in/jacek-hacking-708007210"><img className={styles['social-img']} src={linkedin} alt="linked in "/></a>
            </div>

        </div>
    )
}

export default Footer;

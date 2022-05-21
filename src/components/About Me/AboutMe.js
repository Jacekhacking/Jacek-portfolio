import React, {Fragment} from "react";
import styles from "./AboutMe.module.css";
import html from "../UI/Images/html_logo.png"
import css from "../UI/Images/css_logo.png"
import javascript from "../UI/Images/javascript_logo.png"
import react from "../UI/Images/react_logo.png"

const AboutMe = () => {
    return (
        <Fragment>
            <div className={`${styles['about-me']}`}>
                <h2>A Little Bit About Me</h2>
                <p> Started teaching myself how to write code at the beginning of 2019. Decided to take it seriously in 2021 and joined the University of Utah Fullstack Coding Bootcamp. Finished their program in October of 2021. And immediately went to work cementing everything I learned there and started to work doing freelance work. </p>
                <div className={styles['logo-container']}>
                    <img className={styles['logo']} src={html} alt="html logo"/>
                    <img className={styles['logo']} src={css} alt="css logo"/>
                    <img className={styles['logo']} src={javascript} alt="javascript logo"/>
                    <img className={styles['logo']} src={react} alt="react logo"/>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutMe
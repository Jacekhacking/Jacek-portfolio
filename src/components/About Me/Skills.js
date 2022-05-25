import html from "../UI/Images/html_logo.png"
import css from "../UI/Images/css_logo.png"
import javascript from "../UI/Images/javascript_logo.png"
import reactLogo from "../UI/Images/react_logo.png"
import typeScript from "../UI/Images/typescript_logo.png"
import styles from "./Skills.module.css";
import UofUPng from "../UI/Images/coding-bootcamp-full-stack-developer-certificate.1.png"
import React, {Fragment} from "react";

const Skills = () => {



    return(<Fragment>
            <h2 className={`ff-cursive fs-700 text-dark`} style={{textAlign:'center'}}>Skills</h2>
    <div className={styles['logo-container']}>
            <img className={styles['logo']} src={html} alt="html logo"/>
            <img className={styles['logo']} src={css} alt="css logo"/>
            <img className={styles['logo']} src={javascript} alt="javascript logo"/>
            <img className={styles['logo']} src={reactLogo} alt="react logo"/>
            <img className={styles['logo']} src={typeScript} alt="typescript logo"/>
            <img className={styles['logo']} src={UofUPng} alt="typescript logo"/>
        </div>
</Fragment>
    )
}
export default Skills;
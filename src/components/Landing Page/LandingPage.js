import React, {Fragment} from "react";
import styles from "./LandingPage.module.css";
import selfie from "../UI/Images/Selfie_large.jpeg"

const LandingPage = () => {


    return (<Fragment>
        <div className={'container'}>
            <h2 className={styles.aboutText}>HELLO! </h2>
            <div className={`${styles.darkDiv} flex`}>
                <p className={styles.aboutText}>My name is Jacek Hacking and I am a fullstack web developer with an
                    emphasis on Front-End web development. </p>
                <img src={selfie} alt="selfie" className={styles.selfieDiv}/>

            </div>


        </div>

    </Fragment>)
}

export default LandingPage
import React, {Fragment} from "react";
import styles from "./LandingPage.module.css";
import selfie from "../UI/Images/Selfie_large.jpeg"

const LandingPage = () => {


    return (<Fragment>
        <div className={`${styles['container']}bg-light`}>
            {/*<h2 className={`${styles['about-text']} text-dark fs-800`}>HELLO! </h2>*/}
            <div className={`${styles['dark-div']} text-dark fs-800 uppercase ff-cursive`}>

                    <img src={selfie} alt="selfie"
                         className={`${styles['selfie-div']} `}/> <p className={`${styles['about-text']}`}>Hello! My name is
                    Jacek Hacking and I am a Front-End Web Developer. </p>


            </div>


        </div>

    </Fragment>)
}

export default LandingPage
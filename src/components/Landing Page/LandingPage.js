import React from "react";
import styles from "./LandingPage.module.css";
import selfie from "../UI/Images/Selfie_large.jpeg"

const LandingPage = () => {


    return (

        <div style={{
            alignItems:'center',
            justifyContent:'center'
        }}>
            <div id={'landing page flex'} className={`${styles['container']} bg-light`}>
                {/*<h2 className={`${styles['about-text']} text-dark fs-800`}>HELLO! </h2>*/}
                <div className={`${styles['dark-div']} text-dark fs-800 uppercase ff-cursive`}>

                    <img src={selfie} alt="selfie"
                         className={`${styles['selfie-div']} `}/> <p
                    className={`${styles['about-text']}`}><div style={{justifyContent:'center', alignItems:'center'}}>Hell0!</div> My name is
                    Jacek Hacking. I am a Front-End Web Developer. </p>
                </div>
            </div>
        </div>


    )
}

export default LandingPage
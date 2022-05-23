import React, {useState, Fragment, useEffect} from "react";
import styles from "./AboutMe.module.css";
import Skills from "./Skills"
import axios from "axios";






const AboutMe = () => {




// let displayPokemon = pokemon.sprites.front_default
    return (
        <Fragment>
            <div className={`${styles['about-me']}`}>
                <h2
                    className={`ff-cursive text-dark fs-700`}
                    style={{textAlign:'center', marginTop: '3rem'}}>A Little Bit About Me</h2>
                <p className={styles['about-me-text']}>
                    Started teaching myself how to write code at the beginning of 2019. Decided to take it seriously in 2021
                    and joined the University of Utah Fullstack Coding Bootcamp. Finished their program in October of 2021.
                    And immediately went to work cementing everything I learned there and started to work doing freelance work. </p>
                 <Skills/>

            </div>
        </Fragment>
    )
}

export default AboutMe
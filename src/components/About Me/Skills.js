import html from "../UI/Images/html_logo.png"
import css from "../UI/Images/css_logo.png"
import javascript from "../UI/Images/javascript_logo.png"
import reactLogo from "../UI/Images/react_logo.png"
import typeScript from "../UI/Images/typescript_logo.png"
import styles from "./Skills.module.css";
import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";

const Skills = () => {

    //  axios call to pokeAPI for a random pokemon sprite to be displayed inline with the technology pngs. initial state of number is 59 because that's my favorite pokemon
    const [pokemon, setPokemon] = useState(null);
    const [number, setNumber] = useState(59)

    useEffect(()=> {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${number}/`).then((response)=> {
            setPokemon(response.data)

        });
    }, [number]);


    if(!pokemon)return null;


    return(<Fragment>
            <h2 className={`ff-cursive fs-700 text-dark`} style={{textAlign:'center'}}>Skills</h2>
    <div className={styles['logo-container']}>
            <img className={styles['logo']} src={html} alt="html logo"/>
            <img className={styles['logo']} src={css} alt="css logo"/>
            <img className={styles['logo']} src={javascript} alt="javascript logo"/>
            <img className={styles['logo']} src={reactLogo} alt="react logo"/>
            <img className={styles['logo']} src={typeScript} alt="typescript logo"/>
            {/*/!*  below is the randomizer for the setNumber useState chooses a random number between 1 and 386.*/}
            {/*386 being the end of gen 3 and my practical endpoint for display.  *!/*/}
            {/*<img*/}
            {/*    className={styles['pokemon-logo']}*/}
            {/*    onClick={()=> setNumber(Math.round(Math.random()*(386-1)+1))}*/}
            {/*    style={{cursor:'pointer'}}*/}
            {/*    src={pokemon.sprites.front_default}*/}
            {/*    alt={pokemon.name}/>*/}
        </div>
</Fragment>
    )
}
export default Skills;
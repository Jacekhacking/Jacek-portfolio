import React, {useState, Fragment, useEffect} from "react";
import styles from "./AboutMe.module.css";
import Skills from "./Skills"
import DropDownAboutMe from "./DropDownAboutMe";
import axios from "axios";





const AboutMe = () => {


    //  axios call to pokeAPI for a random Pokémon sprite to be displayed inline with the technology pngs. initial state of number is 59 because that's my favorite pokemon
    const [pokemon, setPokemon] = useState(null);
    const [number, setNumber] = useState(59)

    // dropdown on click event for more about me content
    const [dropdown, setDropdown] = useState(false);


    useEffect(()=> {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${number}/`).then((response)=> {
            setPokemon(response.data)
        });
    }, [number]);


    if(!pokemon)return null;





    const renderDropdown = () => {
        switch(dropdown){
            case true :
                return <DropDownAboutMe/>

            case false:
                return ''

            default :
                return ''
        }
    }


    return (
        <Fragment>
            <div id={'about'} className={`${styles['about-me']} flex `} style={{flexDirection:'column', alignItems:'center'}}>
                <div >
                    <h2
                        className={`header-style flex wrap ff-cursive text-dark`}  style={{justifyContent:'center', margin: '1rem'}}>About Me
                        {/*  below is the randomizer for the setNumber useState chooses a random number between 1 and 386.
            386 being the end of gen 3 and my practical endpoint for display.  */}
                        </h2>

                </div>
                <div>
                    <img
                        className={styles['pokemon-logo']}
                        onClick={()=> setNumber(Math.round(Math.random()*(386-1)+1))}
                        style={{cursor:'pointer', float:'right'}}
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}/>
                </div>


                <p className={styles['about-me-text']}>
                    Started teaching myself how to write code at the beginning of 2019. Decided to take it seriously in 2021
                    and joined the University of Utah Fullstack Coding Bootcamp. Finished their program in October of 2021.
                    And immediately went to work cementing everything I learned there and started to work doing freelance work.
                    <button
                        className={`${styles['dropdown-toggle-button']} ff-cursive text-dark`}
                        onClick={
                        ()=>setDropdown(prevState => !prevState)}
                        >{dropdown===false ? 'More...':'Hide...'}
                    </button>
                </p>


                    {renderDropdown(dropdown)}

                <Skills/>
            </div>
        </Fragment>
    )
}

export default AboutMe
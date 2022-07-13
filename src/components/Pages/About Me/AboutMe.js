import {useState, useEffect} from "react";

import Skills from "../Skills"
import DropDownAboutMe from "./DropDownAboutMe";
import axios from "axios";
import {AboutMeText, AboutMeBody, DropDownToggleButton, PokemonButton} from "../../UI/Styles/AboutMe.styles";
import {Header2} from "../../UI/Styles/Global.styles";


const AboutMe = () => {
    //  axios call to pokeAPI for a random pokemon sprite initial state of number is 59 because that's my favorite pokemon//
    const [pokemon, setPokemon] = useState(null);
    const [number, setNumber] = useState(59)
    // dropdown on click event for more about me content
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${number}/`).then((response) => {
            setPokemon(response.data)
        });
    }, [number]);

    if (!pokemon) return null;


    const changeSetNumber = () => {
        setNumber(Math.round(Math.random() * (386 - 1) + 1))
    }

    const changeSetDropdown = () => {
        setDropdown(prevState => !prevState)
    }

    const renderDropdown = () => {
        switch (dropdown) {
            case true :
                return <DropDownAboutMe/>

            case false:
                return ''

            default :
                return ''
        }
    }


    return (
        <>
            <AboutMeBody id={'about'}>
                    <Header2 >About Me</Header2>
                    <PokemonButton
                        onClick={changeSetNumber}
                        style={{cursor: 'pointer', float: 'right'}}
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}/>
                <AboutMeText>
                    Started teaching myself how to write code at the beginning of 2019. Decided to take it seriously in 2021
                    and joined the University of Utah Fullstack Coding Bootcamp. Finished their program in October of 2021 .
                    And immediately went to work cementing everything I learned there and started to work doing freelance work.
                    <DropDownToggleButton
                        onClick={changeSetDropdown}> {dropdown === false ? 'More...' : 'Hide...'} </DropDownToggleButton>
                </AboutMeText>
                {renderDropdown(dropdown)}
                <Skills/>
            </AboutMeBody>
        </>
    )
}

export default AboutMe
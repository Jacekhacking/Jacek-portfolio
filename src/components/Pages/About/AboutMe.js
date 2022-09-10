import { useState, useEffect } from "react";
import axios from "axios";
import DropDownAboutMe from "./DropDownAboutMe";

import styled from "styled-components";
import { Header2 } from "../../UI/Styles/Global.styles";

const AboutMe = () => {
  //CSS and styled components
  const AboutMeBody = styled.div`
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const AboutMeText = styled.p`
    text-align: center;
    margin: 1em;
    font-size: clamp(var(--fs-300), 3.5vw, var(--fs-600));

    max-width: 1200px;
  `;

  const DropDownToggleButton = styled.button`
    background-color: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    font-family: var(--ff-cursive);
    color: hsl(var(--clr-dark-gray));

    :hover {
      cursor: pointer;
      border-bottom: 2px solid hsl(var(--clr-sandy-brown));
    }
  `;

  const PokemonButton = styled.img`
    border: 4px solid transparent;
    border-radius: 25% 10%;
    width: 180px;
    height: 180px;

    :hover {
      border: 3px solid hsl(var(--clr-sandy-brown));
    }
  `;

  //  axios call to pokeAPI for a random pokemon sprite initial state of number is 59 because that's my favorite pokemon//
  const [pokemon, setPokemon] = useState(null);
  const [number, setNumber] = useState(59);
  // dropdown on click event for more about me content
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${number}/`)
      .then((response) => {
        setPokemon(response.data);
      });
  }, [number]);

  if (!pokemon) return null;

  const changeSetNumber = () => {
    setNumber(Math.round(Math.random() * (386 - 1) + 1));
  };

  const changeSetDropdown = () => {
    setDropdown((prevState) => !prevState);
  };

  const renderDropdown = () => {
    switch (dropdown) {
      case true:
        return <DropDownAboutMe />;

      case false:
        return "";

      default:
        return "";
    }
  };

  return (
    <>
      <AboutMeBody>
        <Header2>About Me</Header2>
        <PokemonButton
          onClick={changeSetNumber}
          style={{ cursor: "pointer", float: "right" }}
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <AboutMeText>
          Started teaching myself how to write code at the beginning of 2019.
          Decided to take it seriously in 2021 and joined the University of Utah
          Fullstack Coding Bootcamp. Finished their program in October of 2021 .
          And immediately went to work cementing everything I learned there and
          started to work doing freelance work.
          <DropDownToggleButton onClick={changeSetDropdown}>
            {dropdown === false ? "More..." : "Hide..."}{" "}
          </DropDownToggleButton>
        </AboutMeText>
        {renderDropdown(dropdown)}
      </AboutMeBody>
    </>
  );
};

export default AboutMe;

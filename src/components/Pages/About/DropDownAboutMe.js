import GCPic from "../../UI/Images/gc-rafting-picture.jpeg";
import AuriPic from "../../UI/Images/AuriPic_2.jpeg";
import styled from "styled-components";
// import { useState, useEffect } from "react";
// import axios from "axios";

const DropDownAboutMe = () => {
  const DropDownContainerWrapper = styled.div`
    margin: 2em 0;
    background-color: hsl(var(--clr-blue-gray), 0.2);
    color: var(--clr-5);
    font-size: clamp(var(--fs-400), 2vw, var(--fs-500));

    @media (min-width: 900px) {
      margin-left: 2em;
      margin-right: 2em;
    }

    h2 {
      text-align: center;
    }
    h3 {
      text-align: center;
    }

    p {
      text-align: center;
      margin: 1em;
    }
    div {
      /* margin: 1em; */
      ul {
        margin: 1em;
        padding: 0;
      }
    }
    @media (max-width: 900px) {
      div {
        margin: 0;
        ul {
        }
      }
    }
  `;
  const DropDownImg = styled.img`
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 5px;

    @media (min-width: 900px) {
      width: 90%;
      height: 500px;
    }
    @media (min-width: 1200px) {
      width: 600px;
      height: 600px;
      margin: 1em;
    }
  `;

  const DropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const ImgParagraphDiv = styled.div`
    max-width: 1500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${(props) => props.direction || "row"};
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 1200px) {
      flex-direction: column;
    }
  `;

  const DropDownH3 = styled.h3`
    font-size: var(--fs-700);
    font-family: var(--ff-cursive);
    color: #b5b5b5;
  `;

  // const PokemonButton = styled.img`
  //   border: 3px solid transparent;
  //   border-radius: 25% 10%;
  //   width: 180px;
  //   height: 180px;
  //
  //   :hover {
  //     border: 3px solid var(--clr-4);
  //   }
  // `;

  // const [pokemon, setPokemon] = useState(null);
  // const [number, setNumber] = useState(59);
  //
  // useEffect(() => {
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/${number}/`)
  //     .then((response) => {
  //       setPokemon(response.data);
  //     });
  // }, [number]);

  // if (!pokemon) return null;
  //
  // const changeSetNumber = () => {
  //   setNumber(Math.round(Math.random() * (386 - 1) + 1));
  // };

  return (
    <>
      <DropDownContainerWrapper>
        <DropDownH3>A Little More</DropDownH3>

        <DropdownContainer>
          <ImgParagraphDiv>
            <DropDownImg src={GCPic} alt="Me in the Grand Canyon" />
            <p>
              I'm from Salt Lake City, Utah. I love to be outside. Skiing,
              hiking, playing volleyball, basketball, golf, rock climbing, and
              most recently going on white water rafting trips with my
              girlfriend. I also love to play video games and board games with
              my family and friends.
            </p>
          </ImgParagraphDiv>

          <ImgParagraphDiv direction="row-reverse">
            <DropDownImg src={AuriPic} alt="My Cute Dog Auri" />
            <div>
              <h2>Fun Facts!</h2>

              <ul>
                <li>My favorite genre of books is fantasy.</li>
                <li>
                  I have a licence to practice massage therapy in the state of
                  Utah.
                </li>
                <li>My favorite childhood video game was Pokémon Puzzle.</li>
                <li>Favorite food is Sushi.</li>
                <li>Favorite book series is the Wheel of Time.</li>
                <li>
                  Grew up on games like Warcraft 3, Diablo 2, and of course
                  Pokemon!
                </li>
              </ul>
              {/*<PokemonButton*/}
              {/*  onClick={changeSetNumber}*/}
              {/*  style={{ cursor: "pointer", float: "right" }}*/}
              {/*  src={pokemon.sprites.front_default}*/}
              {/*  alt={pokemon.name}*/}
              {/*/>*/}
            </div>
          </ImgParagraphDiv>
        </DropdownContainer>
      </DropDownContainerWrapper>
    </>
  );
};
export default DropDownAboutMe;

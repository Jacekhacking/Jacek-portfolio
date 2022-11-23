import GCPic from "../../UI/Images/gc-rafting-picture.jpeg";
import AuriPic from "../../UI/Images/AuriPic_2.jpeg";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const DropDownAboutMe = () => {
  const DropDownContainerWrapper = styled.div`
    margin: 2em 0;
    background-color: hsl(var(--clr-blue-gray), 0.2);
    border: 5px solid hsl(var(--clr-dark-gray));
    color: hsl(var(--clr-mint-offwhite));

    @media (min-width: 725px) {
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
      font-size: clamp(var(--fs-400), 5vw, var(--fs-500));
      max-width: 1200px;
      text-align: center;
    }
  `;
  const DropDownImg = styled.img`
    display: block;
    width: 100%;
    height: 600px;
    object-fit: cover;
    border: 2px solid hsl(var(--clr-orange-soda));
    border-radius: 5px;

    @media (min-width: 900px) {
      width: 80%;
      height: auto;
    }
    @media (min-width: 1200px) {
      width: 600px;
      height: auto;
      margin: 1em;
    }
  `;

  const DropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100rem;
  `;
  const ImgParagraphDiv = styled.div`
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

  const PokemonButton = styled.img`
    border: 3px solid transparent;
    border-radius: 25% 10%;
    width: 180px;
    height: 180px;

    :hover {
      border: 3px solid hsl(var(--clr-sandy-brown));
    }
  `;

  const [pokemon, setPokemon] = useState(null);
  const [number, setNumber] = useState(59);

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

  return (
    <>
      <DropDownContainerWrapper>
        <h3
          className={`fs-700 ff-cursive text-light`}
          style={{
            borderBottom: "5px solid hsl(var(--clr-dark-gray))",
          }}
        >
          A Little more about me
        </h3>

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
              <p>
                <h2>Fun Facts!</h2>
                My favorite genre of books is fantasy{" "}
                <span className={"text-brown"}>|</span>I have a licence to
                practice massage therapy in the state of Utah
                <span className={"text-brown"}>|</span>
                My favorite childhood video game was Pokémon Puzzle
                <span className={"text-brown"}>|</span>
                Favorite food is Sushi <span className={"text-brown"}>|</span>
                Favorite book series is the Wheel of Time
                <span className={"text-brown"}>|</span>
                Grew up on games like Warcraft 3, Diablo 2, and of course
                Pokemon!
              </p>
              <PokemonButton
                onClick={changeSetNumber}
                style={{ cursor: "pointer", float: "right" }}
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
            </div>
          </ImgParagraphDiv>
        </DropdownContainer>
      </DropDownContainerWrapper>
    </>
  );
};
export default DropDownAboutMe;

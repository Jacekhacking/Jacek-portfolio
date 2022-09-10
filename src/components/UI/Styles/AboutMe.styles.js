import styled from "styled-components";

// -------------------------ABOUT ME COMPONENT----------------------
export const AboutMeBody = styled.div`
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutMeText = styled.p`
  text-align: center;
  margin: 2em;
  font-size: clamp(var(--fs-100), 5.5vw, var(--fs-500));
  padding-right: 5rem;
  padding-left: 5rem;
  max-width: 1200px;
`;

export const DropDownToggleButton = styled.button`
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

export const PokemonButton = styled.img`
  border: 4px solid transparent;
  border-radius: 25% 10%;
  max-width: 80px;
  height: auto;

  :hover {
    border: 3px solid hsl(var(--clr-sandy-brown));
  }
`;

import styled from "styled-components"


// -------------------------ABOUT ME COMPONENT----------------------
export const AboutMeBody = styled.div`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AboutMeText = styled.p`
  text-align: center;
  margin: 2em;
  font-size: clamp(var(--fs-100), 5.5vw, var(--fs-500));
  padding-right: 5rem;
  padding-left: 5rem;
  max-width: 1200px;
`

export const DropDownToggleButton = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  font-family: var(--ff-cursive);
  color: hsl(var(--clr-dark-gray));

  :hover {
    cursor: pointer;
    border-bottom: 2px solid hsl(var(--clr-sandy-brown))
  }
`

export const PokemonButton = styled.img`
  border: 4px solid transparent;
  border-radius: 25% 10%;
  max-width: 80px;
  height: auto;

  :hover {
    border: 3px solid hsl(var(--clr-sandy-brown));
  }
`


// -----------------------DROPDOWN ABOUT ME COMPONENT --------------------
export const DropDownContainer = styled.div`
  margin: 2em 0;
  background-color: hsl(var(--clr-blue-gray));
  border: 5px solid hsl(var(--clr-dark-gray));
  color: hsl(var(--clr-mint-offwhite));

  @media (min-width: 725px) {
    margin-left: 2em;
    margin-right: 2em;
  }
`


export const TopParagraphDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1vw;

  @media (min-width: 725px) {
    flex-direction: row;
  }
`


export const BottomParagraphDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 1vw;

  @media (min-width: 725px) {
    flex-direction: row-reverse;
  }

`
// export const TestingText = styled.p`
//     max-width: 1000px;
// `


export const DropDownPicture = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  border: 2px solid hsl(var(--clr-orange-soda));
  border-radius: 5px;

  @media (min-width: 725px) {
    width: 400px;
    height: auto;
    margin-right: 1em;
  }

  @media (min-width: 1500px) {
    width: 400px;
    height: auto;
    margin-right: 1em;
  }

  @media (min-width: 1700px) {
    width: 400px;
    height: auto;
    max-height: 600px;
    margin-right: 1em;
  }
`

export const DropDownText = styled.p`
  font-size: clamp(var(--fs-300), 3.5vw, 2rem);
`
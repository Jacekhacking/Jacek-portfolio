import styled from "styled-components"


export const DropDownContainer = styled.div`

  margin: 2em 0;
  background-color: hsl(var(--clr-blue-gray));
  border: 5px solid hsl(var(--clr-dark-gray));
  color: hsl(var(--clr-mint-offwhite));
  
  @media(min-width: 725px) {
    margin-left: 2em;
    margin-right: 2em;
  }
`

export const DropDownParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1vw;
  font-size: clamp(var(--fs-200), 2.5vw, var(--fs-500));
`


export const DropDownPicture = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  border: 2px solid hsl(var(--clr-orange-soda));
  border-radius: 5px;
  
  @media(min-width: 725px){
    width: 400px;
    height: auto;
    margin-right: 1em;
  }
  
  @media(min-width: 1500px){
    width: 400px;
    height: auto;
    margin-right: 1em;
  }
  
  @media(min-width: 1700px) {
    width: 400px;
    height: auto;
    max-height: 600px;
    margin-right: 1em;

  }
  
  
  
`
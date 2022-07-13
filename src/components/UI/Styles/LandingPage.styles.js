import styled from "styled-components"

export const LandingPageContainer = styled.div`
  text-transform: uppercase;
  color: hsl(var(--clr-dark-gray));
  font-size: var(--fs-800);
  font-family: var(--ff-cursive);
  line-height: 1;
  
  
  @media(min-width: 600px){
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
  }
  
  @media(min-width: 1000px){
    padding: 3rem 6rem;
  }
  
  
`

export const SelfieImg = styled.img`
  margin-top: 1rem;
  margin-right: 1rem;
  border: 4px solid hsl(var(--clr-dark-gray));
  object-fit: cover;
  
  
`

export const AboutText = styled.p`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  
  
  font-size: clamp(var(--fs-500), 8.5vw, var(--fs-900));
`
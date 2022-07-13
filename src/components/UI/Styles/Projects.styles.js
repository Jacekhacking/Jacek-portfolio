import styled from "styled-components"


export const SectionHeader = styled.h2`
  font-size: clamp(var(--fs-500), 8.5vw, var(--fs-900));
  text-align: center;

  color: hsl(var(--clr-dark-gray));
  font-family: var(--ff-cursive);
`

export const ProjectDiv = styled.div`
  border: 3px solid hsl(var(--clr-dark-gray));
  margin: .5em;
  width: 400px;
  height: 470px;
  background-color: hsl(var(--clr-blue-gray));

  @media(max-width: 430px){
    width: 300px;
    height: 415px;
  }

  @media(max-width: 330px){
    width: 230px;
    height: 362px;
  }
`

export const ProjectHeader= styled.h2`
  font-size: var(--fs-500);
  text-align: center;
  border-bottom: 2px solid hsl(var(--clr-sandy-brown));
  color: hsl(var(--clr-mint-offwhite));
  font-family: var(--ff-cursive);
  @media(max-width: 330px){
    font-size: var(--fs-400);
  }
`

export const ProjectParagraph = styled.p`
  align-items: center;
  text-align: center;
  font-size: var(--fs-300);
  padding-right: 1em;
  padding-left: 1em;
  height: 177px;
  color:hsl(var(--clr-mint-offwhite));

  @media(max-width: 430px){
    font-size: var(--fs-200);
  }

  @media(max-width: 330px){
    font-size: var(--fs-200);
  }
`

export const ProjectImage = styled.img`
  margin-bottom: auto;
  width: 400px;
  height: auto;
  object-fit: cover;
  @media(max-width: 430px){
    width: 300px;
  }

  @media(max-width: 330px){
    width: 250px;
  }
`

export const ProjectATag = styled.a`
  padding:0;
  margin:0;
`

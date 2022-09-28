import { projectData } from "../data";
import Skills from "../UI/Shared/Skills";

import {
  FlexWrapContainer,
  FlexContainer,
  Header2,
} from "../UI/Styles/Global.styles";
import styled from "styled-components";

const Projects = () => {
  const ProjectDiv = styled.div`
    border: 3px solid hsl(var(--clr-dark-gray));
    margin: 0.5em;
    width: 50rem;
    height: 30rem;
    background-color: hsl(var(--clr-blue-gray));
    background-image: url(${(props) => props.inputImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    a {
      padding: 0;
      margin: 0;
    }

    @media (max-width: 430px) {
      width: 300px;
      height: 415px;
    }

    @media (max-width: 330px) {
      width: 230px;
      height: 362px;
    }

    &:hover {
      div {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.2s linear, visibility 0.2s linear;
      }
    }
  `;

  const ProjectInfoDiv = styled.div`
    opacity: 0;
    visibility: hidden;
    height: 100%;
    width: 100%;

    text-align: center;
    background-color: hsl(var(--clr-blue-gray), 0.95);
    color: hsl(var(--clr-mint-offwhite));
    transition: opacity 0.1s linear, visibility 0.1s linear;
    h2 {
      font-size: var(--fs-500);
      text-align: center;
      border-bottom: 2px solid hsl(var(--clr-sandy-brown));
      color: hsl(var(--clr-mint-offwhite));
      font-family: var(--ff-cursive);
      @media (max-width: 330px) {
        font-size: var(--fs-400);
      }
    }
    p {
      align-items: center;
      text-align: center;
      font-size: var(--fs-500);
      padding: 1rem;
      padding-bottom: 4rem;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    a {
      font-family: var(--ff-cursive);
      background-color: transparent;
      font-weight: 900;
      padding: 1rem;
      margin: 0.5rem;
      border: 4px solid hsl(var(--clr-mint-offwhite));
      box-shadow: none;
      border-radius: 0;

      &:hover {
        background-color: hsl(var(--clr-sandy-brown));
        border: 4px solid hsl(var(--clr-sandy-brown));
        color: white;
        box-shadow: 0 0 10px hsl(var(--clr-sandy-brown));
      }
    }
  `;
  return (
    <>
      <Header2 id="projects">Projects</Header2>
      <FlexWrapContainer>
        {projectData.map(({ Image, Name, Description, GitHub, Link }) => (
          <ProjectDiv inputImg={Image}>
            <ProjectInfoDiv>
              <h2>{Name}</h2>
              <p>{Description} </p>
              <FlexContainer>
                <a href={GitHub} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={Link} target="_blank" rel="noopener noreferrer">
                  Live Site
                </a>
              </FlexContainer>
            </ProjectInfoDiv>
          </ProjectDiv>
        ))}
      </FlexWrapContainer>
      <Skills />
    </>
  );
};

export default Projects;

import { projectData } from "../data";
import Skills from "../UI/Shared/Skills";

import {
  FlexWrapContainer,
  FlexContainer,
  OutLineStyledHeader,
} from "../UI/Styles/Global.styles";
import styled from "styled-components";

const Projects = () => {
  const ProjectDiv = styled.div`
    border: 2px solid hsl(var(--clr-dark-gray));
    margin: 0.5em;
    width: 500px;
    height: 500px;
    background-color: hsl(var(--clr-blue-gray));
    background-image: url(${(props) => props.inputImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;

    a {
      padding: 0;
      margin: 0;
    }

    @media (max-width: 600px) {
      background-image: url(${(props) => props.mobileImage});
      width: 100%;
      height: 30rem;
    }

    &:hover {
      cursor: pointer;
      border: 2px solid hsl(var(--clr-4-hsl));
      div {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.2s linear, visibility 0.2s linear;
      }
    }
  `;

  const ProjectInfoDiv = styled.div`
    height: 500px;
    width: 500px;

    text-align: center;
    background-color: hsl(var(--clr-dark-gray), 0.95);
    color: hsl(var(--clr-mint-offwhite));
    transition: opacity 0.1s linear, visibility 0.1s linear;

    h2 {
      font-size: var(--fs-500);
      text-align: center;
      border-bottom: 2px solid var(--clr-4);
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
    @media (max-width: 600px) {
      p {
        font-size: var(--fs-300);
      }
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
        background-color: var(--clr-4);
        border: 4px solid var(--clr-4);
        color: hsl(var(--clr-dark-gray));
        box-shadow: 0 0 10px var(--clr-4);
      }
    }
  `;

  const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;
  return (
    <>
      <OutLineStyledHeader styles={{ paddingTop: "5rem" }}>
        Proj
      </OutLineStyledHeader>
      {/* <Skills /> */}

      <ProjectWrapper>
        {projectData.map(
          ({ Image, Name, Description, GitHub, Link, MobileImage }) => (
            <FlexContainer key={Name}>
              <ProjectDiv
                inputImg={Image}
                mobileImage={MobileImage}
              ></ProjectDiv>

              <div>
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
              </div>
            </FlexContainer>
          )
        )}
      </ProjectWrapper>
    </>
  );
};

export default Projects;

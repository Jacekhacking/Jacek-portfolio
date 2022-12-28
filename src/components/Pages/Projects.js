import { projectData } from "../data";

import { OutLineStyledHeader } from "../UI/Styles/Global.styles";
import styled from "styled-components";

const Projects = () => {
  const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 2em;
  `;
  const ProjectContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
  `;
  const ProjectDiv = styled.div`
    /* border: 2px solid hsl(var(--clr-dark-gray)); */
    margin: 0.5em;
    width: 500px;
    height: 500px;
    /* background-color: hsl(var(--clr-blue-gray)); */
    background-image: url(${(props) => props.inputImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 600px) {
      background-image: url(${(props) => props.mobileImage});
      width: 100%;
      height: 30rem;
    }
  `;

  const ProjectInfoDiv = styled.div`
    height: 500px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;

    /* background-color: hsl(var(--clr-dark-gray), 0.95); */
    color: var(--clr-5);

    h2 {
      font-size: var(--fs-600);
      text-align: center;
      /* border-bottom: 2px solid var(--clr-4); */
      color: var(--clr-5);
      font-family: var(--ff-cursive);
      @media (max-width: 330px) {
        font-size: var(--fs-400);
      }
    }
    p {
      text-align: center;
      font-size: var(--fs-500);
    }
    @media (max-width: 600px) {
      p {
        font-size: var(--fs-300);
      }
    }

    a {
      font-family: var(--ff-cursive);
      background-color: transparent;
      font-weight: 900;
      padding: 0 20px;
      margin: 1rem;
      border: 4px solid var(--clr-5);
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
  return (
    <>
      <OutLineStyledHeader>Projects</OutLineStyledHeader>
      <ProjectWrapper>
        {projectData.map(
          ({ Image, Name, Description, GitHub, Link, MobileImage }) => (
            <ProjectContainer key={Name}>
              <ProjectInfoDiv>
                <div>
                  <h2>{Name}</h2>
                  <p>{Description} </p>
                </div>

                <div>
                  <a href={GitHub} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={Link} target="_blank" rel="noopener noreferrer">
                    Live Site
                  </a>
                </div>
              </ProjectInfoDiv>

              <ProjectDiv
                inputImg={Image}
                mobileImage={MobileImage}
              ></ProjectDiv>
            </ProjectContainer>
          )
        )}
      </ProjectWrapper>
    </>
  );
};

export default Projects;

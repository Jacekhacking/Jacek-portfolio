import { projectData } from "../data.js";

import { OutLineStyledHeader } from "../UI/Styles/Global.styles";
import styled from "styled-components";

const Projects = () => {
  const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 2em;
    color: var(--clr-5);
    text-align: center;
  `;
  const ProjectContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 100px;

    @media (max-width: 900px) {
      flex-direction: column;
      padding-top: 0;
    }
  `;
  const ProjectDiv = styled.div`
    margin: 0.5em;
    width: 640px;
    height: 388px;
    background-image: url(${(props) => props.inputImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 600px) {
      background-color: white;
      background-image: url(${(props) => props.mobileImage});
      width: 100%;
      height: 30rem;
    }
  `;

  const ProjectInfoDiv = styled.div`
    height: 30rem;
    width: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    color: var(--clr-5);
    font-size: clamp(var(--fs-400), 2vw, var(--fs-500));

    h2 {
      font-size: var(--fs-600);
      text-align: center;
      color: var(--clr-5);
      font-family: var(--ff-cursive);
      @media (max-width: 400px) {
      }
    }
    p {
      text-align: center;
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
        color: var(--clr-6);
        box-shadow: 0 0 10px var(--clr-4);
      }
    }

    @media (max-width: 900px) {
      justify-content: center;
      padding: 1rem 1rem;
      height: 40rem;
      width: auto;
      p {
        padding: 2rem;
        margin-bottom: 40px;
      }
      @media (max-width: 600px) {
        p {
          /* font-size: var(--fs-400); */
        }
      }
    }
  `;
  return (
    <>
      <OutLineStyledHeader>Projects</OutLineStyledHeader>

      {projectData && (
        <ProjectWrapper>
          {projectData.map(
            ({ Image, MobileImage, Name, Description, GitHub, Link }) => (
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
      )}
    </>
  );
};

export default Projects;

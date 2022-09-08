import { projectData } from "../data";
import { FlexWrapContainer } from "../UI/Styles/Global.styles";
import {
  ProjectHeader,
  ProjectImage,
  ProjectParagraph,
  ProjectDiv,
} from "../UI/Styles/Projects.styles";
import { Header2 } from "../UI/Styles/Global.styles";
import Skills from "../UI/Shared/Skills";

const Projects = () => {
  return (
    <>
      <Header2 id="projects">Projects</Header2>
      <FlexWrapContainer>
        {projectData.map((project) => (
          <ProjectDiv>
            <ProjectHeader>{project.Name}</ProjectHeader>
            <ProjectParagraph>{project.Description} </ProjectParagraph>
            <a href={project.Link} target="_blank" rel="noreferrer">
              <ProjectImage src={project.Image} alt="website screenshot" />
            </a>
          </ProjectDiv>
        ))}
      </FlexWrapContainer>
      <Skills />
    </>
  );
};

export default Projects;

import {projectData} from "../data";
import {FlexWrapContainer} from "../UI/Styles/Global.styles";
import {
    ProjectHeader,
    ProjectImage,
    ProjectParagraph,
    ProjectDiv,
    ProjectATag,
    SectionHeader
} from "../UI/Styles/Projects.styles"

const Projects = () => {


    return (
        <>
            <SectionHeader>Projects</SectionHeader>

            <FlexWrapContainer>
                {projectData.map(project => (
                    <ProjectDiv>
                        <ProjectHeader>{project.Name}</ProjectHeader>
                        <ProjectParagraph>{project.Description} </ProjectParagraph>
                        <ProjectATag
                            href={project.Link}
                            target="_blank"
                            rel="noreferrer">
                            <ProjectImage
                                src={project.Image}
                                alt="website screenshot"
                            />
                        </ProjectATag>
                    </ProjectDiv>
                ))}
            </FlexWrapContainer>


        </>
    )
}

export default Projects
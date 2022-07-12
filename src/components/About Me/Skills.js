import html from "../UI/Images/html_logo.png"
import css from "../UI/Images/css_logo.png"
import javascript from "../UI/Images/javascript_logo.png"
import reactLogo from "../UI/Images/react_logo.png"
import typeScript from "../UI/Images/typescript_logo.png"
import UofUPng from "../UI/Images/coding-bootcamp-full-stack-developer-certificate.1.png"
import {StyledSkillsDiv, StyledSkillsImage} from "../UI/Styles/Skills.styles"


const Skills = () => {


    return (
        <>
            <h2 id="skills" className={`header-style ff-cursive text-dark`} style={{textAlign: 'center'}}>Skills</h2>

                <StyledSkillsDiv>
                    <StyledSkillsImage src={html} alt="html logo"/>
                    <StyledSkillsImage src={css} alt="html logo"/>
                    <StyledSkillsImage src={javascript} alt="html logo"/>
                    <StyledSkillsImage src={reactLogo} alt="html logo"/>
                    <StyledSkillsImage src={typeScript} alt="html logo"/>


                    <StyledSkillsImage src={UofUPng} alt="html logo"/>
                </StyledSkillsDiv>

        </>
    )
}
export default Skills;
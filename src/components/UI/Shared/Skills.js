import html from "../Images/html_logo.png";
import css from "../Images/css_logo.png";
import javascript from "../Images/javascript_logo.png";
import reactLogo from "../Images/react_logo.png";
import typeScript from "../Images/typescript_logo.png";
import UofUPng from "../Images/coding-bootcamp-full-stack-developer-certificate.1.png";
import styled from "styled-components";

const Skills = () => {
  const LogoContainer = styled.div`
    padding-top: 1em;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 2em;
  `;
  const LogoImg = styled.img`
    width: 80px;
    height: auto;
    margin: 0.3em;
    @media (max-width: 402px) {
      width: 50px;
    }
  `;

  return (
    <>
      {/* <h2
        id="skills"
        className={`header-style ff-cursive text-dark`}
        style={{ textAlign: "center", paddingTop: "2rem" }}
      >
        Skills
      </h2> */}
      <LogoContainer>
        <LogoImg src={html} alt="html logo" />
        <LogoImg src={css} alt="css logo" />
        <LogoImg src={javascript} alt="javascript logo" />
        <LogoImg src={reactLogo} alt="react logo" />
        <LogoImg src={typeScript} alt="typescript logo" />
        <LogoImg src={UofUPng} alt="University of Utah Bootcamp badge" />
      </LogoContainer>
    </>
  );
};
export default Skills;

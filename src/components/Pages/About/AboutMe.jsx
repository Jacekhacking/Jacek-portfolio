import { useState } from "react";

import DropDownAboutMe from "./DropDownAboutMe";

import styled from "styled-components";
import { OutLineStyledHeader } from "../../UI/Styles/Global.styles";

const AboutMe = () => {
  const AboutMeBody = styled.div`
    color: var(--clr-5);
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const AboutMeText = styled.p`
    text-align: center;
    margin: 1em;
    font-size: clamp(var(--fs-400), 2vw, var(--fs-500));
    max-width: 52em;
  `;

  const DropDownToggleButton = styled.button`
    background-color: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    color: hsl(var(--clr-mint-offwhite));
    font-style: italic;
    :hover {
      cursor: pointer;
      border-bottom: 2px solid hsl(var(--clr-sandy-brown));
    }
  `;

  const [isDropdown, setIsDropdown] = useState(false);

  const toggleDropdown = () => setIsDropdown(!isDropdown);

  return (
    <>
      <AboutMeBody>
        <OutLineStyledHeader>About Me</OutLineStyledHeader>

        <AboutMeText>
          I'm a software developer based in Utah, finishing up my Computer
          Science degree — one semester left. I started coding in 2019, took it
          seriously during the pandemic, and completed the University of Utah's
          fullstack bootcamp in 2021. Since then I've shipped websites for real
          businesses, contributed to enterprise Java APIs during internships, and
          started pushing into competitive programming and C++.
          <br />
          <br />
          My stack today is React on the frontend and Java/Spring Boot on the
          backend, with C++ on the side — because I want to understand what's
          actually happening under the hood, not just what the framework hands
          me. I'm actively transitioning toward backend engineering and looking
          for roles where I can go deeper.
          <strong>
            <DropDownToggleButton onClick={toggleDropdown}>
              {isDropdown === false ? "More ..." : "Less..."}
            </DropDownToggleButton>
          </strong>
        </AboutMeText>

        <div>{isDropdown && <DropDownAboutMe />}</div>
      </AboutMeBody>
    </>
  );
};

export default AboutMe;

import { useState } from "react";

import DropDownAboutMe from "./DropDownAboutMe";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import styled from "styled-components";
import { OutLineStyledHeader } from "../../UI/Styles/Global.styles";

const AboutMe = () => {
  //CSS and styled components
  const AboutMeBody = styled.div`
    color: hsl(var(--clr-mint-offwhite));
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const AboutMeText = styled.p`
    text-align: center;
    margin: 1em;
    font-size: clamp(var(--fs-400), 2vw, var(--fs-500));
    width: 80%;
  `;

  const DropDownToggleButton = styled.button`
    background-color: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    font-family: var(--ff-cursive);
    color: hsl(var(--clr-mint-offwhite));

    :hover {
      cursor: pointer;
      border-bottom: 2px solid hsl(var(--clr-sandy-brown));
    }
  `;

  const [listRef] = useAutoAnimate();

  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => setDropdown(!dropdown);

  return (
    <>
      <AboutMeBody>
        <OutLineStyledHeader>About Me</OutLineStyledHeader>

        <AboutMeText>
          I started teaching myself how to write code at the beginning of 2019.
          I started taking it more seriously late in the summer of 2020 during
          the covid pandemic. In the spring of 2021 I signed up for the
          University of Utah's Fullstack Coding Boot-camp. I finished their
          program in October of 2021. I then began doing freelance work for
          people and companies in my immediate community. I'm currently working
          as a Teaching Assistant through 2U and as an intern for Aceiss
          Security.
        </AboutMeText>
        <DropDownToggleButton onClick={toggleDropdown}>
          {dropdown === false ? "More About Me..." : "Show Less..."}
        </DropDownToggleButton>
        <div ref={listRef}>{dropdown && <DropDownAboutMe />}</div>
      </AboutMeBody>
    </>
  );
};

export default AboutMe;

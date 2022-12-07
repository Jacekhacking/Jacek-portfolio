import SelfieImg from "../UI/Images/IMG_9739.png";
import styled from "styled-components";
import Projects from "./Projects";
import AboutMe from "./About/AboutMe";
const LandingPage = () => {
  const LandingPageWrapper = styled.div`
    display: flex;
    padding: 0rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    /* padding: 0 2rem; */
    color: hsl(var(--clr-dark-gray));
    background-color: #b5b5b5;
    div {
      display: flex;
    }
    p {
      color: black;
    }

    img {
      height: 35rem;
      width: auto;

      /* border: 4px solid hsl(var(--clr-dark-gray)); */
      /* box-shadow: 0 0 20px var(--clr-4); */
    }
    @media (max-width: 1000px) {
      align-items: space-between;
      img {
        width: auto;
        height: 30rem;
      }
    }

    @media (max-width: 550px) {
      img {
        width: 100%;
        height: auto;
      }
    }
  `;

  const AboutText = styled.h2`
    /* max-width: 800px; */
    padding-right: 2rem;

    -webkit-text-stroke: 2px black;
    -webkit-text-fill-color: transparent;
    /* writing-mode: vertical-lr; */
    /* transform: rotate(180deg); */
    font-size: 9rem;
    line-height: 1.2;
    font-family: var(--ff-cursive);

    /* @media (max-width: 1300px) {
      transform: rotate(90deg);
    } */
  `;

  return (
    <>
      <section>
        <LandingPageWrapper>
          <img src={SelfieImg} alt="Me!" />

          <AboutText>Hi, I'm Jacek!</AboutText>

          <p>I'm a Front-End Web Developer from Salt Lake City Utah!</p>
        </LandingPageWrapper>
      </section>

      <section>
        <AboutMe />
      </section>

      <section>
        <Projects />
      </section>
    </>
  );
};
export default LandingPage;

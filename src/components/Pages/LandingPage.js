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
      text-align: center;
      margin: 0 4rem;
    }

    img {
      height: 35rem;
      width: auto;

      /* border: 4px solid hsl(var(--clr-dark-gray)); */
      /* box-shadow: 0 0 20px var(--clr-4); */
    }

    @media (max-width: 550px) {
      img {
        margin-top: 5.5rem;
        width: auto;
        height: 20rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
  `;

  const AboutText = styled.h2`
    /* max-width: 800px; */
    padding-right: 2rem;
    text-align: center;
    -webkit-text-stroke: 3px black;
    -webkit-text-fill-color: transparent;
    /* writing-mode: vertical-lr; */
    /* transform: rotate(180deg); */
    font-size: 9rem;
    line-height: 1.2;
    font-family: var(--ff-cursive);
    @media (max-width: 800px) {
      font-size: 5rem;
    }

    @media (max-width: 550px) {
      font-size: 4rem;
    }
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

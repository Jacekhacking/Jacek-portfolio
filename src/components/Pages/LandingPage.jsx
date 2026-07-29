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
    padding-right: 2rem;
    text-align: center;
    -webkit-text-stroke: 3px black;
    -webkit-text-fill-color: transparent;
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

          <p>A Web Developer from Salt Lake City, Utah!</p>
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

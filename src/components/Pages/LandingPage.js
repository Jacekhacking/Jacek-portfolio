import SelfieImg from "../UI/Images/Selfie_large.jpeg";
import styled from "styled-components";
const LandingPage = () => {
  const LandingPageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row-reverse;
    min-height: 95vh;
    padding: 0 2rem;
    color: hsl(var(--clr-dark-gray));
    p {
    }

    img {
      height: 50rem;
      width: auto;
      border: 4px solid hsl(var(--clr-dark-gray));
    }
    @media (max-width: 1000px) {
      padding: 0rem;
      flex-direction: column;
      img {
        width: auto;
        height: 40rem;
      }
    }

    @media (max-width: 550px) {
      img {
        width: 100%;
        height: auto;
      }
    }
  `;

  const AboutText = styled.div`
    /* max-width: 800px; */
    padding-right: 2rem;
    p {
      -webkit-text-stroke: 0.75px var(--clr-3);
      -webkit-text-fill-color: transparent;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      font-size: 9rem;
      line-height: 1.2;
      font-family: var(--ff-cursive);
    }

    @media (max-width: 1300px) {
      p {
        /* font-size: 5rem; */
      }
    }
    @media (max-width: 1000px) {
      p {
        /* font-size: 4rem; */
        text-align: center;
      }
    }
  `;

  return (
    <>
      <LandingPageWrapper>
        <img src={SelfieImg} alt="Me Camping" />

        <AboutText>
          <p>Hi, I'm Jacek!</p>
          {/* <p> My name is Jacek Hacking. I am a Front-End Web Developer</p> */}
        </AboutText>
      </LandingPageWrapper>
    </>
  );
};
export default LandingPage;

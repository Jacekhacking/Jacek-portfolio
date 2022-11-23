import SelfieImg from "../UI/Images/gc-rafting-picture.jpeg";
import styled from "styled-components";
const LandingPage = () => {
  const LandingPageWrapper = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 95vh;
    /* padding: 0 2rem; */
    color: hsl(var(--clr-dark-gray));
    div {
      display: flex;
    }
    p {
      color: white;
    }

    img {
      height: 50rem;
      width: auto;
      border-radius: 10px;
      /* border: 4px solid hsl(var(--clr-dark-gray)); */
      box-shadow: 0 0 20px var(--clr-4);
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
    h2 {
      -webkit-text-stroke: 0.75px var(--clr-3);
      -webkit-text-fill-color: transparent;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      font-size: 9rem;
      line-height: 1.2;
      font-family: var(--ff-cursive);
    }

    @media (max-width: 1300px) {
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
        <div>
          <AboutText>
            <h2>Hi, I'm Jacek!</h2>
            {/* <p> My name is Jacek Hacking. I am a Front-End Web Developer</p> */}
          </AboutText>
          <img src={SelfieImg} alt="Me Camping" />
        </div>

        <p>I'm a Front-End Web Developer from salt lake city Utah</p>
      </LandingPageWrapper>
    </>
  );
};
export default LandingPage;

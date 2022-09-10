import SelfieImg from "../UI/Images/Selfie_large.jpeg";
import styled from "styled-components";
const LandingPage = () => {
  const LandingPageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    min-height: 95vh;
    padding: 0 2rem;
    img {
      height: 50rem;
      width: auto;
      border: 4px solid hsl(var(--clr-dark-gray));
    }
  `;

  const AboutText = styled.div`
    max-width: 800px;
    padding-right: 2rem;
    p {
      line-height: 1.2;
      font-family: var(--ff-cursive);
      font-size: 7rem;
    }
  `;

  return (
    <>
      <LandingPageWrapper>
        <img src={SelfieImg} alt="Me Camping" />

        <AboutText>
          <p>Hello!</p>
          <p> My name is Jacek Hacking. I am a Front-End Web Developer</p>
        </AboutText>
      </LandingPageWrapper>
    </>
  );
};
export default LandingPage;

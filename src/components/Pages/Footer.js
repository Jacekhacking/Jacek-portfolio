import twitter from "../UI/Images/social logos/twitter.png";
import github from "../UI/Images/social logos/GitHub-Mark-64px.png";
import linkedin from "../UI/Images/social logos/linkedin.png";

import styled from "styled-components";

const Footer = () => {
  const FooterContainer = styled.div`
    width: 100%;
    height: 80px;
    padding-top: 1rem;
    display: flex;
    justify-content: space-around;
    background-color: hsl(var(--clr-dark-gray));

    @media (max-width: 700px) {
      .footer-container {
        flex-direction: column;
        align-items: center;
        height: 100px;
      }
    }

    p {
      padding: 0.2rem;
      font-size: clamp(var(--fs-200), 1.5vh, var(--fs-400));
      display: flex;
      color: hsl(var(--clr-mint-offwhite));

      a {
        color: inherit;
        font-size: inherit;
      }

      @media (max-width: 300px) {
        font-size: 1vh;
      }
    }

    div {
      display: flex;
      div {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          background-color: black;
          box-shadow: 0 0 10px hsl(var(--clr-sandy-brown));
        }
      }
    }
  `;

  const SocialMediaImg = styled.img`
    height: 40px;
    width: auto;
    @media (max-width: 700px) {
      height: 30px;
    }

    @media (max-width: 300px) {
      height: 20px;
    }
  `;

  return (
    <FooterContainer>
      <p>
        Email:
        <a href="mailto:Jacekhacking@gmail.com"> JacekHacking@gmail.com</a>
      </p>

      <div>
        <div>
          <a
            href="https://twitter.com/JH_WebDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialMediaImg src={twitter} alt="twitter" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Jacekhacking"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialMediaImg src={github} alt="github" />
          </a>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/jacek-hacking-708007210"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialMediaImg src={linkedin} alt="linked in " />
          </a>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

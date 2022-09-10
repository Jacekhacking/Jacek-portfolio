import twitter from "../UI/Images/SocialLogos/twitter.png";
import github from "../UI/Images/SocialLogos/GitHub-Mark-64px.png";
import linkedin from "../UI/Images/SocialLogos/linkedin.png";
import githubOrange from "../UI/Images/SocialLogos/githubOrange.png";

import styled from "styled-components";

const Footer = () => {
  const FooterContainer = styled.div`
    width: 100%;
    height: 80px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: hsl(var(--clr-dark-gray));

    @media (max-width: 700px) {
      .footer-container {
        flex-direction: column;
        align-items: center;
        height: 100px;
      }
    }

    p {
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
      justify-content: center;
      align-items: center;
      div {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          background-color: hsl(var(--clr-sandy-brown));
          box-shadow: 0 0 10px hsl(var(--clr-sandy-brown));
        }
      }
    }
  `;

  const SocialMediaImg = styled.img`
    height: auto;
    width: 40px;
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

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
          href="https://twitter.com/JH_WebDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <SocialMediaImg src={twitter} alt="twitter" />
          </div>
        </a>
        <a
          href="https://github.com/Jacekhacking"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <SocialMediaImg src={github} alt="github" />
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/jacek-hacking-708007210"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <SocialMediaImg src={linkedin} alt="linked in " />
          </div>
        </a>
      </div>
    </FooterContainer>
  );
};

export default Footer;

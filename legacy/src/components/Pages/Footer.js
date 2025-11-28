import twitter from "../UI/Images/SocialLogos/twitter.png";
import github from "../UI/Images/SocialLogos/GitHub-Mark-64px.png";
import linkedin from "../UI/Images/SocialLogos/linkedin.png";
import Pdf from "../UI/Shared/JacekWebDevPortfolio.PDF";

import styled from "styled-components";

const Footer = () => {
  const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--clr-5);
    padding: 1em 20px;

    p {
      font-size: clamp(var(--fs-200), 1.5vh, var(--fs-400));
      display: flex;
      color: var(--clr-6);
      border-bottom: 1px solid transparent;

      a {
        color: inherit;
        font-size: inherit;
      }

      &:hover {
        border-bottom: 1px solid var(--clr-6);
      }

      @media (max-width: 300px) {
        font-size: 1vh;
        padding: 0;
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
          background-color: var(--clr-4);
          box-shadow: 0 0 10px var(--clr-4);
        }
      }
    }
    @media (max-width: 650px) {
      flex-direction: column;
    }
  `;

  const SocialMediaImg = styled.img`
    height: auto;
    width: 40px;
  `;

  return (
    <FooterContainer>
      <div style={{ flexDirection: "column" }}>
        <p>
          Email:
          <a href="mailto:Jacekhacking@gmail.com"> JacekHacking@gmail.com</a>
        </p>
        <p>
          <a href={Pdf} target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </p>
      </div>

      <>
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
      </>
    </FooterContainer>
  );
};

export default Footer;

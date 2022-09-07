import twitter from "../UI/Images/social logos/twitter.png";
import github from "../UI/Images/social logos/GitHub-Mark-64px.png";
import linkedin from "../UI/Images/social logos/linkedin.png";
import { FlexContainer } from "../UI/Styles/Global.styles";
import {
  FooterContainer,
  SocialMediaImg,
  FooterText,
} from "../UI/Styles/Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Email:
        <a href="mailto:Jacekhacking@gmail.com"> JacekHacking@gmail.com</a>
      </FooterText>

      <FlexContainer>
        <a
          href="https://twitter.com/JH_WebDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialMediaImg src={twitter} alt="twitter" />
        </a>
        <a
          href="https://github.com/Jacekhacking"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialMediaImg src={github} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/jacek-hacking-708007210"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialMediaImg src={linkedin} alt="linked in " />
        </a>
      </FlexContainer>
    </FooterContainer>
  );
};

export default Footer;

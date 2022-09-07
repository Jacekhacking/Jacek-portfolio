import styled from "styled-components";

export const FooterContainer = styled.div`
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
`;

export const FooterText = styled.p`
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
`;

export const SocialMediaImg = styled.img`
  height: 40px;
  width: auto;
  @media (max-width: 700px) {
    height: 30px;
  }

  @media (max-width: 300px) {
    height: 20px;
  }
`;

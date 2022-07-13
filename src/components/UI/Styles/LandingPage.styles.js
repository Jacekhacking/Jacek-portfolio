import styled from "styled-components"


export const SelfieImg = styled.img`
  
  margin-top: 1rem;
  margin-right: 1rem;
  border: 4px solid hsl(var(--clr-dark-gray));

  @media (min-width: 530px) {
      float: right;
      width: 50%;
      height: auto;
      object-fit: cover;
      max-height: 1131px;
    }
`

export const AboutText = styled.p`
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  justify-content: center;
  font-size: clamp(var(--fs-500), 8.5vw, var(--fs-900));
`
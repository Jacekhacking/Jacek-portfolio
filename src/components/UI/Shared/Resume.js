import Pdf from "../Shared/JacekWebDevPortfolio.PDF";
import styled from "styled-components";

const Resume = () => {
  const ResumeContainer = styled.div`
    display: flex;
    background-color: hsl(var(--clr-blue-gray));
    justify-content: center;
    align-items: center;
  `;

  const ResumeLinkParagraph = styled.p`
    display: flex;

    a {
      color: hsl(var(--clr-mint-offwhite));
      font-size: var(--fs-400);
    }

    a:hover {
      color: hsl(var(--clr-sandy-brown));
    }

    @media (max-width: 300px) {
      a {
        font-size: var(--fs-200);
      }
    }
  `;
  return (
    <ResumeContainer>
      <ResumeLinkParagraph id={"resume"}>
        <a href={Pdf} target="_blank" rel="noreferrer" style={{}}>
          Download resume here!
        </a>
      </ResumeLinkParagraph>
    </ResumeContainer>
  );
};
export default Resume;

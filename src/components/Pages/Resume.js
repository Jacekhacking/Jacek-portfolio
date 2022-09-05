import React from "react";
import Pdf from "../UI/Shared/JacekPortfolio.PDF";
import {
  ResumeContainer,
  ResumeLinkParagraph,
} from "../UI/Styles/Resume.styles";

const Resume = () => {
  return (
    <ResumeContainer>
      <ResumeLinkParagraph id={"resume"}>
        <a href={Pdf} target="_blank" rel="noreferrer" style={{}}>
          {" "}
          Download resume here!
        </a>
      </ResumeLinkParagraph>
    </ResumeContainer>
  );
};
export default Resume;

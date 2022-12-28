import resumePdf from "../../UI/Shared/JacekPortfolio.PDF";
import resumeSS from "../../UI/Images/Resume_SS.png";
import styled from "styled-components";

const Resume = () => {
  const ResumeWrap = styled.div`
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
    img {
      width: auto;
      height: auto;
    }
  `;
  return (
    <>
      <ResumeWrap>
        <img src={resumeSS} alt="" />
      </ResumeWrap>
    </>
  );
};

export default Resume;

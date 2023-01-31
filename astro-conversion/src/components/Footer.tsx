import twitter from "../images/SocialLogos/twitter.png";
import github from "../images/SocialLogos/GitHub-Mark-64px.png";
import linkedin from "../images/SocialLogos/linkedin.png";
// import Pdf from "../UI/Shared/JacekWebDevPortfolio.PDF";j

const Footer = () => {
  const logoArray = [
    { src: twitter, name: "twitter", link: "https://twitter.com/JH_WebDev" },
    { src: github, name: "github", link: "https://github.com/Jacekhacking" },
    {
      src: linkedin,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/jacek-hacking-708007210",
    },
  ];
  // const FooterContainer = styled.div`

  //   width: 100%;
  //     display: flex;
  //     justify-content: space-between;
  //     align-items: center;

  //     background-color: var(--clr-5);
  //     padding: 1em 20px;
  //images
  // height: auto;
  //     width: 40px;

  return (
    <footer className="  flex w-full justify-between items-center  h-20 py-5 px-5 flex-col ">
      <p className="text-xl">
        Email:
        <a href="mailto:Jacekhacking@gmail.com"> JacekHacking@gmail.com</a>
      </p>
      <div className="flex">
        {logoArray.map(({ src, name, link }) => (
          <div className="h-14 w-14 rounded-full hover:bg-rose-500 flex items-center justify-center">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                src={src}
                alt={name}
                className="h-auto w-10 object-contain"
              ></img>
            </a>
          </div>
        ))}
      </div>
    </footer>
    // <FooterContainer>
    //   <div className="flex">
    //     <p>
    //       Email:
    //       <a href="mailto:Jacekhacking@gmail.com"> JacekHacking@gmail.com</a>
    //     </p>
    //     {/* <p>
    //       <a href={Pdf} target="_blank" rel="noreferrer">
    //         Download Resume
    //       </a>
    //     </p> */}
    //   </div>

    //   <>
    //     <div
    //       style={{
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <a
    //         href="https://twitter.com/JH_WebDev"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <div>
    //           <SocialMediaImg src={twitter} alt="twitter" />
    //         </div>
    //       </a>
    //       <a
    //         href="https://github.com/Jacekhacking"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <div>
    //           <SocialMediaImg src={github} alt="github" />
    //         </div>
    //       </a>

    //       <a
    //         href="https://www.linkedin.com/in/jacek-hacking-708007210"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <div>
    //           <SocialMediaImg src={linkedin} alt="linked in " />
    //         </div>
    //       </a>
    //     </div>
    //   </>
    // </FooterContainer>
  );
};

export default Footer;

// const FooterContainer = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;

//     background-color: var(--clr-5);
//     padding: 1em 20px;

//     p {
//       font-size: clamp(var(--fs-200), 1.5vh, var(--fs-400));
//       display: flex;
//       color: var(--clr-6);
//       border-bottom: 1px solid transparent;

//       a {
//         color: inherit;
//         font-size: inherit;
//       }

//       &:hover {
//         border-bottom: 1px solid var(--clr-6);
//       }

//       @media (max-width: 300px) {
//         font-size: 1vh;
//         padding: 0;
//       }
//     }

//     div {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       div {
//         height: 60px;
//         width: 60px;
//         border-radius: 50%;
//         display: flex;
//         justify-content: center;
//         align-items: center;

//         &:hover {
//           background-color: var(--clr-4);
//           box-shadow: 0 0 10px var(--clr-4);
//         }
//       }
//     }
//     @media (max-width: 650px) {
//       flex-direction: column;
//     }
//   `;

//   const SocialMediaImg = styled.img`
//     height: auto;
//     width: 40px;
//   `;

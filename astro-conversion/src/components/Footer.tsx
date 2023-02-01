import twitter from "../images/SocialLogos/twitter.png";
import github from "../images/SocialLogos/GitHub-Mark-64px.png";
import linkedin from "../images/SocialLogos/linkedin.png";
// import Pdf from "../images/JacekWebDevPortfolio.PDF";

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

  return (
    <footer className=" flex flex-col md:flex-row w-full justify-between items-center  h-20 py-5 px-5  ">
      <p className="text-xl">
        Email:
        <a href="mailto:Jacekhacking@gmail.com"> JacekHacking@gmail.com</a>
      </p>
      <div className="flex">
        {logoArray.map(({ src, name, link }) => (
          <div className="h-14 w-14 rounded-full hover:bg-red-400 flex items-center justify-center">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                src={src}
                alt={name}
                className="h-10 w-10 object-contain"
              ></img>
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

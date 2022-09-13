import Pdf from "../../UI/Shared/JacekPortfolio.PDF";
import { Link } from "@tanstack/react-location";

const NavItems = () => {
  const tabs = ["Projects", "About"];

  return (
    <>
      <ul>
        {tabs.map((tab) => (
          <Link to={tab} key={tab} getActiveProps={getActiveProps}>
            {tab}
          </Link>
        ))}
        <li>
          <a href={Pdf} target="_blank" rel="noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </>
  );
};

function getActiveProps() {
  return {
    style: {
      borderBottom: "4px solid hsl(var(--clr-sandy-brown))",
      color: "white",
    },
  };
}

export default NavItems;

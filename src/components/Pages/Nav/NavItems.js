import Pdf from "../../UI/Shared/JacekPortfolio.PDF";
import { Link } from "@tanstack/react-location";

const NavItems = ({ toggleSideDrawer }) => {
  const tabs = ["Projects", "About"];

  return (
    <>
      <ul>
        {tabs.map((tab) => (
          <Link
            to={tab}
            key={tab}
            getActiveProps={getActiveProps}
            onClick={toggleSideDrawer}
          >
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
      backgroundColor: "hsl(var(--clr-sandy-brown))",
      color: "white",
    },
  };
}

export default NavItems;

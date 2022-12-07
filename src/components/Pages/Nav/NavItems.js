import Pdf from "../../UI/Shared/JacekPortfolio.PDF";
import { Link } from "@tanstack/react-location";

const NavItems = ({ toggleSideDrawer, toggleHamburger }) => {
  const tabs = ["About", "Projects"];

  return (
    <>
      <ul>
        {tabs.map((tab) => (
          <Link
            to={tab}
            key={tab}
            getActiveProps={getActiveProps}
            onClick={() => {
              toggleSideDrawer(false);
              toggleHamburger();
            }}
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
      backgroundColor: "hsl(var(--clr-3-hsl))",
      color: "hsl(var(--clr-mint-offwhite))",
    },
  };
}

export default NavItems;

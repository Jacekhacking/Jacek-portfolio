import Pdf from "../../UI/Shared/JacekPortfolio.PDF";
import { Link } from "@tanstack/react-location";

const NavItems = ({ toggleSideDrawer, toggleHamburger }) => {
  const tabs = ["About", "Projects", "Resume"];

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
      </ul>
    </>
  );
};

function getActiveProps() {
  return {
    style: {
      color: "var(--clr-4)",
      // borderLeft: "4px solid var(--clr-3)",
      // borderRight: "1px solid var(--clr-3)",
      // borderTop: "1px solid var(--clr-3)",
      // borderBottom: "4px solid var(--clr-3)",
    },
  };
}

export default NavItems;

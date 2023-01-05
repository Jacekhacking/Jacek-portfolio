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
    },
  };
}

export default NavItems;

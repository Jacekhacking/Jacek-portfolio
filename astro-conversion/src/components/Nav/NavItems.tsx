import Logo from "../../images/logo.png";

const NavItems = () => {
  //         import these when we get them setup
  // { toggleSideDrawer, toggleHamburger }
  const tabs = ["about", "projects", "resume"];

  return (
    <nav className="flex items-center justify-between ">
      <a href="/">
        <img src={Logo} alt="logo" className="object-contain h-20 w-20" />
      </a>
      <ul className="flex">
        {tabs.map((tab) => (
          <div className=" -m-[1.5px] border-2 rounded-sm border-transparent border-b-blue-400 hover:border-b-transparent hover:border-x-blue-300 hover:border-t-blue-300">
            <a
              href={tab}
              onClick={() => {
                window.scrollTo(0, 0);
                // toggleSideDrawer(false);
                // toggleHamburger();
              }}
              className="p-2 text-2xl "
            >
              {tab.toUpperCase()}
            </a>
          </div>
        ))}
      </ul>
    </nav>
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

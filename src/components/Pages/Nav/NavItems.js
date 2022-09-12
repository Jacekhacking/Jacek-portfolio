import { useState } from "react";
import Pdf from "../../UI/Shared/JacekPortfolio.PDF";
import { Link } from "@tanstack/react-location";
import styled from "styled-components";

const NavItems = () => {
  const NavItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
  `;

  const tabs = ["Projects", "About"];
  const [navVisibility, setNavVisibility] = useState(false);

  const renderNavDropdown = () => {
    setNavVisibility((current) => !current);
  };

  return (
    <NavItemContainer>
      <ul>
        {tabs.map((tab) => (
          <Link to={tab} key={tab} style={{ paddingRight: "15px" }}>
            {tab}
          </Link>
        ))}
        <li>
          <a href={Pdf} target="_blank" rel="noreferrer" style={{}}>
            Resume
          </a>
        </li>
      </ul>
    </NavItemContainer>
  );
};
export default NavItems;

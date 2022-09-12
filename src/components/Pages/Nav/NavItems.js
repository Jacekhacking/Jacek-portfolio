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
    padding: 4 15px;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      > * {
        padding: 3 15px;
        border-radius: 3px;
        border: 4px solid transparent;
        &:hover {
          background-color: hsl(var(--clr-sandy-brown));
        }
      }
    }
  `;

  const tabs = ["Projects", "About"];

  return (
    <NavItemContainer>
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
    </NavItemContainer>
  );
};
export default NavItems;

function getActiveProps() {
  return {
    style: {
      borderBottom: "4px solid hsl(var(--clr-sandy-brown))",
      color: "white",
    },
  };
}

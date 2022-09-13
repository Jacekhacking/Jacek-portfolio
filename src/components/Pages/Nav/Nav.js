import logo from "../../UI/Images/logo.png";
import NavItems from "./NavItems";
import { Link } from "@tanstack/react-location";
import styled from "styled-components";
import { useState } from "react";

const Navigation = () => {
  const NavWrapper = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: hsl(var(--clr-light-gray));
    border-bottom: 6px solid hsl(var(--clr-blue-gray));

    img {
      padding-top: 10px;
      height: 60px;
      width: auto;
    }
  `;
  //state and toggle for sideDrawer
  const [sideDrawer, setSideDrawer] = useState(false);
  const toggleSideDrawer = () => setSideDrawer(!sideDrawer);

  return (
    <NavWrapper>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <NavItems />
    </NavWrapper>
  );
};
export default Navigation;

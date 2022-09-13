import { Link } from "@tanstack/react-location";
import { useState } from "react";
import SideDrawer from "../../UI/Shared/SideDrawer";
import logo from "../../UI/Images/logo.png";
import NavItems from "./NavItems";
import styled from "styled-components";
import Backdrop from "../../UI/Shared/Backdrop";

const Navigation = () => {
  const NavWrapper = styled.div`
    position: sticky;
    top: 0;
    z-index: 1;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: hsl(var(--clr-light-gray));
    border-bottom: 6px solid hsl(var(--clr-blue-gray));

    img {
      padding-top: 10px;
      height: 40px;
      width: auto;
    }
  `;

  const NavContainer = styled.div`
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
    @media (max-width: 800px) {
      display: none;
    }
  `;

  const NavSideDrawer = styled(NavContainer)`
    @media (max-width: 800px) {
      display: flex;
      ul {
        flex-direction: column;
      }
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

      <button onClick={toggleSideDrawer} style={{ zIndex: "2" }}>
        toggle
      </button>
      {sideDrawer && <Backdrop />}
      {sideDrawer && (
        <SideDrawer>
          <NavSideDrawer>
            <NavItems />
          </NavSideDrawer>
        </SideDrawer>
      )}
      <NavContainer>
        <NavItems />
      </NavContainer>
    </NavWrapper>
  );
};
export default Navigation;

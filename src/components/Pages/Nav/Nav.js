import { Link } from "@tanstack/react-location";
import { useState } from "react";
import SideDrawer from "../../UI/Shared/SideDrawer";
import logo from "../../UI/Images/logo.png";
import NavItems from "./NavItems";
import styled from "styled-components";
import Backdrop from "../../UI/Shared/Backdrop";

const Navigation = () => {
  const NavWrapper = styled.div`
    position: fixed;
    width: 100%;
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
      height: 50px;
      width: auto;
    }
  `;

  const NavContainer = styled.div`
    display: flex;

    align-items: center;
    padding: 4 15px;
    font-family: var(--ff-cursive);
    color: hsl(var(--clr-dark-gray));
    font-size: 1.2rem;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      > * {
        padding: 0 15px;
        border-radius: 3px;
        border: 2px solid transparent;
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
      font-size: 1.5rem;
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
      {sideDrawer && <Backdrop onClick={toggleSideDrawer} />}
      {sideDrawer && (
        <SideDrawer>
          <NavSideDrawer>
            <NavItems toggleSideDrawer={toggleSideDrawer} />
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

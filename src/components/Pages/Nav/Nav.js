import { Link } from "@tanstack/react-location";
import { useState, useEffect } from "react";
import SideDrawer from "../../UI/Shared/SideDrawer";
import logo from "../../UI/Images/logo.png";
import NavItems from "./NavItems";
import styled from "styled-components";
import Backdrop from "../../UI/Shared/Backdrop";

const Navigation = () => {
  // STYLES
  const NavWrapper = styled.div`
    padding: 5px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: hsl(var(--clr-blue-gray));
    border-bottom: 6px solid hsl(var(--clr-blue-gray));

    img {
      padding-top: 15px;
      height: 50px;
      width: auto;
    }
  `;

  const NavContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 4 15px;
    font-family: var(--ff-cursive);
    color: hsl(var(--clr-mint-offwhite));
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
    @media (max-width: 1200px) {
      display: none;
    }
  `;

  const NavSideDrawer = styled(NavContainer)`
    @media (max-width: 1200px) {
      display: flex;
      font-size: 1.5rem;
      ul {
        flex-direction: column;
      }
    }
  `;

  const NavHamburger = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    transition: all 0.4s ease-in-out;
    z-index: 101;
    span {
      height: 2px;
      width: 28px;
      background-color: white;
      transition: all 0.4s ease-in-out;
    }
    span:not(:last-child) {
      margin-bottom: 7px;
    }
    :hover {
      cursor: pointer;
      span {
        background-color: hsl(var(--clr-sandy-brown));
      }
    }
    @media (min-width: 1200px) {
      display: none;
    }
  `;

  //state and toggle for sideDrawer
  const [sideDrawer, setSideDrawer] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const toggleHamburger = () => {
    setHamburger((current) => !current);
  };
  const toggleSideDrawer = () => {
    setSideDrawer((current) => !current);
  };

  let hamburgerActive = hamburger ? "hamburger-active" : null;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setHamburger(false);
        setSideDrawer(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavWrapper>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <NavHamburger
        className={hamburgerActive}
        onClick={() => {
          toggleSideDrawer();
          toggleHamburger();
        }}
      >
        <span />
        <span />
        <span />
      </NavHamburger>

      {sideDrawer && (
        <Backdrop
          onClick={() => {
            toggleSideDrawer();
            toggleHamburger();
          }}
        />
      )}
      {sideDrawer && (
        <SideDrawer>
          <NavSideDrawer>
            <NavItems
              toggleSideDrawer={toggleSideDrawer}
              toggleHamburger={toggleHamburger}
            />
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

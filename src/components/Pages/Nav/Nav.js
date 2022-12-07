import { Link } from "@tanstack/react-location";
import { useState, useEffect } from "react";
import SideDrawer from "../../UI/Shared/SideDrawer";
import logoLight from "../../UI/Images/jacek_logo_light.png";
import logoDark from "../../UI/Images/jacek_logo_dark.png";
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
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: hsl(var(--clr-6-hsl), 0.99);
    /* border-bottom: 6px solid hsl(var(--clr-blue-gray)); */

    img {
      padding-top: 15px;
      height: 90px;
      width: auto;
    }
  `;

  const NavContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0.4rem;
    font-family: var(--ff-cursive);
    color: hsl(var(--clr-mint-offwhite));
    font-size: 1.2rem;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      > * {
        margin: 0 10px;
        text-align: center;
        border-radius: 0;
        &:hover {
          /* background-color: hsl(var(--clr-3-hsl)); */
          /* margin-bottom: -15px; */
          /* border-bottom: 10px solid hsl(var(--clr-3-hsl), 08); */
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

        a {
          margin-top: 1rem;
        }
        li {
          margin-top: 1rem;
        }
      }
    }
  `;

  const NavLogo = styled.div`
    background-image: url(${logoLight});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 90px;
    width: 90px;
    margin-top: 5px;

    :hover {
      background-image: url(${logoDark});
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
        background-color: hsl(var(--clr-3-hsl));
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
        <NavLogo />
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

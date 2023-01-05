import styled from "styled-components";

const SideDrawer = (props) => {
  const SideDrawerContainer = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 80%;
    background: hsl(var(--clr-6-hsl));
    box-shadow: -3px 5px 20px black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--clr-5);

    @media (min-width: 1200px) {
      display: none;
    }
    @media (max-width: 800px) {
    }
  `;
  return (
    <SideDrawerContainer onClick={props.onClick}>
      {props.children}
    </SideDrawerContainer>
  );
};
export default SideDrawer;

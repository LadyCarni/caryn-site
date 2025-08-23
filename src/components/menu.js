import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100vw)'};
  transition: transform 0.3s ease-in-out;
`

const Nav = ({ open }) => {
  return (
    <StyledNav open={open} className={`menu ${open && "open"}`}>
      <NavLink to="/portfolio" aria-label="portfolio">Portfolio</NavLink>
      <NavLink to="/articles" aria-label="articles">Articles</NavLink>
      <NavLink to="/creative" aria-label="creative">Creative</NavLink>
      <NavLink to="/about" aria-label="about">About</NavLink>
      <NavLink to="/contact" aria-label="contact">Contact</NavLink>
    </StyledNav>
  )
}

const StyledBurger = styled.button`
  display: flex;
  margin-left: auto;
  flex-direction: column;
  justify-content: space-around;
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

const BurgerBar = styled.span`
  height: 4px;
  background: ${({ open }) => open ? '#595959' : '#3F3F3F'};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
  width: 25px;

  &:first-child {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  &:nth-child(2) {
    opacity: ${({ open }) => open ? '0' : '1'};
    transform: ${({ open }) => open ? 'translateX(25px)' : 'translateX(0)'};
    width: 20px;
  }

  &:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <BurgerBar open={open} />
      <BurgerBar open={open} />
      <BurgerBar open={open} />
    </StyledBurger>
  )
}
const Menu = () => {
  const [open, setOpen] = React.useState(false);

  // Simple mobile detection using window.matchMedia
  const [isMobile, setIsMobile] = React.useState(window.matchMedia("(max-width: 768px)").matches);

  React.useEffect(() => {
    const handler = (e) => setIsMobile(e.matches);
    const mq = window.matchMedia("(max-width: 768px)");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className="nav">
      {isMobile ? (
        <>
          <Nav open={open} />
          <Burger open={open} setOpen={setOpen} />
        </>
      ) : (
        <Nav open={true} />
      )}
    </div>
  );
}

export default Menu;

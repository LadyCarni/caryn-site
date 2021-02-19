import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100vw)'};
  transition: transform 0.3s ease-in-out;
`

const Nav = ({ open }) => {
  return (
    <StyledNav open={open} className="menu">
      <NavLink to="/portfolio" aria-label="portfolio">Portfolio</NavLink>
      <NavLink to="/articles" aria-label="articles">Articles</NavLink>
      <NavLink to="/about" aria-label="about">About</NavLink>
      <NavLink to="/creative" aria-label="creative">Creative</NavLink>
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

  span {
    height: 4px;
    background: ${({ open }) => open ? '#595959' : '#3F3F3F'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      width:25px;
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
      width:20px;
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      width:25px;
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

const Menu = () =>{
  const [open, setOpen] = React.useState(false);

  return (
    <div className="nav">
      <Nav open={open} setOpen={setOpen} />
      <Burger open={open} setOpen={setOpen} />
    </div>
  )
}

export default Menu;

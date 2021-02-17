import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100vw)'};
  transition: transform 0.3s ease-in-out;
  }
`

const Nav = ({ open }) => {
  return (
    <StyledNav open={open} className="menu">
      <Link to="/portfolio" aria-label="portfolio">Portfolio</Link>
      <Link to="/articles" aria-label="articles">Articles</Link>
      <Link to="/about" aria-label="about">About</Link>
      <Link to="/creative" aria-label="creative">Creative</Link>
      <Link to="/contact" aria-label="contact">Contact</Link>
    </StyledNav>
  )
}

const StyledBurger = styled.button`
  display: flex;
  margin-left: auto;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#595959' : '#3F3F3F'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
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

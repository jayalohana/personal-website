import React, { useState } from "react";
import styled from "styled-components";
import { RiHomeLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosGitNetwork } from "react-icons/io";
import { MdWorkOutline } from "react-icons/md";
import { BiMessageAltDetail } from "react-icons/bi";

const Navbar = styled.nav`
  display: none;

  @media only screen and (max-width: 767px) {
    background: rgba(0, 0, 0, 0.7);
    width: max-content;
    display: block;
    padding: 0.7rem 1.7rem;
    z-index: 2;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
    display: flex;
    gap: 0.2rem;
    border-radius: 3rem;
    backdrop-filter: blur(15px);
  }
`;

const NavItem = styled.a`
  background: transparent;
  padding: 0.9rem;
  border-radius: 50%;
  display: flex;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  &.active {
    background: #0a192f;
    color: #fff;
  }
`;

const NavMobile = () => {
  const [activeNavbar, setActiveNavbar] = useState("#");

  return (
    <Navbar>
      <NavItem
        href="#"
        onClick={() => setActiveNavbar("#")}
        className={activeNavbar === "#" ? "active" : ""}
      >
        <RiHomeLine />
      </NavItem>
      <NavItem
        href="#about"
        onClick={() => setActiveNavbar("#about")}
        className={activeNavbar === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </NavItem>
      <NavItem
        href="#experience"
        onClick={() => setActiveNavbar("#experience")}
        className={activeNavbar === "#experience" ? "active" : ""}
      >
        <MdWorkOutline />
      </NavItem>
      <NavItem
        href="#projects"
        onClick={() => setActiveNavbar("#portfolio")}
        className={activeNavbar === "#portfolio" ? "active" : ""}
      >
        <IoIosGitNetwork />
      </NavItem>
      <NavItem
        href="#contact"
        onClick={() => setActiveNavbar("#contact")}
        className={activeNavbar === "#contact" ? "active" : ""}
      >
        <BiMessageAltDetail />
      </NavItem>
    </Navbar>
  );
};

export default NavMobile;

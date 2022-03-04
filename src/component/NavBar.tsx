import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div<{ open: boolean }>`
  width: ${(props) => (props.open ? "180px" : "0")};
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 50px;
  flex-direction: column;
  transition: 0.4s;
  opacity: ${(props) => (props.open ? "1" : "0")};
  > a {
    text-decoration: none;
    color: #000;
    position: relative;
    font-size: 20px;
    font-weight: 400;
    height: 40px;
    padding: 5px 10px;
    margin-left: 10px;
    border-radius: 30px 0px 0px 30px;
    transition: 0.2s;
    line-height: 35px;
    &:nth-of-type(1) {
      background-color: #fddef3;
      border: solid 1px #ff6bcd;
      border-right: none;
      &.active {
        background-color: #ff6bcd;
      }
      &:hover {
        background-color: #ff6bcd;
      }
    }
    &:nth-of-type(2) {
      top: -5px;
      border: solid 1px #5cadfc;
      background-color: #cbe2f8;
      border-right: none;
      &.active {
        background-color: #5cadfc;
      }
      &:hover {
        background-color: #5cadfc;
      }
    }
    &:nth-of-type(3) {
      top: -10px;
      border: solid 1px #4edf6b;
      background-color: #e0ffe6;
      border-right: none;
      &.active {
        background-color: #4edf6b;
      }
      &:hover {
        background-color: #4edf6b;
      }
    }
    &:hover {
      color: #fff;
      font-weight: 600;
    }
    &.active {
      color: #fff;
      z-index: 1;
      font-weight: 600;
    }
  }
`;

const CloseBtn = styled.button`
  cursor: pointer;
  width: 30px;
  position: fixed;
  font-size: 24px;
  margin: 10px 0 10px 60px;
  background-color: transparent;
  height: 30px;
  border: none;
  z-index: 9;
`;

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(true);

  const closeNav = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <>
      <CloseBtn onClick={closeNav}>
        <FontAwesomeIcon icon={faBars} />
      </CloseBtn>
      <NavContainer open={navOpen}>
        <NavLink to={"/"}>Intro</NavLink>
        <NavLink to={"/skill-career"}>Skill&Carrer</NavLink>
        <NavLink to={"/projects"}>Projects</NavLink>
      </NavContainer>
    </>
  );
};

export default NavBar;

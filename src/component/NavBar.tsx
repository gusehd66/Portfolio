import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { navActions } from "../redux/store/nav_reducer";
import { RootState } from "../redux/store/store";

const NavContainer = styled.div<{ open: boolean }>`
  width: ${(props) => (props.open ? "180px" : "0")};
  position: fixed;
  z-index: 9;
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
    border-radius: 5px 0px 0px 5px;
    transition: 0.2s;
    line-height: 35px;
    &:hover {
      color: #fff;
      font-weight: 600;
    }
    &.active {
      color: #fff;
      z-index: 1;
      font-weight: 600;
      box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.4) !important;
    }
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
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
      &.active {
        background-color: #4edf6b;
      }
      &:hover {
        background-color: #4edf6b;
      }
    }
  }

  @media screen and (max-width: 720px) {
    width: ${(props) => (props.open ? "80px" : "0")};
    > a {
      font-size: 14px;
    }
  }
`;

const MenuBtn = styled.button`
  cursor: pointer;
  width: 30px;
  position: fixed;
  font-size: 24px;
  margin: 10px 0 10px 60px;
  background-color: transparent;
  height: 30px;
  border: none;
  z-index: 9;

  @media screen and (max-width: 720px) {
    margin: 10px 0 10px 30px;
  }
`;

const NavBar = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state: RootState) => state.nav);

  const toggleNav = () => {
    dispatch(navActions.navToggle({ open: !open }));
  };

  return (
    <>
      <MenuBtn onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </MenuBtn>
      <NavContainer open={open}>
        <NavLink to={"/"}>Intro</NavLink>
        <NavLink to={"/skill-career"}>S&C</NavLink>
        <NavLink to={"/projects"}>Projects</NavLink>
      </NavContainer>
    </>
  );
};

export default NavBar;

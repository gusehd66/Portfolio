import { useRef } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { RootState } from "../redux/store/store";
import Intro from "../Routes/Intro/Intro";
import ProjectContainer from "../Routes/Projects/Outlet/ProjectContainer";
import Projects from "../Routes/Projects/Projects";
import SkillAndCareer from "../Routes/SkillAndCareer/SkillAndCareer";

const MainContainer = styled.div<{ open: boolean }>`
  width: ${(props) => (props.open ? `calc(100% - 180px)` : "100%")};
  margin-left: ${(props) => (props.open ? "180px" : "0%")};
  background-color: #f4f4f4;
  height: 100%;
  min-height: 100vh;
  transition: 0.4s;
  perspective: 1000px;
  transform-origin: 100% 0%;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4), -2px 0 2px rgba(0, 0, 0, 0.4);
  overflow-x: hidden;
  border-left: double 6px #000;
  box-sizing: border-box;
  .transition-group {
    position: relative;
    overflow: hidden;
  }
  //pageSlider에 css 공통으로 주면 적용안됨
  .pageSlider-enter {
    opacity: 0;
    transform: rotateY(90deg);
    transform-origin: 100% 0%;
    transition: all 0.5s ease-in;
    height: 200vh;
    position: absolute;
  }
  .pageSlider-enter-active {
    opacity: 1;
    transform: rotateY(0);
    transform-origin: 100% 0%;
    transition: all 0.5s ease-in;
    z-index: 1;
    background-color: #f4f4f4;
    height: 200vh;
    position: absolute;
  }
  .pageSlider-exit {
    opacity: 1;
    transition: all 0.5s ease-in;
    z-index: 1;
    background-color: #f4f4f4;
    height: 200vh;
    position: absolute;
  }
  @media screen and (max-width: 720px) {
    width: ${(props) => (props.open ? `calc(100% - 80px)` : "100%")};
    margin-left: ${(props) => (props.open ? "80px" : "0%")};
  }
`;

const Main = () => {
  const { open } = useSelector((state: RootState) => state.nav);
  const location = useLocation();

  const nodeRef = useRef<HTMLInputElement>(null);

  return (
    <MainContainer open={open}>
      <TransitionGroup className={"transition-group"}>
        <CSSTransition
          key={location.pathname}
          classNames="pageSlider"
          timeout={500}
          nodeRef={nodeRef}
          unmountOnExit
        >
          <Routes location={location}>
            <Route path="/" element={<Intro nodeRef={nodeRef} />} />
            <Route
              path="/skill-career"
              element={<SkillAndCareer nodeRef={nodeRef} />}
            />
            <Route path="/projects" element={<Projects nodeRef={nodeRef} />}>
              <Route path=":id" element={<ProjectContainer />} />
            </Route>
            <Route path="/*" element={<div>Not Found</div>} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </MainContainer>
  );
};

export default Main;

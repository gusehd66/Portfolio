import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Intro from "../Routes/Intro/Intro";
import Projects from "../Routes/Projects/Projects";
import SkillAndCareer from "../Routes/SkillAndCareer/SkillAndCareer";

const MainContainer = styled.div`
  width: 100%;
  border-left: double 6px #000;
  background-color: #fff5d3;
  height: 100vh;
  padding-left: 100px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 3px;
    bottom: 0px;
    border-left: 6px double #333;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 12px;
    bottom: 0px;
    border-left: 6px double #666;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/skill-career" element={<SkillAndCareer />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/*" element={<div>Not Found</div>} />
      </Routes>
    </MainContainer>
  );
};

export default Main;

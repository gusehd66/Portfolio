import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../redux/store/store";
import Intro from "../Routes/Intro/Intro";
import Projects from "../Routes/Projects/Projects";
import SkillAndCareer from "../Routes/SkillAndCareer/SkillAndCareer";

const MainContainer = styled.div<{ open: boolean }>`
  width: ${(props) => (props.open ? `calc(100% - 180px)` : "100%")};
  margin-left: ${(props) => (props.open ? "180px" : "0%")};
  border-left: double 6px #000;
  background-color: #f4f4f4;
  height: 100%;
  min-height: 100vh;
  padding: 0 40px;
  position: relative;
  transition: 0.4s;
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

  @media screen and (max-width: 720px) {
    width: ${(props) => (props.open ? `calc(100% - 120px)` : "100%")};
    margin-left: ${(props) => (props.open ? "120px" : "0%")};
  }
`;

const Main = () => {
  const { open } = useSelector((state: RootState) => state.nav);

  return (
    <MainContainer open={open}>
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

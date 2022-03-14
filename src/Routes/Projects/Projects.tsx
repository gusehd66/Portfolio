import { RefObject } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import Container from "../../component/Common/Container";

const ProjectsContainer = styled(Container)`
  > .links {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 60px;
    text-align: left;
    > h3 {
      margin: 0;
      text-align: center;
    }
  }
`;

const LinkBox = styled(Link)<{ selected: boolean }>`
  color: ${(props) => (props.selected ? "#a52a2a" : "#4f4f4f")};
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  list-style: none;
  text-decoration: none;
  &::before {
    content: "ㅡ";
    position: relative;
    left: -5px;
    border-left: solid 1px #000;
  }
`;

interface Props {
  nodeRef: RefObject<HTMLInputElement>;
}

const Projects = ({ nodeRef }: Props) => {
  const { id } = useParams();

  return (
    <ProjectsContainer ref={nodeRef}>
      <div className="links">
        <h3>목차</h3>
        <LinkBox to="1" selected={id === "1"}>
          Project 1
        </LinkBox>
        <LinkBox to="2" selected={id === "2"}>
          Project 2
        </LinkBox>

        <LinkBox to="3" selected={id === "3"}>
          Project 3
        </LinkBox>

        <LinkBox to="4" selected={id === "4"}>
          Project 4
        </LinkBox>

        <LinkBox to="5" selected={id === "5"}>
          Project 5
        </LinkBox>
      </div>
      <Outlet />
    </ProjectsContainer>
  );
};

export default Projects;

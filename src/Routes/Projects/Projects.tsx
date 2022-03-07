import { RefObject } from "react";
import styled from "styled-components";
import Container from "../../component/Common/Container";

const ProjectsContainer = styled(Container)``;

interface Props {
  nodeRef: RefObject<HTMLInputElement>;
}

const Projects = ({ nodeRef }: Props) => {
  return <ProjectsContainer ref={nodeRef}>projects</ProjectsContainer>;
};

export default Projects;

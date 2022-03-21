import { RefObject, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import Container from "../../component/Common/Container";
import { projectActions } from "../../redux/store/project_reducer";
import { RootState } from "../../redux/store/store";
import ProjectMain from "./ProjectMain/ProjectMain";

const ProjectsContainer = styled(Container)``;

interface Props {
  nodeRef: RefObject<HTMLInputElement>;
}

const Projects = ({ nodeRef }: Props) => {
  const { param } = useSelector((state: RootState) => state.project);
  const { id } = useParams();
  const dispatch = useDispatch();

  const idNumber = Number(id) || 0;

  useEffect(() => {
    const page = setTimeout(
      () => dispatch(projectActions.convertParam({ param: idNumber })),
      300
    );
    return () => clearTimeout(page);
  }, [dispatch, idNumber]);

  return (
    <ProjectsContainer ref={nodeRef}>
      {!id && <ProjectMain />}
      <Outlet />
    </ProjectsContainer>
  );
};

export default Projects;

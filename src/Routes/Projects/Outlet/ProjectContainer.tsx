import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProjectData } from "../../../assets/data/data";
import { projectActions } from "../../../redux/store/project_reducer";
import { RootState } from "../../../redux/store/store";

const ProjectContainer = () => {
  const { id } = useParams();
  // console.log(ProjectData);
  const { param } = useSelector((state: RootState) => state.project);
  const dispatch = useDispatch();

  const idNumber = Number(id);

  useEffect(() => {
    setTimeout(
      () => dispatch(projectActions.convertParam({ param: idNumber })),
      400
    );
  }, [idNumber, dispatch]);

  return (
    <>
      <div>{ProjectData[param - 1].title}</div>
    </>
  );
};

export default ProjectContainer;

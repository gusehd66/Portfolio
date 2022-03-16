import { createSlice } from "@reduxjs/toolkit";
import { initialState, convertParam } from "../action/project_actions";

const ProjectParamSlice = createSlice({
  name: "projectParam",
  initialState,
  reducers: {
    convertParam,
  },
});

export default ProjectParamSlice;

export const projectActions = ProjectParamSlice.actions;

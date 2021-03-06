import { configureStore } from "@reduxjs/toolkit";
import NavBarSlice from "./nav_reducer";
import ProjectParamSlice from "./project_reducer";

const store = configureStore({
  reducer: {
    nav: NavBarSlice.reducer,
    project: ProjectParamSlice.reducer,
  },
});

export default store;

//root reducer의 반환타입
export type RootState = ReturnType<typeof store.getState>;

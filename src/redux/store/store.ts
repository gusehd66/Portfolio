import { configureStore } from "@reduxjs/toolkit";
import NavBarSlice from "./nav_reducer";

const store = configureStore({
  reducer: {
    nav: NavBarSlice.reducer,
  },
});

export default store;

//root reducer의 반환값
export type RootState = ReturnType<typeof store.getState>;

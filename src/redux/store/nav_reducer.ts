import { createSlice } from "@reduxjs/toolkit";
import { initialState, navToggle } from "../action/nav_actions";

const NavBarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    navToggle,
  },
});

export default NavBarSlice;

export const navActions = NavBarSlice.actions;

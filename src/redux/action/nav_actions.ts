import { PayloadAction } from "@reduxjs/toolkit";

type NavState = {
  open: boolean;
};

export const initialState: NavState = {
  open: true,
};

export const navToggle = (
  state: NavState,
  action: PayloadAction<{ open: boolean }>
) => {
  state.open = action.payload.open;
};

import { PayloadAction } from "@reduxjs/toolkit";

type ParamState = {
  param: number;
};

export const initialState: ParamState = {
  param: 1,
};

export const convertParam = (
  state: ParamState,
  action: PayloadAction<ParamState>
) => {
  state.param = action.payload.param;
};

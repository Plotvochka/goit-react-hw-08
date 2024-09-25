import { createSlice } from "@reduxjs/toolkit";
import { contactsInitialState } from "./contact";

const filterInitialState = {
  name: contactsInitialState.filters.name,
};

export const slice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { changeFilter } = slice.actions;
export default slice.reducer;

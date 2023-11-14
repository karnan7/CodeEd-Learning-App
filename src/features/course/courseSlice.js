import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  courses: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState: INITIAL_STATE,
  reducers: {
    setCourseData: (state, action) => {
      state.courses = action.payload.courses;
    },
  },
});

export const { setCourseData } = courseSlice.actions;
export const courseReducer = courseSlice.reducer;

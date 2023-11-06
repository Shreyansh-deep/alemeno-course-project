import { createSlice } from "@reduxjs/toolkit";
import { requestData } from "../../services/courseService";

const data = requestData();

const initialState = { courseData: null };

const userSlice = createSlice({
  name: "courseData",
  initialState: initialState,
  reducers: {
    courseDataReducer: (state, action) => {
      state.courseData = action.payload;
    }
  },
});

export const { courseDataReducer } = userSlice.actions;

export default userSlice.reducer;

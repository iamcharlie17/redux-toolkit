import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counters",
  initialState: {
    totalCount: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.totalCount++;
    },
    decrement: (state, action) => {
      state.totalCount--;
    },
  },
});

export default counterSlice.reducer;
export const {increment, decrement} = counterSlice.actions;

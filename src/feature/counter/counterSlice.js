import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    incrementBy3: (state, actions) => {
      state.count = state.count + actions.payload;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset, incrementBy3 } = counter.actions;

export default counter.reducer;

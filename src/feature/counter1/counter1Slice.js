import { createSlice } from "@reduxjs/toolkit";

export const counter1 = createSlice({
    name : "counter1",
    initialState : {count : 0},
    reducers : {
        increment : (state) => {
            state.count = state.count + 1;
        },
        decrement : (state) => {
            state.count = state.count - 1;
        },
    }
})

export const {increment, decrement} = counter1.actions;

export default counter1.reducer;
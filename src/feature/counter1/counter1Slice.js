import { createSlice } from "@reduxjs/toolkit";

export const counter1 = createSlice({
    name : "counter1",
    initialState : {count1 : 0},
    reducers : {
        increment : (state) => {
            state.count1 = state.count1 + 1;
        },
        decrement : (state) => {
            state.count1 = state.count1 - 1;
        },
    }
})

export const {increment, decrement} = counter1.actions;

export default counter1.reducer;
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice";
import counter1Reducer from "../feature/counter1/counter1Slice";

const reducers = {
  counter: counterReducer,
  counter1: counter1Reducer ,
};

const store = configureStore({
  reducer: reducers,
});

export default store;

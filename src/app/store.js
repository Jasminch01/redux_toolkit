import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice";
import counter1Reducer from "../feature/counter1/counter1Slice";
import posts from "../feature/Posts/postSlice";

const reducers = {
  counter: counterReducer,
  counter1: counter1Reducer ,
  posts: posts
};

const store = configureStore({
  reducer: reducers,
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { createStore } from 'react-redux';

import blogReducer from "../features/blogsSlice";
import categoryReducer from "../features/categoriesSlice";
import authReducer from "../features/authSlice";
import authorReducer from "../features/authorSlice";

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    categories: categoryReducer,
    auth: authReducer,
    author: authorReducer,
  },
});
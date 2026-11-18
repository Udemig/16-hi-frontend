import translateReducer from "./slices/translateSlice";
import languageReducer from "./slices/languageSlice";
import {  configureStore } from "@reduxjs/toolkit";

const store = configureStore({reducer: {translateReducer,languageReducer}});

export default store
import themeReducer from "./reducers/themeReducer";
import todoReducer from "./reducers/todoReducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

// reducerları birleştir
const rootReducer = combineReducers({todoReducer,themeReducer});

// store'u oluştur
const store = createStore(rootReducer, applyMiddleware(thunk));

// projeye tanıtmak için export etmek
export default store
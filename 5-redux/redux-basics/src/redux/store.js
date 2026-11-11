import themeReducer from "./reducers/themeReducer";
import todoReducer from "./reducers/todoReducer";
import { combineReducers, createStore } from "redux";


// reducerları birleştir
const rootReducer = combineReducers({todoReducer,themeReducer});

// store'u oluştur
const store = createStore(rootReducer);

// projeye tanıtmak için export etmek
export default store
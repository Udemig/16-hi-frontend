import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import watchlistReducer from "./watchlist-reducer";

const rootReducer = combineReducers({watchlistReducer});

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store

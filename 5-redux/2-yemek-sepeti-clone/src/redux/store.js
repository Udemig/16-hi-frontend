import { createStore,combineReducers,applyMiddleware } from "redux";
import cartReducer from './reducers/cartReducer';
import restaurantReducer from './reducers/restaurantReducer';
import { thunk } from "redux-thunk";

// reducer'ları birleştir
const rootReducer = combineReducers({cartReducer,restaurantReducer})

// store'u oluştur
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;
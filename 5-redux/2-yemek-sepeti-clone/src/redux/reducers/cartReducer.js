import AT from './../actions/actionTypes';

const initialState = {
    loading:true,
    error:null,
    cart:[],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case AT.CART_LOADING:
            return {...state, loading:true}
        
        case AT.CART_ERROR:
            return {...state, loading:false, error: action.payload}
        
        case AT.CART_SUCCESS:
            return {...state, loading:false, error:null, cart:action.payload}

        case AT.ADD_TO_CART:
            return {...state, cart: [...state.cart, action.payload]}

        case AT.UPDATE_AMOUNT:
            return {...state, cart: state.cart.map((item) => item.id === action.payload.id ? action.payload : item)}

        case AT.DELETE_FROM_CART:
            return {...state, cart: state.cart.filter((item) => item.id !== action.payload)}   
    
        default:
            return state
    }
}

export default cartReducer
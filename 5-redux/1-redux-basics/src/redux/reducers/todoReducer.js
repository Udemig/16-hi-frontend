import AT from "../actions/action-types"



// Başlangıç state'i
const initialState = {
    todos: [],
    isLoading:true,
    error:null
}

// Reducer Fonksiyonu:
// state'i ve aksiyonu parametre olarak alıp state'in yeni değerini günceller
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case AT.CREATE:
            // state'in son halini return et
            return {...state, todos: [action.payload, ...state.todos ]}

        case AT.DELETE:
            // aksiyonun payload'ı ile gelen id'li elemanı diziden kaldır
            const filtredNotes = state.todos.filter((todo) => todo.id !== action.payload);
            // state'in son halini return et
            return {...state,todos:filtredNotes}
    
        case AT.TOGGLE:
            // aksiyonun payload'ı ile gelen id'li elemanı dizide isDone değerini tersine çevir
            const updatedTodos = state.todos.map((todo) => todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo);
            
            // state'in son halini return et
            return {...state, todos: updatedTodos}


        case AT.LOADING:
            return {...state, isLoading:true};

        case AT.ERROR:
            return {...state, isLoading:false, error:action.payload}
            
        case AT.SUCCESS: 
            return {...state, isLoading:false, error:null, todos:action.payload}    

        default:
            return state
    }
}

export default todoReducer
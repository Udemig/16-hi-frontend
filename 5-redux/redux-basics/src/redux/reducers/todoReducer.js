// Başlangıç state'i
const initialState = {
    todos: [],
}

// Reducer Fonksiyonu:
// state'i ve aksiyonu parametre olarak alıp state'in yeni değerini günceller
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE":
            // action payload ile gelen yeni nesneyi diziye ekle
            const newTodos  = state.todos.concat(action.payload)
            // state'in son halini return et
            return {...state, todos: newTodos}

        case "DELETE":
            // aksiyonun payload'ı ile gelen id'li elemanı diziden kaldır
            const filtredNotes = state.todos.filter((todo) => todo.id !== action.payload);
            // state'in son halini return et
            return {...state,todos:filtredNotes}
    
        case "UPDATE":
            // state'in son halini return et
            return {...state}

        default:
            return state
    }
}

export default todoReducer
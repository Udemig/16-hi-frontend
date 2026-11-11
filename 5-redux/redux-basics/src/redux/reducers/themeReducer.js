// Başlangıç state'i
const initialState = {
    theme:"dark",
    lang:"tr",
}

// Reducer Fonksiyonu:
// state'i ve aksiyonu parametre olarak alıp state'in yeni değerini günceller
const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TEMA_DEĞİŞ":
            return {...state, theme:"light"}

        case "DİL_DEĞİŞ":
            return {...state, lang:"en"}

        default:
            return state
    }
}

export default themeReducer
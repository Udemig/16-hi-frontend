import axios from "axios";
import AT from "./action-types";

// Aksiyon Oluşturan Fonksiyon
// Bu fonksiyonlar sayesinde bileşen içerisindeki aksiyon yazımını daha pratik hale getiririz
// export const createTodo = (payload) => ({ type: AT.CREATE, payload})
// export const deleteTodo = (payload) => ({ type: AT.DELETE, payload})
// export const toggleTodo = (payload) => ({ type: AT.TOGGLE, payload})

/*
 ! Thunk Aksiyonu
 * İki fonksiyonu iç içe yazarız
 * İçerideki fonksiyon asenkron olabilir ve dispatch'i parametre olarak alır
 * Bu sayede fonksiyon içerisinde hem api isteği atabiliyor hem de dispatch ile reducer'a haber verebiliyoruz
 */

export const getTodos = () => async (dispatch) => {
    dispatch({ type: AT.LOADING });

    axios
      .get("http://localhost:4000/todos?_sort=createdAt&_order=desc")
      .then((res) => dispatch({ type: AT.SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: AT.ERROR, payload: err.message }));
}

export const createTodo = (newTodo) => async (dispatch) => {
    // oluşturma isteği at
    axios
      .post("http://localhost:4000/todos", newTodo)
      // başarılı olursa:  reducer'a action gönder
      .then(() => dispatch({type:AT.CREATE, payload:newTodo}));
}

export const deleteTodo = (todoId) => async (dispatch) => {
    // silme isteği at
    axios.delete(`http://localhost:4000/todos/${todoId}`)
    // başarılı olursa:  reducer'a action gönder
    .then(() => dispatch({type:AT.DELETE, payload: todoId}))
}

export const toggleTodo = ({todoId,isDone}) => async (dispatch) => {
    // güncelleme isteği at
    axios.patch(`http://localhost:4000/todos/${todoId}`,{isDone})
    // başarılı olursa:  reducer'a action gönder
    .then(() => dispatch({type:AT.TOGGLE, payload: todoId}))
}
import AT from './actionTypes';
import api from './../../service/api';

// redux thunk aksiyonu
// sepetteki ürünler için api'a istek atıp reducer'a haber vericek
export const getCart = () => (dispatch) => {
    dispatch({type: AT.CART_LOADING });

    api.get("/cart")
     .then((res) => dispatch({type:AT.CART_SUCCESS, payload:res.data}))
     .catch((err) => dispatch({type:AT.CART_ERROR, payload:err.message}))
}

// sepete yeni ürün eklemek için api'a istek atıp reducer'a haber vericek
export const addToCart = (product) => (dispatch) => {
    // 1) api'a gönderilecek veriyi hazırla
    const newItem = {
        id:product.id,
        title:product.title,
        price:product.price,
        photo:product.photo,
        restaurantId:product.restaurantId,
        amount: 1,
    }

    // 2) api'a eklemek için istek at
    api.post("/cart",newItem)
     // 3) istek başarılı olursa reducer'a haber ver
     .then((res) => dispatch({type:AT.ADD_TO_CART, payload:res.data}))
}

// sepetteki ürünün miktarını güncellemek için api'a istek atıp reducer'a haber vericek
export const updateAmount = (productId, newAmount) => (dispatch) => {
    // 1) api'a güncelleme isteği at
    api.patch(`/cart/${productId}`,{amount:newAmount})
    // 2) istek başarılı olursa reducer'a haber ver
    .then((res) => dispatch({type:AT.UPDATE_AMOUNT, payload:res.data}))
}

// ürünü sepetten kaldırmak için api'a istek atıp reducer'a haber ver
export const deleteFromCart = (productId) => (dispatch) => {
    // 1) api'a silme isteği at
    api.delete(`/cart/${productId}`)
    // 2) istek başarılı olursa reducer'a haber ver
    .then(() => dispatch({type:AT.DELETE_FROM_CART, payload: productId}))
}
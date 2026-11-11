import AT from './actionTypes';
import api from './../../service/api';

// Redux Thunk Aksiyonu
export const getRestaurants = () => async (dispatch) => {
    // yüklenme anında reducer'a haber ver
    dispatch({type:AT.REST_LOADING})

    // api'a restoran verilerini almak için istek at
    api.get("/restaurants")
     // istek başarılı olursa reducer'a haber ver
     .then((res) => dispatch({type:AT.REST_SUCCESS, payload:res.data}))
     // istek başarısız olursa reducer'a haber ver
     .catch((err) => dispatch({type:AT.REST_ERROR, payload:err.message}))
}
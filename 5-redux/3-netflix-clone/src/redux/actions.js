import api from "../utils/api";
import AT from "./action-types"

// Thunk Aksiyonları

// izleme listesindeki filmleri getir ve reducer'a haber ver
export const getWatchList = () => (dispatch) => {

    api.get("/account/19719088/watchlist/movies?language=tr&page=1&sort_by=created_at.desc")

}

// izleme listesine ekle/kaldır reducer'a haber ver
export const toggleWatchlist = (movie,isAdd) => (dispatch) => {
    // api gönderilcek body'i hazırla
    const body = {media_type:"movie", media_id:movie.id, watchlist:isAdd };

    // api istek at
    api.post("/account/19719088/watchlist",body)
    .then(() => {
        // ekleme çıkarma durumuna göre reducer'a haber ver
        isAdd ? dispatch({type: AT.ADD_TO_LIST, payload:movie})
        : dispatch({type: AT.REMOVE_FROM_LIST, payload: movie.id})
    })
}
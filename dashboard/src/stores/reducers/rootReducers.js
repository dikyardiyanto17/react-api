import { combineReducers } from "redux";
import beritaReducer from "./berita";
import filmReducer from "./film";
import pahlawanReducer from "./pahlawan";

const rootReducer = combineReducers({
    pahlawan: pahlawanReducer,
    berita: beritaReducer,
    film: filmReducer
})

export default rootReducer
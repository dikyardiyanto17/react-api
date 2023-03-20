import { FetchingBerita } from "../action/actionType"

const initialState = {
    berita: [],
}

function beritaReducer(state = initialState, action) {
    switch (action.type) {
        case FetchingBerita:
            return { ...state, berita: action.payload }
        default:
            return state
    }
}

export default beritaReducer
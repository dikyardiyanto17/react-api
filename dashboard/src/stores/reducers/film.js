import { FetchingFilm } from "../action/actionType"

const initialState = {
    film: [],
}

function filmReducer(state = initialState, action) {
    switch (action.type) {
        case FetchingFilm:
            return { ...state, film: action.payload }
        default:
            return state
    }
}

export default filmReducer
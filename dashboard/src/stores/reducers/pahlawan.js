import { FetchingPahlawan } from "../action/actionType"

const initialState = {
    pahlawan: []
}

function pahlawanReducer(state = initialState, action) {
    switch (action.type) {
        case FetchingPahlawan:
            return { ...state, pahlawan: action.payload}
        default:
            return state
    }
}


export default pahlawanReducer
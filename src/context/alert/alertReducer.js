import * as alertActionTypes from "../types/alertTypes";

export const alertReducer = (state, action) => {
    switch(action.type) {
        case alertActionTypes.SHOW_ALERT: return action.payload
        case alertActionTypes.HIDE_ALERT: return null
        default: return {...state}
    }
}

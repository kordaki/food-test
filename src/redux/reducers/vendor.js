import { VENDOR_LIST, VENDOR_ERR } from "../actions/vendorActions"

const INITIAL_STATE = {
    vendorList: [],
    errorMessage: ''
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case VENDOR_LIST:
            return { ...state, vendorList:  action.payload,  errorMessage: '' }
        case VENDOR_ERR:
            return { ...state, errorMessage: action.payload }
        default:
            return state
    }
}

// for loadmore
// state.vendorList.concat(action.payload)
import { combineReducers } from "redux";

import vendor from "./vendor"
import filter from "./filter"

export default combineReducers({
    vendor,
    filter
})
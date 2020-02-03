import { FILTERS_LIST, SELECTED_FILTER, FILTER_ERR } from "../actions/filterActions"

const INITIAL_STATE = {
    filters: [],
    selectedFilter: [],
    errorMessage: '',
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FILTERS_LIST:
            return { ...state, filters: action.payload ,  errorMessage: '' }
          case SELECTED_FILTER:
              let newFilters = [...state.selectedFilter];
              if(newFilters.includes(action.payload)) {
                newFilters = newFilters.filter(item=> item !== action.payload)
              } else {
                newFilters.push(action.payload)
              }
            return { ...state, selectedFilter: newFilters, errorMessage: '' }  
        case FILTER_ERR:
            return { ...state, errorMessage: action.payload }
        default:
            return state
    }
}
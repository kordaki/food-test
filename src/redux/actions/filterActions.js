import Axios from "axios";
import { apiUrl } from "../../constants"

export const FILTERS_LIST = 'filters_list'
export const SELECTED_FILTER = 'selected_filter';
export const FILTER_ERR = 'filter_err';

export const getFilters = () => async (dispatch) => {
    try {
        const response = await Axios.get(`${apiUrl}/filters`);
        const sortings = response.data.data.restaurantFilterTypes.find(item => item.value === "sortings")
        dispatch({ type: FILTERS_LIST, payload: sortings.restaurantFilters });
    } catch (e) {
        dispatch({ type: FILTER_ERR, payload: e })
    }
}

export const updateSelectedFilter = (data) => {
    return {
        type: SELECTED_FILTER,
        payload: data
    }
}

import Axios from "axios";
import { apiUrl } from "../../constants";

export const VENDOR_LIST = 'vendor_list';
export const VENDOR_ERR = 'vendor_err';

export const getVendors = (data) => async (dispatch) => {
    try {
        const params = {
            page_size: 10,
            page: 0,
            filters: {
                Sorting: data
            }
        };
        const response = await Axios.get(`${apiUrl}/vendors-list`, {params})
        dispatch({ type: VENDOR_LIST, payload: response.data.data.finalResult });
    } catch (e) {
        dispatch({ type: VENDOR_ERR, payload: e })
    }
}
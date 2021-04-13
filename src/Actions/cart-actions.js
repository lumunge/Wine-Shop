import { GET_WINES } from '../types.js';


export const getWines = () => async(dispatch) => {
    const res = await fetch('');
    const data = await res.json();
    dispatch({
        type: GET_WINES,
        payload: data,
    });
}
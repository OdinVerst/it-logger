import { SET_LOADING, GET_TECHS, TECHS_ERROR } from './types';


export const getTechs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/tech');
        const data = await res.json();

        dispatch({type: GET_TECHS, payload: data})
    } catch (err) {
        dispatch({type: TECHS_ERROR, payload: err.response.data})
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}
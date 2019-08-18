import {GET_LOGS, SET_LOADING, LOGS_ERROR} from './types';
import { async } from 'q';


export const getLogs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/logs');
        const date = await res.json();
    
        dispatch({type: GET_LOGS, payload: data})
    } catch (err) {
        dispatch({tupe: LOGS_ERROR, payload: err.response.data})
    }
};

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
};
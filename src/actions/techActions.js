import { SET_LOADING, GET_TECHS, TECHS_ERROR, ADD_TECHS, DELETE_TECHS } from './types';


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

export const addTechs = (tech) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/tech', 
        {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({type: ADD_TECHS, payload: data})
    } catch (err) {
        dispatch({type: TECHS_ERROR, payload: err.response.data})
    }
}

export const deleteTech = (id) => async dispatch => {
    try {
        setLoading();

        await fetch(`/tech/${id}`, {
            method: 'DELETE'
        });

        dispatch({type: DELETE_TECHS, payload: id})
    } catch (err) {
        dispatch({type: TECHS_ERROR, payload: err.response})
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}
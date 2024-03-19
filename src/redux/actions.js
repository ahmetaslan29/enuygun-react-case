import { VOTE, EMPLOYEE } from "./actionTypes";
import axios from 'axios'

export const vote = (payload) => {
    
    return {
        type: VOTE,
        payload: payload
    }
};

export const employee =  () => {
    return async dispatch => {
        try {
            const res = await axios.get("https://65f9ea533909a9a65b19a44a.mockapi.io/enuygun/api/users");
            dispatch({type: EMPLOYEE, payload: res.data});
        } catch (error) {
            dispatch({type: EMPLOYEE, payload: []});
        }
    }
};


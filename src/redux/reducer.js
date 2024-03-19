import { VOTE,EMPLOYEE } from "./actionTypes";

const initState = {
    vote:0,
    employee:[]
}

const voteReducer = (state = initState, action) => {
    switch (action.type) {
        case VOTE: { 
            return {
                ...state,
                employee: state.employee.map((emp) => {
                    if (emp.id === action.payload) {
                        return { ...emp, vote: emp.vote + 1 };
                    }
                    return emp;
                })
            }
        }
        case EMPLOYEE: {
            return {
                ...state,
                employee: action.payload
            }
        }
       
        default:
			return state;
    }
}
export default voteReducer
import { userAction, userActionTypes, userState } from "../../types/user"


const initialState: userState = {
    users: [],
    err: null,
    upDate: false
}

export const userReducer = (state = initialState, action: userAction): userState => {
    switch (action.type){
        case userActionTypes.ADD_USER:
            return {users: [action.payload], err: null, upDate: false}
        case userActionTypes.UPDATE_USER:
            return {users: state.users , err: null, upDate: true}
        case userActionTypes.RE_USER:
            return {users: [action.payload], err: null, upDate: false} 
        case userActionTypes.ERR_USER: 
            return {users: state.users, err: action.payload, upDate: false}        
        default: 
            return state;       
    }
}


export const addUserAC = (payload: {}) => ({type: userActionTypes.ADD_USER, payload});
export const upDateAC = (payload: boolean) => ({type: userActionTypes.UPDATE_USER, payload});
export const reUserAC = (payload: {}) => ({type: userActionTypes.RE_USER, payload});
export const errUserAC = (payload: string) => ({type: userActionTypes.ERR_USER, payload})
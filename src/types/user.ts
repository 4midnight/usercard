export enum userActionTypes{
    ADD_USER = "ADD_USER",
    UPDATE_USER = "UPDATE_USER",
    RE_USER = "RE_USER",
    ERR_USER = "ERR_USER"
}

export interface userState{
    users: any[],
    err: null | string,
    upDate: boolean
}

interface addUser{
    type: userActionTypes.ADD_USER,
    payload: any[]
}

interface delUser{
    type: userActionTypes.UPDATE_USER,
    payload: number
}

interface reUser{
    type: userActionTypes.RE_USER,
    id: number,
    payload: any[]
}

interface errUser{
    type: userActionTypes.ERR_USER,
    payload: string
}



export type userAction = addUser | delUser | reUser | errUser
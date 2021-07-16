import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } =  createActions({
    setProfile: ['User'],
    getUser: ['onSuccess', 'onError'],
})

export const UserTypes = Types
export default Creators

export interface IUser {
    username:string,
    accessToken: string,
    refreshToken:string
}

export type userPayload = {
    profile: IUser
}


export const INITIAL_STATE = Immutable({
    profile: {}
})

export const setProfile = (state:any, action:any) => ({
    ...state,
    profile: action.user
})

export const getUser = (state:any, action: any) => {

}

export const reducer = createReducer(INITIAL_STATE,{
    [Types.SET_PROFILE]: setProfile,
})
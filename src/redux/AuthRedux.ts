// import Immutable  from 'seamless-immutable';
// import { createActions, createReducer } from 'reduxsauce'


// const { Types, Creators } = createActions({
//     login: ['payload', 'onSuccess', 'onError'],
//     register: ['payload', 'onsuccess', 'onError'],
//     setIsLoggedIn: ['isLoggedIn'],
//     logout: null
// })

// export const AuthTypes = Types
// export default Creators

// export const INITIAL_STATE = Immutable({
//     isLoggedIn: false,

// })

// export const setIsLoggedIn = (state:any, action:any) => {
//     const { isLoggedIn } = action
//     return state.merge({ isLoggedIn })
// }

// export const logout = (state:any) => {
//     return {
//         ...state,
//         isLoggedIn: false
//     }
// }

// export const reducer = createReducer(INITIAL_STATE,{
//     [Types.SET_IS_LOGGED_IN]: setIsLoggedIn,
//     [Types.LOGOUT]: logout
//})

export interface User {
  email: string;
  password: string;
}

export interface LoginRequest {
  user: User;
  onSuccess: (data:any) => void;
  onError: (msg:string) => void;
}

export const authTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  REGISTER: "REGISTER",
  IS_LOGGED_IN: "IS_LOGGED_IN",
};

export type Action<T> = {
  type: string;
  payload: T;
};

export type authPayload = {
  isLoggedIn: boolean;
};

export const defaultState: authPayload = {
  isLoggedIn: false,
};

export type authAction = Action<LoginRequest> | Action<any>;

export const login = (
  user: User,
  onSuccess: (data:any) => void,
  onError: (msg:string) => void
): Action<LoginRequest> => {
  return {
    type: authTypes.LOGIN,
    payload: {
      user: user,
      onSuccess: onSuccess,
      onError: onError,
    },
  };
};

const reducer = (state = defaultState, action: authAction): authPayload => {
  switch (action.type) {
    case authTypes.IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
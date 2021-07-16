import { combineReducers } from 'redux'
import authReducer, { authPayload } from './AuthRedux'
import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux'

export * from './AuthRedux'

export type AppState = {
    auth: authPayload
}

const rootReducer = combineReducers<AppState>({
    auth: authReducer
})

export const useSelector:TypedUseSelectorHook<ReturnType<typeof rootReducer>> = useReduxSelector

export default rootReducer
import { AuthState } from "src/state/auth.state";
import { createReducer, on } from "@ngrx/store";
import * as AuthActions from "src/actions/auth.action"
const initialState: AuthState ={
    isAuthenticated: false,
    idToken: "",
    error: "",
}

export const AuthReducer = createReducer(initialState,
    on(AuthActions.login, state => state),
    on(AuthActions.loginSuccess, (state, action) => ({...state, isAuthenticated: true, idToken: action.idToken})),
    on(AuthActions.loginFailure, (state, action) => ({...state, error: action.error})),
    ////////////////////////////////////Log out/////////////////
    on(AuthActions.logout, state => state),
    on(AuthActions.logoutSuccess, (state, action) => ({...state, isAuthenticated: true, idToken: action.idToken})),
    on(AuthActions.logoutFailure, (state, action) => ({...state, error: action.error}))
    );
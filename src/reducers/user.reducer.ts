import { createReducer, on } from "@ngrx/store";
import { UserState } from "src/state/user.state";
import * as UserActions from "src/actions/user.action"
import { state } from "@angular/animations";

    const initialState: UserState = {
        users: [],
        isLoading: false,
        error: ""
    }

    export const UserReducer = createReducer(
        initialState,
        on(UserActions.addUser, state =>({
            ...state,
            isLoading: true
        })),
        on(UserActions.addUSerSuccess, (state) =>({
            ...state,
            isLoading: false,
            error: ""
        })),
        on(UserActions.addUsserFailure, (state, {error}) =>({
            ...state,
            isLoading: false,
            error: error
        })),
////////////////////////////////////////GET///////////////////////////////////////
        on(UserActions.getUsers, state =>({
            ...state,
            isLoading:true,
            error: "" 
        })),
        on(UserActions.getUserSuccess, (state, {users}) =>({
            ...state,
            isLoading: false,
            error: "",
            users: users
        })),
        on(UserActions.addUsserFailure, (state, {error}) =>({
            ...state,
            isLoading: false,
            error: error
        })),
///////////////////////////////////////DELETE//////////////////////////////////////
        on(UserActions.deleteUserId, state =>({
            ...state,
            isLoading: true,
            error: ""
        })),
        on(UserActions.deleteUserIdSuccess, (state)=>({
            ...state,
            isLoading: false,
            error: "",
            
        })),
        on(UserActions.deleteUserIdFailure,(state, {error}) =>({
            ...state,
            isLoading: false,
            error: error
        })),
        ///////////////////////////UPDATE////////////////////////////
        on(UserActions.updateUser, (state) => {
            return { ...state, isLoading: true };
          }),
          on(UserActions.updateUserSuccess, (state, action) => ({
            ...state,
            isLoading: true,
          })),
          on(UserActions.updateUserFail, (state, { error }) => ({
            ...state,
            isLoading: false,
            error: error,
            isSuccess: true,
          })),
    );
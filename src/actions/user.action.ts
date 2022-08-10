import { createAction, props } from "@ngrx/store";
import {User} from "src/model/user.model"
////////////////////////ADD////////////////////////////////
export const addUser = createAction(
    '[User] Add User',
    props<{user : User}>()
);

export const addUSerSuccess = createAction(
    '[User] Add User Success'
);
export const addUsserFailure = createAction(
    '[User] Add User Failure',
    props<{error: string}>()
);
///////////////////////GET/////////////////////
export const getUsers = createAction(
    '[User] Get Users'
);
export const getUserSuccess = createAction(
    '[User] Get User Success',
    props<{ users: User[]} >()
);
export const getUserFailure = createAction(
    '[User] Get User Failure',
    props<{error: string }>()
);
////////////////DELETE////////////////////////////
export const deleteUserId = createAction(
    '[User] Delete UserId' ,
    props<{ userId: string }>()
);
export const deleteUserIdSuccess = createAction(
    '[User] Delete User Success',
    
);
export const deleteUserIdFailure = createAction(
    '[User] Delete User Failure',
    props<{error: string }>()
);
///////////////////////UPDATE/////////////////////////
export const updateUser = createAction(
    '[User] Update User',
    props<{userId: User}>()
  );
  export const updateUserFail = createAction(
    '[User] Update User Fail',
    props<{ error: string;  }>()
  );
  export const updateUserSuccess = createAction(
    '[User] Update User Success',
  );

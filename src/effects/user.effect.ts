import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/app/services/user.service";
import * as UserActions from "src/actions/user.action";
import { catchError, of, switchMap, map, from,   } from "rxjs";
import { User } from "src/model/user.model";
@Injectable()
 export class UserEffects {
    constructor(private actions$: Actions, private userService: UserService) {}

    addUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.addUser),
    switchMap((action)=> from (this.userService.addNew(action.user))),
    map(() => UserActions.addUSerSuccess()),
    catchError(error=> {
        return of (UserActions.addUsserFailure({error: error.message}));
        }
        )));

        getUserS$ = createEffect(() => this.actions$.pipe(
            ofType(UserActions.getUsers),
            switchMap(() => from(this.userService.getAll())),
            map((snapshot) => {
              
              let users =  snapshot.map((doc) => <User>doc.data());
              return UserActions.getUserSuccess({users: users}); 
            }), 
            catchError((error) =>{
                return of (UserActions.addUsserFailure({error: error.message}));
            })));

            deleteUser$ = createEffect(()=> this.actions$.pipe(
              ofType(UserActions.deleteUserId),
              switchMap(action => from(this.userService.delete(action.userId)).pipe(
                map(() => UserActions.deleteUserIdSuccess()),
                catchError((error) => of(UserActions.deleteUserIdFailure(error.message)))
            ))));

            updateUser$ = createEffect(() => this.actions$.pipe(
              ofType(UserActions.updateUser),
              switchMap((action) => from(this.userService.update(action.userId))),
              map(() => UserActions.updateUserSuccess()),
              catchError((error) => {
                return of(UserActions.updateUserFail({ error: error }));
              })
            )
          );
}
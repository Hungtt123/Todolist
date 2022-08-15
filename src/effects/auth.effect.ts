import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AuthActions from "src/actions/auth.action"
import { AuthService } from "src/app/services/auth.service"
import {catchError, map, switchMap} from "rxjs/operators"
import { of} from 'rxjs';

@Injectable()
export class AuthEffects {
    constructor(private action$: Actions, private authService: AuthService){}

    authEffect$ = createEffect(() => this.action$.pipe(
        ofType(AuthActions.login),
        switchMap(() => this.authService.login()),
        map(idToken=> AuthActions.loginSuccess({idToken: idToken})),
        catchError(error => of(AuthActions.loginFailure({error: error})))
    ));

   

    

}
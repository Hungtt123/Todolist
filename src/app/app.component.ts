import { Component, OnInit } from '@angular/core';
import { UserState } from 'src/state/user.state';
import { Store } from '@ngrx/store'
import * as UserActions from "src/actions/user.action"
import { User } from 'src/model/user.model';
import { AuthState } from 'src/state/auth.state'
import * as AuthActions from 'src/actions/auth.action'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users$ = this.store.select((state) =>state.user.users);
  userState$ = this.store.select('user');
  currentUser: User  ={
    id: '',
    name: '',
    Work: '',
    dob: '',
    
  }
  idToken$ = this.store.select((state) => state.auth.idToken);
  constructor(private store: Store<{ user: UserState, auth: AuthState }>) { }
  login(){
    this.store.dispatch(AuthActions.login());
  }
  logout(){
    this.store.dispatch(AuthActions.logout());
  }
  ngOnInit(): void {
    this.userState$.subscribe(state => {
      console.log(state);
    });
    // this.store.dispatch(UserActions.addUSer({
    //   user: {
    //     id: Date.now().toString(),
    //     name: 'hung',
    //     email: 'test@gmail.com',
    //     dob: '1/1/2000',
    //     phone: { code: '+84', number: '131313' },
    //   },
    // })
    // );
    this.store.dispatch(UserActions.getUsers());
  }
  title = 'test';

  addUser(){
    this.store.dispatch(UserActions.addUser({user: this.currentUser}));
  }

  deleteUserId(userId: string){
    this.store.dispatch(UserActions.deleteUserId({userId}));
  }
  // updateUser(){
  //   this.store.dispatch(UserActions.updateUser({user}))
  // }
}

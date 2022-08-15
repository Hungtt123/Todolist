import { Injectable } from '@angular/core';
import { collection, collectionSnapshots, deleteDoc, Firestore, getDocs } from '@angular/fire/firestore';
import { setDoc, doc } from '@firebase/firestore';
import { User } from 'src/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:Firestore) { }
  addNew(user: User){
    if(!user.id){
      throw new Error('User id is required');
    }
    return setDoc(doc(this.db, 'users/' +user.id), user)
  }

  getAll(){
    return collectionSnapshots(collection(this.db, 'users'));
    // return getDocs(collection(this.db, 'users'))
  }

  delete(userId: string){
    return deleteDoc(doc(this.db, 'users/' +userId));
  }
  update(user: User) {
    return setDoc(doc(this.db, 'users/' + user.id), user);
  }
}

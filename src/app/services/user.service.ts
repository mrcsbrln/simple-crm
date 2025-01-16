import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private firestore: Firestore = inject(Firestore);
  private usersCollection = collection(this.firestore, 'users');

  async addUser(user: User) {
    try {
      await addDoc(this.getUsersRef(), user);
      console.log('User created');
    } catch (err) {
      console.error(err);
    }
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }
}

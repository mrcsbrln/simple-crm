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
      const userRef = await addDoc(this.getUsersRef(), user);
      console.log('Document written with ID:', userRef?.id);
    } catch (err) {
      console.error(err);
    }
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }
}

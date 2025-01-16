import { Injectable, inject, signal } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private firestore: Firestore = inject(Firestore);
  loading = signal(false);

  async addUser(user: User) {
    this.loading.set(true);
    try {
      await addDoc(this.getUsersRef(), user.toJSON());
      console.log('User created');
    } catch (err) {
      console.error(err);
    } finally {
      setTimeout(() => {
        this.loading.set(false);
      }, 3000);
    }
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }
}

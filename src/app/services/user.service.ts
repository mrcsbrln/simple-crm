import { Injectable, OnDestroy, inject, signal } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  doc,
  onSnapshot,
} from '@angular/fire/firestore';
import { User } from '../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../components/dialog-add-user/dialog-add-user.component';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private firestore: Firestore = inject(Firestore);
  users: User[] = [];
  unsubUsers;

  loading = signal(false);

  constructor() {
    this.unsubUsers = this.subUsersCollection();
  }

  ngOnDestroy() {
    this.unsubUsers();
  }

  async addUser(user: User, dialogRef: MatDialogRef<DialogAddUserComponent>) {
    this.loading.set(true);
    try {
      await addDoc(this.getUsersCollectionRef(), user.toJSON());
      console.log('User created');
    } catch (err) {
      console.error(err);
    } finally {
      dialogRef.close();
      this.loading.set(false);
    }
  }

  getUsersCollectionRef() {
    return collection(this.firestore, 'users');
  }

  subUsersCollection() {
    return onSnapshot(this.getUsersCollectionRef(), (snapshot) => {
      this.users = [];
      snapshot.forEach((doc) => {
        const userData = doc.data();
        userData['id'] =  doc.id;
        this.users.push(new User(userData));
      });
    });
  }
}

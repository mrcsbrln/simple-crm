import { Injectable, inject, signal } from '@angular/core';
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
export class UserService {
  private firestore: Firestore = inject(Firestore);
  users: User[] = [];
  unsubUser;
  loading = signal(false);

  constructor() {
    this.unsubUser = this.subUsersCollection();
  }

  ngOnDestroy() {
    this.unsubUser();
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

  getUserDocRef(userId: string) {
    return doc(collection(this.firestore, 'users'), userId);
  }

  subUsersCollection() {
    return onSnapshot(this.getUsersCollectionRef(), (snapshot) => {
      this.users = [];
      snapshot.forEach((doc) => {
        this.users.push(new User(doc.data()));
      });
    });
  }

  subUser(userId: string) {
    return onSnapshot(this.getUserDocRef(userId), (docSnapshot) => {
      new User(docSnapshot.data());
    });
  }
}

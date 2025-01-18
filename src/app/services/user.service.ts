import { Injectable, Signal, inject, signal } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { User } from '../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../components/dialog-add-user/dialog-add-user.component';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private firestore: Firestore = inject(Firestore);
  users: Signal<User[]> = signal([]);
  loading = signal(false);

  async addUser(user: User, dialogRef: MatDialogRef<DialogAddUserComponent>) {
    this.loading.set(true);
    try {
      await addDoc(this.getUsersRef(), user.toJSON());
      console.log('User created');
    } catch (err) {
      console.error(err);
    } finally {
      dialogRef.close();
      this.loading.set(false);
    }
  }

  getUserCollection() {
    const userCollection = collection(this.firestore, 'users');
    const userDocument = collectionData(userCollection, { idField: 'id' });
    this.users.set(userDocument);
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }
}

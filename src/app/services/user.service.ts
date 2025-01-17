import { Injectable, inject, signal } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { User } from '../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../components/dialog-add-user/dialog-add-user.component';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private firestore: Firestore = inject(Firestore);
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

  getUsersRef() {
    return collection(this.firestore, 'users');
  }
}

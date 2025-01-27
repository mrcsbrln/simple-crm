import { Injectable, inject, signal } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  onSnapshot,
  updateDoc,
  doc,
} from '@angular/fire/firestore';
import { User } from '../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../components/dialog-add-user/dialog-add-user.component';
import { DialogEditUserComponent } from '../components/dialog-edit-user/dialog-edit-user.component';
import { DialogEditAddressComponent } from '../components/dialog-edit-address/dialog-edit-address.component';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private firestore: Firestore = inject(Firestore);
  users = signal<User[]>([]);
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

  async updateUser(
    currentUser: User,
    userId: string,
    dialogRef: MatDialogRef<DialogEditUserComponent, DialogEditAddressComponent>
  ) {
    this.loading.set(true);
    try {
      let docRef = this.getUserDocRef(userId);
      await updateDoc(docRef, currentUser.toJSON());
    } catch (err) {
      console.error(err);
    } finally {
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
      const usersList: User[] = [];
      snapshot.forEach((doc) => {
        const userData = doc.data();
        userData['id'] = doc.id;
        usersList.push(new User(userData));
      });
      this.users.set(usersList);
    });
  }
}

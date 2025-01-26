import { Component, effect, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserComponent } from '../../dialog-edit-user/dialog-edit-user.component';
import { DialogEditAddressComponent } from '../../dialog-edit-address/dialog-edit-address.component';

@Component({
  selector: 'app-user-details',
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  readonly dialog = inject(MatDialog);
  userService: UserService = inject(UserService);
  userId: string = '';
  currentUser: User | undefined;

  constructor() {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id') || '';
      console.log('User ID:', this.userId);
    });
    effect(() => {
      this.currentUser = this.userService
        .users()
        .find((user) => user.id === this.userId);
    });
  }

  editUserAddress() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    if (this.currentUser) {
      dialog.componentInstance.currentUser = new User(this.currentUser.toJSON());
    }
  }

  editUser() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    if (this.currentUser) {
      dialog.componentInstance.currentUser = new User(this.currentUser.toJSON());
    }
  }
}

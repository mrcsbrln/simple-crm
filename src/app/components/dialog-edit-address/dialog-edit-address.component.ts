import { Component, inject } from '@angular/core';
import { User } from '../../models/user.class';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-edit-address',
  imports: [FormsModule, MatDialogModule, MatProgressBarModule, MatFormFieldModule, MatButtonModule, MatInputModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss',
})
export class DialogEditAddressComponent {
  userService: UserService = inject(UserService);
  dialogRef = inject(MatDialogRef<DialogEditAddressComponent>);


  currentUser: User | undefined;

  saveEdit() {
    if (this.currentUser && this.currentUser.id) {
      this.userService.updateUser(this.currentUser, this.currentUser.id);
    }
  }
}

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.class';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-dialog-edit-user',
  imports: [
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatProgressBarModule,
  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class DialogEditUserComponent {
  userService: UserService = inject(UserService);
  dialogRef = inject(MatDialogRef<DialogEditUserComponent>);

  currentUser!: User;
  userId!: string;

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveEdit() {
    if (this.currentUser) {
      this.userService.updateUser(this.currentUser, this.userId, this.dialogRef);
    }
  }
}

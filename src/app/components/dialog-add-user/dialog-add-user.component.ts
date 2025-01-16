import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dialog-add-user',
  imports: [
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class DialogAddUserComponent {
  user = new User();
  dateOfBirth!: Date;
  private userService: UserService = inject(UserService);

  async createUser() {
    const newUser: User = new User({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      dateOfBirth: this.dateOfBirth.getTime(),
      address: this.user.address,
      city: this.user.city,
      zipCode: this.user.zipCode,
    });

    this.userService.addUser(newUser);
  }
}

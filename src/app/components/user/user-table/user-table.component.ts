import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-user-table',
  imports: [CommonModule, MatCardModule, RouterLink],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss',
})
export class UserTableComponent {
  userService: UserService = inject(UserService);
}

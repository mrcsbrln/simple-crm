import { Component, effect, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-user-details',
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
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

  editMenu() {
    
  }
}

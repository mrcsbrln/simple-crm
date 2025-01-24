import { Component, effect, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-user-details',
  imports: [MatCardModule],
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
}

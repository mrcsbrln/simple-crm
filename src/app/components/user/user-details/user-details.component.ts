import { Component, inject, OnInit } from '@angular/core';
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
export class UserDetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  userService: UserService = inject(UserService);

  userId: string = '';
  userData?: User;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id') || '';
      console.log('User ID:', this.userId);
    });
  }

  // loadUserData(): void {
  //   this.userService.getUser(this.userId).subscribe((user) => {
  //     this.userData = user;
  //     console.log('User Data:', this.userData);
  //   });
  // }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { UserService } from './shared/user.service';

@Component({
  selector: 'lib-users',
  standalone: true,
  imports: [CommonModule, RouterModule, MatListModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users$ = this.userService.getUsers();
  constructor(private userService: UserService) {}
}

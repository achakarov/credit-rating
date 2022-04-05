import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  get isLogged(): string | null {
    return this.userService.isLogged;
  }
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  getId(): string {
    if (localStorage.getItem('user')) {
      const { uid } = JSON.parse(localStorage.getItem('user')!);
      return uid;
    } else {
      return '';
    }
  }
}

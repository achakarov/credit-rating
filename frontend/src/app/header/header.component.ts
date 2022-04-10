import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public userId = localStorage.getItem('user');
  get isLogged(): string | null {
    return this.userService.isLogged;
  }
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  handleLogout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  // getId(): string {
  //   if (localStorage.getItem('user')) {
  //     const { id } = JSON.parse(localStorage.getItem('user')!);
  //     return id;
  //   } else {
  //     return '';
  //   }
  // }
  goToNewCredit(): void {
    if (localStorage.hasOwnProperty('user') !== null) {
      this.userId = localStorage.getItem('user');
    }
    this.router.navigate([`/credits/new/${this.userId}`]);
  }
}

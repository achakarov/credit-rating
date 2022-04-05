import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  login(form: NgForm): void {
    const { id, password } = form.value;
    if (password === `${id}#${id}#${id}`) {
      this.userService.login({ id, password });
      console.log('Successful login');
    } else {
      console.log('Incorrect username or password');
      form.reset();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-new-credit',
  templateUrl: './new-credit.component.html',
  styleUrls: ['./new-credit.component.css'],
})
export class NewCreditComponent implements OnInit {
  public userId = localStorage.getItem('user');
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  createCredit(form: NgForm): void {
    // console.log(form.value);
    this.userService
      .createCredit(form.value, this.userId)
      .subscribe((result) => {
        console.log(result);
      });
    this.router.navigate(['/']);
    form.reset();
  }
}

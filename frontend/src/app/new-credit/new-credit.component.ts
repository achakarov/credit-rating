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
    const { type, amount, period } = form.value;

    if (type === '' || amount === '' || period === '') {
      window.alert('Please fill in all the fields');
      return;
    }

    if (amount < 200 || amount > 5000) {
      window.alert('Credit amount must be between BGN 200 and BGN 5000');
      return;
    }

    this.userService
      .createCredit(form.value, this.userId)
      .subscribe((result) => {
        console.log(result);
      });
    this.router.navigate(['/']);
    form.reset();
  }
}

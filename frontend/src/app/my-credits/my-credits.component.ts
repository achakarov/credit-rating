import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { Credit } from '../interfaces/ICredit';

@Component({
  selector: 'app-my-credits',
  templateUrl: './my-credits.component.html',
  styleUrls: ['./my-credits.component.css'],
})
export class MyCreditsComponent implements OnInit {
  public credits: Credit[] | undefined;
  public userId = localStorage.getItem('user');

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.readMyCredits(this.userId).subscribe((result: any) => {
      result.forEach((element: { credit_status_id: number | string }) => {
        if (
          element.credit_status_id === 1 ||
          element.credit_status_id === 2 ||
          element.credit_status_id === 3
        ) {
          element.credit_status_id = 'New';
        } else if (
          element.credit_status_id === 4 ||
          element.credit_status_id === 5 ||
          element.credit_status_id === 6 ||
          element.credit_status_id === 7 ||
          element.credit_status_id === 8 ||
          element.credit_status_id === 9 ||
          element.credit_status_id === 10 ||
          element.credit_status_id === 11 ||
          element.credit_status_id === 38 ||
          element.credit_status_id === 40
        ) {
          element.credit_status_id = 'Approved';
        } else {
          element.credit_status_id = 'Rejected';
        }
      });
      this.credits = result;
      console.log(this.credits);
    });
  }
}

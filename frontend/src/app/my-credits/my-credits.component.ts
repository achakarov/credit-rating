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
        if (element.credit_status_id in [4, 5, 6, 7, 8, 9, 10, 11, 38, 40]) {
          element.credit_status_id = 'Approved';
        } else if (element.credit_status_id in [1, 2, 3]) {
          element.credit_status_id = 'New';
          console.log(element);
        } else {
          element.credit_status_id = 'Rejected';
        }
      });
      this.credits = result;
      console.log(this.credits);
    });
  }
}

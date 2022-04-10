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
      this.credits = result;
      console.log(this.credits);
    });
  }

  getId(): string {
    if (localStorage.getItem('user')) {
      const { uid } = JSON.parse(localStorage.getItem('user')!);
      return uid;
    } else {
      return '';
    }
  }
}

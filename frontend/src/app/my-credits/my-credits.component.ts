import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user-service.service';
import { Credit } from '../interfaces/ICredit';

@Component({
  selector: 'app-my-credits',
  templateUrl: './my-credits.component.html',
  styleUrls: ['./my-credits.component.css'],
})
export class MyCreditsComponent implements OnInit {
  credits!: Observable<Credit[]>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const id = this.getId();
    this.userService.readMyCredits(id).subscribe((result: any) => {
      this.credits = result;
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

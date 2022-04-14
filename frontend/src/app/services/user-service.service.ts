import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/IUser';
import { Credit } from '../interfaces/ICredit';
import { NewCredit } from '../interfaces/NewCredit';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: IUser | null | undefined = undefined;
  API_SERVER = 'http://localhost:3000';

  get isLogged(): string | null {
    return localStorage.getItem('user');
  }

  constructor(private router: Router, private httpClient: HttpClient) {}

  login(data: { id: string; password: string }) {
    localStorage.setItem('user', data.id);
    this.router.navigate(['/']);
  }

  readMyCredits(id: any) {
    return this.httpClient.get<Credit[]>(
      `${this.API_SERVER}/credits/user/${id}`
    );
  }

  public createCredit(credit: NewCredit, userId: any) {
    const { type, amount, period } = credit;
    const newCredit = { type: 0, amount, period: 0 };

    if (type === 'weekly_installment') {
      newCredit.type = 15;
    } else {
      newCredit.type = 30;
    }

    switch (period) {
      case 'one':
        newCredit.period = 1;
        break;
      case 'three':
        newCredit.period = 3;
        break;
      case 'six':
        newCredit.period = 6;
        break;
      case 'nine':
        newCredit.period = 9;
        break;
      case 'twelve':
        newCredit.period = 12;
        break;
    }

    console.log(type, amount, period);
    console.log(newCredit);

    return this.httpClient.post(
      `${this.API_SERVER}/credits/new/${userId}`,
      newCredit
    );
  }
}

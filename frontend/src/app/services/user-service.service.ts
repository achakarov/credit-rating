import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/IUser';
import { Credit } from '../interfaces/ICredit';

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
}

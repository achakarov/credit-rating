import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: IUser | null | undefined = undefined;

  get isLogged(): string | null {
    return localStorage.getItem('user');
  }

  constructor(private router: Router) {}

  login(data: { id: string; password: string }) {
    localStorage.setItem('user', JSON.stringify({ id: data.id }));
    this.router.navigate(['/']);
  }
}

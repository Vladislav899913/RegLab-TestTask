import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { UserModel } from '../../../shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { StoreDevtools } from '@ngrx/store-devtools';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private storeDevtools: StoreDevtools,
  ) {}

  public login(username: string, password: string): Observable<UserModel> {
    if (username === 'Vladislav' && password === 'password') {
      this.navigateToMain();

      return of({ id: 1, name: 'Vladislav', isOnline: true });
    }

    if (username === 'Maria' && password === 'password') {
      this.navigateToMain();

      return of({ id: 2, name: 'Maria', isOnline: true });
    }

    return throwError(() => new Error());
  }

  public logout(): Observable<UserModel> {
    this.navigateToLogin();
    this.storeDevtools.reset();

    return of(new UserModel());
  }

  private navigateToMain(): void {
    this.router.navigate(['/']);
  }

  private navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}

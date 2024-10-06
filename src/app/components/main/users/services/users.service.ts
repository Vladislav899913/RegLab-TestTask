import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../../../../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiUrl);
  }

  public addUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.apiUrl, user);
  }
}

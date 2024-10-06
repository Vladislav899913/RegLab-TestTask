import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login } from '../../../store/auth/auth.actions';
import { selectErrorMessage } from '../../../store/auth/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';
  public errorMessage$: Observable<string>;

  constructor(private store: Store) {
    this.errorMessage$ = this.store.select(selectErrorMessage);
  }

  public login(): void {
    this.store.dispatch(
      login({ username: this.username, password: this.password }),
    );
  }
}

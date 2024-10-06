import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { selectCurrentUser } from '../../../store/auth/auth.selectors';
import { Observable } from 'rxjs';
import { UserModel } from '../../../shared/models/user.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent {
  public currentUser$: Observable<UserModel>;

  constructor(
    private store: Store,
    private router: Router,
  ) {
    this.currentUser$ = this.store.select(selectCurrentUser);
  }

  public navigateToMain(): void {
    this.router.navigate(['/']);
  }
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserModel } from '../../../shared/models/user.model';
import { CapitalizePipe } from '../../../shared/pipes/capitalize.pipe';
import { selectCurrentUser } from '../../../store/auth/auth.selectors';
import { logout } from '../../../store/auth/auth.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  public currentUser$: Observable<UserModel>;

  constructor(
    private store: Store,
    private router: Router,
  ) {
    this.currentUser$ = this.store.select(selectCurrentUser);
  }

  public navigateToSettings(): void {
    this.router.navigate(['/user']);
  }

  public logOut(): void {
    this.store.dispatch(logout());
  }
}

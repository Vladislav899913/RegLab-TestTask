import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserModel } from '../../../shared/models/user.model';
import { selectUsers } from '../../../store/main/users/users.selectors';
import { addUser, loadUsers } from '../../../store/main/users/users.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  public users$: Observable<UserModel[]>;

  constructor(private store: Store) {
    this.users$ = this.store.select(selectUsers);
    this.loadUsers();
  }

  public loadUsers(): void {
    this.store.dispatch(loadUsers());
  }

  public addUser(): void {
    const res: string = prompt('Введите имя пользователя') || '';

    if (res) {
      this.store.dispatch(
        addUser({
          user: { id: new Date().getTime(), name: res, isOnline: true },
        }),
      );
    }
  }

  public trackByUserId(index: number, user: UserModel): number {
    return user.id;
  }
}

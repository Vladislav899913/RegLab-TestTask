import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChannelModel } from '../../../../shared/models/channel.model';
import { UserModel } from '../../../../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  private apiUrl: string = 'http://localhost:3000/channels';

  constructor(
    private store: Store,
    private http: HttpClient,
  ) {}

  public getChannels(user: UserModel): Observable<ChannelModel[]> {
    const params: HttpParams = new HttpParams().set('id', user.id.toString());

    return this.http
      .get<any[]>(this.apiUrl, { params })
      .pipe(map((response: any) => response[0].channels));
  }

  public addChannel(channel: string): Observable<string> {
    /*    let currentUser: UserModel = new UserModel();

    this.store
      .select(selectCurrentUser)
      .pipe(first())
      .subscribe((value: UserModel) => {
        currentUser = value;
      });

    const params: HttpParams = new HttpParams().set(
      'id',
      currentUser.id.toString(),
    );

    return this.http
      .put<ChannelModel>(this.apiUrl, { params }, {})
      .pipe(map((response: any) => response));*/
    return of(channel);
  }

  public changeChannel(channel: ChannelModel): Observable<ChannelModel> {
    return of(channel);
  }
}

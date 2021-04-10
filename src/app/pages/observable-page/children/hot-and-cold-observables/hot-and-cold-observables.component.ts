import {Component, OnInit} from '@angular/core';
import {share, shareReplay, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-hot-and-cold-observables',
  template: `
    <div>
      <p>http calls for below users using nothing: {{httpCount}}</p>
      <p>Response 1: {{(users$ | async)?.title}}</p>
      <p>Response 2: {{(users$ | async)?.title}}</p>
      <p *ngIf="active">Response 3: {{(users$ | async)?.title}}</p>
    </div>
    <hr>
    <div>
      <p>http calls for below users using share(): {{httpCountShare}}</p>
      <p>Response 1: {{(usersShare$ | async)?.title}}</p>
      <p>Response 2: {{(usersShare$ | async)?.title}}</p>
      <p *ngIf="active">Response 3: {{(usersShare$ | async)?.title}}</p>
    </div>
    <hr>
    <div>
      <p>http calls for below users using shareReplay(1): {{httpCountShareReplay}}</p>
      <p>Response 1: {{(usersShareReplay$ | async)?.title}}</p>
      <p>Response 2: {{(usersShareReplay$ | async)?.title}}</p>
      <p *ngIf="active">Response 3: {{(usersShareReplay$ | async)?.title}}</p>
    </div>
  `,
  styleUrls: ['./hot-and-cold-observables.component.css']
})
export class HotAndColdObservablesComponent implements OnInit {

  active: boolean;

  users$: Observable<any>;
  httpCount = 0;

  usersShare$: Observable<any>;
  httpCountShare = 0;

  usersShareReplay$: Observable<any>;
  httpCountShareReplay = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.users$ = (this.http.get('assets/users.json') as Observable<User>).pipe(
      // tap(response => console.log(response)),
      tap(_ => this.httpCount++),
    );

    this.usersShare$ = (this.http.get('assets/users.json') as Observable<User>).pipe(
      tap(_ => this.httpCountShare++),
      share()
    );

    this.usersShareReplay$ = (this.http.get('assets/users.json') as Observable<User>).pipe(
      tap(_ => this.httpCountShareReplay++),
      shareReplay(1)
    );

    setTimeout(() => this.active = true, 5000);
  }
}

export interface User {
  title;
}

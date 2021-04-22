import {Component, OnInit} from '@angular/core';
import {share, shareReplay, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UserService} from '../../../../user.service';

@Component({
  selector: 'app-hot-and-cold-observables',
  template: `
    <div>
      <p>http calls for below users using nothing: <b>{{httpCount}}</b></p>
      <p>Response 1: {{(users$ | async | json)}}</p>
      <p>Response 2: {{(users$ | async | json)}}</p>
      <p *ngIf="active">Response 3: {{(users$ | async | json)}}</p>
    </div>
    <hr>
    <div>
      <p>http calls for below users using share(): <b>{{httpCountShare}}</b></p>
      <p>Response 1: {{(usersShare$ | async | json)}}</p>
      <p>Response 2: {{(usersShare$ | async | json)}}</p>
      <p *ngIf="active">Response 3: {{(usersShare$ | async | json)}}</p>
    </div>
    <hr>
    <div>
      <p>http calls for below users using shareReplay(1): <b>{{httpCountShareReplay}}</b></p>
      <p>Response 1: {{(usersShareReplay$ | async | json)}}</p>
      <p>Response 2: {{(usersShareReplay$ | async | json)}}</p>
      <p *ngIf="active">Response 3: {{(usersShareReplay$ | async | json)}}</p>
    </div>
  `,
  styleUrls: ['./hot-and-cold-observables.component.css']
})
export class HotAndColdObservablesComponent implements OnInit {

  active: boolean;

  users$: Observable<any[]>;
  httpCount = 0;

  usersShare$: Observable<any[]>;
  httpCountShare = 0;

  usersShareReplay$: Observable<any[]>;
  httpCountShareReplay = 0;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers().pipe(
      // tap(response => console.log(response)),
      tap(_ => this.httpCount++),
    );

    this.usersShare$ = this.userService.getUsers().pipe(
      tap(_ => this.httpCountShare++),
      share()
    );

    this.usersShareReplay$ = this.userService.getUsers().pipe(
      tap(_ => this.httpCountShareReplay++),
      shareReplay(1)
    );

    setTimeout(() => this.active = true, 5000);
  }
}

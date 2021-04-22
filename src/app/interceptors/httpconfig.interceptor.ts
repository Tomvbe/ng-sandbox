import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {User} from '../models/user';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url === 'intercepted-user') {
      return of(new HttpResponse<User[]>({body: [{name: 'Unknown', userId: -1, isAlive: false}]}));
    }

    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('token'),
      'API-key': environment.webApiKey,
      'Accept': 'application/json'
    });

    const preparedRequest = request.clone({ headers});

    return next.handle(preparedRequest).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log(event);
        }
      })
    );
  }
}

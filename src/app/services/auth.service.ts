import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  getToken(): Observable<string> {
    if (this.token) {
      return new Observable(obs => {
        obs.next(this.token!);
        obs.complete();
      });
    }
    return this.refreshToken();
  }

  refreshToken(): Observable<string> {
    return of('123');
   /*  return this.http.post<any>('https://server-c/api/token', {}).pipe(
      tap(res => this.token = res.token),
      switchMap(res => {
        return new Observable(obs => {
          obs.next(res.token);
          obs.complete();
        });
      })
    ); */
  }
  
}

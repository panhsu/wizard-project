import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MbfService {
    
    private mbf = 'https://localhost:7288/api/token';
    getTreeNodes(): Observable<string> {
    const json = `{
  "name": "Root",
  "selected": false,
  "children": [
    {
      "name": "Group A",
      "selected": false,
      "children": [
        { "name": "A-1", "selected": false },
        { "name": "A-2", "selected": false }
      ]
    },
    {
      "name": "Group B",
      "selected": false
    }
  ]
}`
    return of(JSON.parse(json));
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
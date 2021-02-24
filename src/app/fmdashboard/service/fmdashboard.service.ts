

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FmdashboardService {
  constructor(private http: HttpClient,
    private _router: Router) { }

  getFirmwaredashboard() {
    return this.http.get<any>(`${environment._fwdashboard}`).pipe(map(user => {
      console.log(user);
      return user;
  }));
  }
}

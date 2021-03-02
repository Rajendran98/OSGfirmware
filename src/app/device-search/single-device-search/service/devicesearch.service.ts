
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevicesearchService {
  constructor(private http: HttpClient,
    private _router: Router) { }

  searchDetails() {
    return this.http.get<any>(`${environment._fwdashboard}`).pipe(map(user => {
      console.log(user);
      return user;
  }));
  }

  getVersionDetails() {
    return this.http.get<any>(`${environment._dashboard}`).pipe(map(user => {
      console.log(user);
      return user;
  }));
  }

  PublishedVersion(data) {
    return this.http.post<object>(`${environment._publishVersion}`, data).pipe(map(user => {
      console.log(user);
      return user;
  }));
  }
}

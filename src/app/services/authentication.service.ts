  
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;

 

  constructor(private http: HttpClient,
    private _router: Router) {
      this.userSubject = new BehaviorSubject<any>(localStorage.getItem('user'));
        this.user = this.userSubject.asObservable();
     }
     public get userValue() {
      return this.userSubject.value;
  }
    loginUser(loginData) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic dzhxZTYxaTZrT0J5MVFobE5PUUVodGRLOUpzYTpYcFdEVVF4R3hfd2ZFb25EeGw4REhJN2s0Y0Fh'});
    let options = { headers: headers };
    
      return this.http.post<any>(`${environment._loginProdUrl}`, loginData,options).pipe(map(user => {
        console.log(user);
        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        user.authdata = user.access_token;
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
    }));
    }

  


    getToken() {
      return localStorage.getItem('token')
    }

    loggedIn() {
      return !!localStorage.getItem('token')    
    }
}

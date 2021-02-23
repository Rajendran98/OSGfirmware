import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadCFirmwareService {

  constructor(private http: HttpClient,
    private _router: Router) { }

  createCFirmware(data) {
    return this.http.post<any>(`${environment._firmwareUpload}`, data).pipe(map(user => {
      console.log(user);
      return user;
  }));
  }
}

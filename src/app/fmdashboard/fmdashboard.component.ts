import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FmdashboardService } from './service/fmdashboard.service';
import {Apollo , QueryRef} from 'apollo-angular';
import gql from "graphql-tag";
import { map, shareReplay } from 'rxjs/operators';
import { Observable, of } from 'rxjs'


export type devicemaster ={
  DeviceID:Number;
}


export type DataQuery ={
  devicemaster:devicemaster[]
}

export type devicepacket ={
  ID:Number;
}


export type DataQuery1 ={
  devicepacket:devicepacket[]
}


@Component({
  selector: 'app-fmdashboard',
  templateUrl: './fmdashboard.component.html',
  styleUrls: ['./fmdashboard.component.css']
})
export class FmdashboardComponent implements OnInit {
  emp:object =[];
  public TotalDevice;
  public ReportStatus
  constructor(private router: Router,private apollo: Apollo, private FmdashboardService : FmdashboardService) { }

  ngOnInit(): void {

    
    const source$ = this.apollo.query<DataQuery>({
      query: gql`
      {
        devicemaster {
          DeviceID
        }
      }`
      
    }).pipe(shareReplay(1))

source$.pipe(map(result => result.data && result.data.devicemaster)).subscribe((data) => this.TotalDevice = data.length);
  

const source1$ = this.apollo.query<DataQuery1>({
  query: gql`
  {
    devicepacket {
      ID
    }
  }`
  
}).pipe(shareReplay(1))

source1$.pipe(map(result => result.data && result.data.devicepacket)).subscribe((data) => this.ReportStatus = data.length);

}

  dash(){
    this.router.navigate(['dashboard']);
  }
  menu(){
    this.router.navigate(['Firmware']);
  }
}

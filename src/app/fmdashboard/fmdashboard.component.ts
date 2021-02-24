import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FmdashboardService } from './service/fmdashboard.service';

@Component({
  selector: 'app-fmdashboard',
  templateUrl: './fmdashboard.component.html',
  styleUrls: ['./fmdashboard.component.css']
})
export class FmdashboardComponent implements OnInit {

  constructor(private router: Router, private FmdashboardService : FmdashboardService) { }

  ngOnInit(): void {

    this.FmdashboardService.getFirmwaredashboard().subscribe(
      data => {
        console.log(data)
      }
    )
  }

  dash(){
    this.router.navigate(['dashboard']);
  }
  menu(){
    this.router.navigate(['Firmware']);
  }
}

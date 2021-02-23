import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fmdashboard',
  templateUrl: './fmdashboard.component.html',
  styleUrls: ['./fmdashboard.component.css']
})
export class FmdashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  dash(){
    this.router.navigate(['dashboard']);
  }
  menu(){
    this.router.navigate(['Firmware']);
  }
}

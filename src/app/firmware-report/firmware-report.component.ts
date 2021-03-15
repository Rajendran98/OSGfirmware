import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firmware-report',
  templateUrl: './firmware-report.component.html',
  styleUrls: ['./firmware-report.component.css']
})
export class FirmwareReportComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  dash(){
    this.router.navigate(['Firmware']);
  }
}

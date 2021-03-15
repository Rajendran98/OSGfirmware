import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-device-search',
  templateUrl: './device-search.component.html',
  styleUrls: ['./device-search.component.css']
})
export class DeviceSearchComponent implements OnInit {

  id
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  single(){
    this.id=1
    this.router.navigate(['deviceSearch/single_device/',this.id]);
  }
  multi(){
    this.id=2
    this.router.navigate(['deviceSearch/single_device/',this.id]); 
  }

  dash(){
    this.router.navigate(['Firmware']);
  }
}

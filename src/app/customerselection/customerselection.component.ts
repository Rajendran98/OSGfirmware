import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { OutboundService } from '../outbound-status/outbound.service'


@Component({
  selector: 'app-customerselection',
  templateUrl: './customerselection.component.html',
  styleUrls: ['./customerselection.component.css']
})
export class CustomerselectionComponent implements OnInit {

  public mail
  constructor(private router: Router,private _auth: AuthenticationService, private outbound: OutboundService ) { }

  ngOnInit(): void {
    this.mail = localStorage.getItem('mail')
  }

  change(){
    this.router.navigate(['dashboard'])
    //  this.outbound.outbound().subscribe(
    //   res => {
    //    console.log(res)
    //   },
    //   err => console.log(err)
    // ) 
  }
}

 

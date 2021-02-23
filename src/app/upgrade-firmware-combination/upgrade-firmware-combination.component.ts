import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import {UpgradeFirmwareCombination } from '../model/model'

@Component({
  selector: 'app-upgrade-firmware-combination',
  templateUrl: './upgrade-firmware-combination.component.html',
  styleUrls: ['./upgrade-firmware-combination.component.css']
})
export class UpgradeFirmwareCombinationComponent implements OnInit {

  Upgrade:UpgradeFirmwareCombination;
  constructor() { }

  ngOnInit(): void {
    this.Upgrade ={
      javaV:'',
      CV:''
    }
  }



  public onClicking(accountForm: NgForm)
  {
   
    if(accountForm.valid)
    {
      
    }
    else
    {
      return;
    }

  }

}

import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { UploadIotFirmware} from '../model/model'

@Component({
  selector: 'app-upload-iot-firmware',
  templateUrl: './upload-iot-firmware.component.html',
  styleUrls: ['./upload-iot-firmware.component.css']
})
export class UploadIotFirmwareComponent implements OnInit {

 uploadIot:UploadIotFirmware;
  constructor() { }

  ngOnInit(): void {
    this.uploadIot={
      versionName: '',
      fileName:'',
      Type:''
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

  
  public onEdit(accountForm: NgForm)
  {
   
    if(accountForm.valid)
    {
      console.log(accountForm.value)
     console.log("validataes")
    }
    else
    {
      return;
    }

  }

  public reset(accountForm: NgForm){

    accountForm.resetForm();
  }

}

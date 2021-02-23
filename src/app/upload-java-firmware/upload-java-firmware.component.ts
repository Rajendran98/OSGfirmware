import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { UploadJavaFirmware } from '../model/model'
import { UploadJavaFirmwareService } from './service/upload-java-firmware.service';

@Component({
  selector: 'app-upload-java-firmware',
  templateUrl: './upload-java-firmware.component.html',
  styleUrls: ['./upload-java-firmware.component.css']
})
export class UploadJavaFirmwareComponent implements OnInit {

  uploadJava:UploadJavaFirmware;
  hide = true;
  constructor(private uploadJavaFirmware: UploadJavaFirmwareService ) { }

  ngOnInit(): void {
    this.uploadJava={
      Name: '',
      ServerIP: '',
      UserName: '',
      FilePath: '',
      FileSize: '',
      Password: '',
      ReleaseNote: '',
      firmwareType: '',
      filename: '',
      Port: 2222,
      IsFirmwareC: false
    }
  }

  public onClicking(accountForm: NgForm)
  {
   
    if(accountForm.valid)
    {
    this.uploadJavaFirmware.createJavaFirmware([this.uploadJava]).pipe().subscribe(data=>{
      console.log(data)
      if(data == true){
        console.log(this.uploadJava)
       alert("Value Uploaded Successfully");
       
      }
    })
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

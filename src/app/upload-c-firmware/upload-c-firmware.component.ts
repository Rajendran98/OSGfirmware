import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { from } from 'rxjs';
import {SingleCFirmwareUpload } from '../model/model'
import { EditFirmwareFileSize } from '../model/model';
import { UploadCFirmwareService } from './service/upload-c-firmware.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-c-firmware',
  templateUrl: './upload-c-firmware.component.html',
  styleUrls: ['./upload-c-firmware.component.scss']
})
export class UploadCFirmwareComponent implements OnInit {

 
  uploadC:SingleCFirmwareUpload;
  edit:EditFirmwareFileSize;
  
  hide = true;
  constructor(private uploadCFirmware: UploadCFirmwareService ,private _snackBar: MatSnackBar ,
    private router :Router) { }
  

  ngOnInit(): void {
 
    this.uploadC ={
      Name: '',
      ServerIP: '',
      UserName: '',
      FilePath: '',
      FileSize: '',
      Password: '',
      ReleaseNote: '',
      firmwareType: '',
      filename: '',
      Port: 21,
      IsFirmwareC: true
    }

    this.edit={
      versionName:'',
      fileSize:''
    }
  }

  public onClicking(uploadCForm: NgForm)
  {
   
    if(uploadCForm.valid)
    {
    this.uploadCFirmware.createCFirmware([this.uploadC]).pipe().subscribe(data=>{
      console.log(data)
      if(data == true){
        console.log(this.uploadC)
      
        this._snackBar.open("Value Uploaded Successfully","",{duration: 2000});
        this.navigation();
        //   this.router.navigate(['deviceSearch/single_device/1'])
       
      }
    })
    }
    else
    {
      return;
    }

  }

  navigation(){
    setTimeout(() =>{
      this.router.navigate(['deviceSearch/single_device/1'])
    },2000)
  }
  
  public onEdit(editForm: NgForm)
  {
   
    if(editForm.valid)
    {
     
    }
    else
    {
      return;
    }

  }

  public reset1(uploadCForm: NgForm){

    uploadCForm.reset();
  }


  public reset(editForm: NgForm){

    editForm.reset();
  }


  dash(){
    this.router.navigate(['Firmware']);
  }
}

import { Component, OnInit, AfterContentInit, AfterViewInit , AfterContentChecked} from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSort , Sort} from '@angular/material/sort'; 
import {DevicesearchService} from "./service/devicesearch.service"
import { SelectionModel } from '@angular/cdk/collections';
import { __assign } from 'tslib';
import {MatSnackBar} from '@angular/material/snack-bar';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-single-device-search',
  templateUrl: './single-device-search.component.html',
  styleUrls: ['./single-device-search.component.css']
})




export class SingleDeviceSearchComponent implements OnInit , AfterViewInit , AfterContentChecked ,AfterContentInit {


  public entries: object = [];
  public entries1: object = [];
  public Versions: object = [];

  select = false;
 sample =[];
 selectedValue: string;
  public file : File;
  fileToUpload: File;
  loadingFlag = true;
  temp = null
  id

  public publishVersion: object =[];
  
//displayedColumns: string[] = ['select','id','name','cn','np','mn1','mn2','ssd','sed','vtn','model','ccv','cjv'];
  displayedColumns: string[]=["select","GPSDeviceID","Device_Type","cn","Network_Provider","Mobile_Number","mn2","Subcription_StartDate","Subcription_EndDate","Vehicle_Type","Vehicle_Model","ccv","cjv","ignition"]
  dataSource : MatTableDataSource<any>
  selection = new SelectionModel(false, []);


// @ViewChild(MatPaginator) paginator: MatPaginator;
// @ViewChild(MatSort) sort: MatSort;
//DeviceID","Device_Type","CUSTOMER NAME","Network Provider","Mobile_Number","Mobile number2 ","Subcription_StartDate","Subcription_EndDate","Vehicle_Type","Vehicle_Model","Current C Version","Current Java Version","ignition"
//value assigned to update

  public version;
  public ServerIP;
  public FilePath
  public FileSize
  public Port
  public UserName
  public Password
  public APN
  public Device
  public FirmwareVersion
  public UserID

ngAfterContentInit(){
 

}
ngAfterViewInit() {
  
}

  constructor(private router: Router,private route: ActivatedRoute, private DevicesearchService: DevicesearchService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.DevicesearchService.searchDetails().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data)
      
        this.dataSource ? this.loadingFlag = false : this.loadingFlag = true;
      
        this.temp = this.dataSource.data.length;
      }
    )

     this.DevicesearchService.getVersionDetails().subscribe(
       data => {
        this.entries = data
        function* entries(obj) {
          for (let key of Object.keys(obj)) {
            yield [key, obj[key]];
          }
       }
  
       for (let [key1, value1] of entries(this.entries)) {

      
        if(key1 == 'SearchData'){
           
           this.Versions = value1;
        
          
        }

        // for (let [key, value] of entries(value1)) {

        // }
        
       }
       }
     ) 
    
    this.route.params.subscribe(params => {
      this.id = params['id'] -1;
    });

  

  
  }



  
  private paginator: MatPaginator;
  private sort: MatSort;
  searchKey:string;
  

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
  
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;

    this.setDataSourceAttributes();
  }


  

  setDataSourceAttributes() {
    if(this.loadingFlag == false){
    this.dataSource.paginator = this.paginator 
    this.dataSource.sort = this.sort;
  }
}

applyFilter() {
    
  this.dataSource.filter = this.searchKey.trim().toLowerCase();
}


private isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

toggleRow(row: any, index: number) {
  this.selection.toggle(row);
  console.log(row)
  for (const [key, value] of Object.entries(row)) {
    if(key == "GPSDeviceID")
    {
      this.Device = value
      // __assign(this.publishVersion,{update: [{Device: value , DeviceID: 351431}]})
      // console.log(this.publishVersion)

    }
    if(key == "Firmware_Version")
    {
      this.FirmwareVersion = value
    }
  }
}

/** The label for the checkbox on the passed row */
checkboxLabel(row?: any): string {
  if (!row) {
   
    return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
}


  ngAfterContentChecked()	{
  
  }


  changeTab(event) {
    this.id = event.index;
  }

  listed(version){
    console.log(version)
    for (const [key, value] of Object.entries(version)) {
      if(key == "Name")
      {
        this.version = value;
      }
      if(key == "ServerIP")
      {
        this.ServerIP = value;
      }
      if(key == "FilePath")
      {
        this.FilePath = value
      }
      if(key == "FileSize")
      {
        this.FileSize = value
        
    console.log(this.FileSize)
      }
      if(key == "Port"){
        this.Port= value;
      }
      if(key == "UserName"){
        this.UserName = value
      }
      if(key == "Password"){
        this.Password = value
      }
      if(key == "APN"){
        this.APN =value
      }
      if(key == "ID")
      {
        this.UserID = value
      }
    }
  }

  postData(selected){
    this.select = selected
    if(this.select == true && this.version != undefined && this.Device != undefined)
    {
      let objData = Object.assign({update: [{Device: this.Device , DeviceID: 351431 , CVersion: this.version , JavaVersion: "", ServerIP: this.ServerIP , FilePath: this.FilePath , FileSize: this.FileSize , FirmwareVersion: this.FirmwareVersion , FirmwareType: 0 , Port: this.Port , UserName: this.UserName , Password: this.Password , FirmwareUpgradeEnum: 34 , APN: this.APN , AppInstanceID: null , UserID: "2739" , Internal: false , DeviceGateway: "TDMG" , IOTDevice: ""}]})
    
      console.log(objData)
      this.DevicesearchService.PublishedVersion(objData).pipe().subscribe(data=>{
        console.log(data)
       
      this._snackBar.open(this.Device + " Updated Successfully","",{duration: 5000});
        })
      
        // this.finalPost();
    }
  

    if(this.select == false && this.version != undefined && this.Device != undefined)
    {
      let objData = Object.assign({update: [{Device: this.Device , DeviceID: 351431 , CVersion: "" , JavaVersion: this.version , ServerIP: this.ServerIP , FilePath: this.FilePath , FileSize: this.FileSize , FirmwareVersion: this.FirmwareVersion , FirmwareType: 0 , Port: this.Port , UserName: this.UserName , Password: this.Password , FirmwareUpgradeEnum: 34 , APN: this.APN , AppInstanceID: null , UserID: "2739" , Internal: false , DeviceGateway: "TDMG" , IOTDevice: ""}]})
  
        this.DevicesearchService.PublishedVersion(objData).pipe().subscribe(data=>{
          console.log(data)
          this._snackBar.open(this.Device + " Updated Successfully","",{duration: 5000});
          })
    }
    if(this.version == undefined || this.Device == undefined)
    {
      this._snackBar.open("Select Version and CheckBox To Update Version","",{duration: 5000});
    }
  
    
   
  }



  postMethod(files: FileList) {
    this.fileToUpload = files.item(0);
    if(this.fileToUpload != null){
      alert("FIle Successfully Uploaded")
    }
    //console.log(this.fileToUpload.name);
    }

    dash(){
      this.router.navigate(['Firmware']);
    }
}

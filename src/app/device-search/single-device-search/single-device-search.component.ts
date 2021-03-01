import { Component, OnInit, AfterContentInit, AfterViewInit , AfterContentChecked} from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute} from '@angular/router';
import {MatSort , Sort} from '@angular/material/sort'; 
import {DevicesearchService} from "./service/devicesearch.service"
import { SelectionModel } from '@angular/cdk/collections';
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
  public publishVersion: object;
//displayedColumns: string[] = ['select','id','name','cn','np','mn1','mn2','ssd','sed','vtn','model','ccv','cjv'];
  displayedColumns: string[]=["select","GPSDeviceID","Device_Type","cn","Network_Provider","Mobile_Number","mn2","Subcription_StartDate","Subcription_EndDate","Vehicle_Type","Vehicle_Model","ccv","cjv","ignition"]
  dataSource : MatTableDataSource<any>
  selection = new SelectionModel(false, []);
// @ViewChild(MatPaginator) paginator: MatPaginator;
// @ViewChild(MatSort) sort: MatSort;

ngAfterContentInit(){
 

}
ngAfterViewInit() {
  
}

  constructor(private route: ActivatedRoute, private DevicesearchService: DevicesearchService) { }

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


    this.publishVersion = {
    DeviceType: "tap76",
    OTAPType: "update",
    update:[
      {
        Device: "NJ042614",
        DeviceID: 351431,
        CVersion: "",
        JavaVersion: "J3202002",
        ServerIP: "http://13.228.224.113/J3202002/TAP66.jad",
        FilePath: "J3202002",
        FileSize: "0",
        FirmwareVersion: "J3202002",
        FirmwareType: 0,
        Port: 2222,
        UserName: null,
        Password: null,
        FirmwareUpgradeEnum: 34,
        APN: "m2m.trimble.com",
        AppInstanceID: null,
        UserID: "2739",
        Internal: false,
        DeviceGateway: "TDMG",
        IOTDevice: ""
      }
    ]}
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

  postData(){
    console.log(this.publishVersion)
      
    this.DevicesearchService.PublishedVersion(this.publishVersion).pipe().subscribe(data=>{
      console.log(data)
  
    })
  }


  postMethod(files: FileList) {
    this.fileToUpload = files.item(0);
    if(this.fileToUpload != null){
      alert("FIle Successfully Uploaded")
    }
    //console.log(this.fileToUpload.name);
    }
}

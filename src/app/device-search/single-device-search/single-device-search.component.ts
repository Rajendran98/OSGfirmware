import { Component, OnInit, AfterContentInit, AfterViewInit , AfterContentChecked} from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute} from '@angular/router';
import {MatSort , Sort} from '@angular/material/sort'; 
import {DevicesearchService} from "./service/devicesearch.service"

@Component({
  selector: 'app-single-device-search',
  templateUrl: './single-device-search.component.html',
  styleUrls: ['./single-device-search.component.css']
})

export class SingleDeviceSearchComponent implements OnInit , AfterViewInit , AfterContentChecked ,AfterContentInit {

   
  public file : File;
  fileToUpload: File;
  loadingFlag = true;
  temp = null
  id
//displayedColumns: string[] = ['select','id','name','cn','np','mn1','mn2','ssd','sed','vtn','model','ccv','cjv'];
  displayedColumns: string[]=["select","GPSDeviceID","Device_Type","cn","Network_Provider","Mobile_Number","mn2","Subcription_StartDate","Subcription_EndDate","Vehicle_Type","Vehicle_Model","ccv","cjv","ignition"]
  dataSource : MatTableDataSource<any>

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
        console.log(data)
        this.temp = this.dataSource.data.length;
      }
    )

  
    
    this.route.params.subscribe(params => {
      this.id = params['id'] -1;
    });
  }



  
  private paginator: MatPaginator;
  private sort: MatSort;


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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterContentChecked()	{
  
  }


  changeTab(event) {
    this.id = event.index;
  }


  postMethod(files: FileList) {
    this.fileToUpload = files.item(0);
    if(this.fileToUpload != null){
      alert("FIle Successfully Uploaded")
    }
    //console.log(this.fileToUpload.name);
    }
}

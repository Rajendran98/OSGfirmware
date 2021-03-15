import { Component, OnInit, AfterContentInit, AfterViewInit , AfterContentChecked} from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSort , Sort} from '@angular/material/sort'; 


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];



@Component({
  selector: 'app-other-otap-command',
  templateUrl: './other-otap-command.component.html',
  styleUrls: ['./other-otap-command.component.css']
})
export class OtherOTAPCommandComponent implements OnInit , AfterViewInit , AfterContentChecked ,AfterContentInit {

  public file : File;
  fileToUpload: File;
  id = 0;
  tabIndex = 0;
  //displayedColumns: string[] = ['select','id','name','cn','np','mn1','mn2','ssd','sed','vtn','model','ccv','cjv'];
  displayedColumns: string[]=["select","position","name","cn","symbol","weight","mn2","ssd","sed","vtn","model"]
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;

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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  ngAfterContentInit(){
   
  
  }
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
   // this.dataSource.sort = this.sort;
  }
  
    constructor(private route: ActivatedRoute,private router: Router) { }
  
    ngOnInit(): void {
    
    }
  
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  
    ngAfterContentChecked()	{
      //setTimeout(() => this.dataSource.paginator = this.paginator);
    }
  
  
    changeTab(event) {
      console.log(this.id)
      this.tabIndex = event.index;
    }

    postMethod(files: FileList) {
      this.fileToUpload = files.item(0);
      //console.log(this.fileToUpload.name);
      if(this.fileToUpload != null){
        alert("FIle Successfully Uploaded")
      }
      }
      dash(){
        this.router.navigate(['Firmware']);
      }
  }
  

import { Component,Inject, OnInit, AfterContentInit, AfterViewInit , AfterContentChecked} from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSort , Sort} from '@angular/material/sort'; 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import {Apollo , QueryRef} from 'apollo-angular';
import gql from "graphql-tag";
import { map, shareReplay } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs'
import { error } from 'selenium-webdriver';
import { stringify } from '@angular/compiler/src/util';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SelectionModel } from '@angular/cdk/collections';
import {UpgradecommandService} from './service/upgradecommand.service'
import { MatTableExporterDirective } from 'mat-table-exporter';

export type otherotapcommand ={
  DeviceID:Number;
  DeviceType:String;
  Customer:String;
  NetworkProvider:String;
  MobileNo:Number;
  Model:String;
  VehicleTypeName:String;
  CurrentCVersion:String;
  CurrentJavaVersion:String;
  Ignition:String;
}


export type DataQuery ={
  otherotapcommand:otherotapcommand[]
}


export type otapcommand = {
  DeviceID:String;
  PacketID:Number;
  Name:String;
  Message:String
}
export type DataQuery1 ={
  otapcommand:otapcommand[]
}

const UPVOTE_POST = gql`

mutation addotapcommand($PacketID:Int! ,$DeviceID: String!, $Name: String!,$Message: String!) {
  addotapcommand (PacketID: $PacketID,DeviceID: $DeviceID,Name: $Name,Message: $Message ){
    PacketID
    DeviceID
    Name
    Message
  }
}
`;


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
  loadingFlag = true;
  temp = null
  messages:object =[];
  //displayedColumns: string[] = ['select','id','name','cn','np','mn1','mn2','ssd','sed','vtn','model','ccv','cjv'];
  displayedColumns: string[]=["select","DeviceID","DeviceType","Customer","NetworkProvider","MobileNo","Model","VehicleTypeName","CurrentCVersion","CurrentJavaVersion","Ignition"]
  dataSource : MatTableDataSource<any>
  selection = new SelectionModel(false, []);


  public device;
  public messageFormat;
  public messageName;
  
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;

  private paginator: MatPaginator;
  private sort: MatSort;

  @ViewChild(MatTableExporterDirective, { static: false }) exporter: MatTableExporterDirective;
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
  
  ngAfterContentInit(){
   
  
  }
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
   // this.dataSource.sort = this.sort;
  }
  
    constructor(private route: ActivatedRoute, private UpgradecommandService: UpgradecommandService, private _snackBar: MatSnackBar ,private router: Router,public dialog: MatDialog,private apollo: Apollo) { }
  
    ngOnInit(): void {
    
      
      const source$ = this.apollo.query<DataQuery>({
        query: gql`
        {
          otherotapcommand {
              DeviceID
              DeviceType
              Customer
              NetworkProvider
              MobileNo
              Model
              VehicleTypeName
              CurrentCVersion
              CurrentJavaVersion
              Ignition
            }
        }`
        
      }).pipe(shareReplay(1))

 source$.pipe(map(result => result.data && result.data.otherotapcommand)).subscribe((data) =>   
    this.dataSource = new MatTableDataSource(data)
    );

    setTimeout(() =>{
      this.dataSource ? this.loadingFlag = false : this.loadingFlag = true;
           this.temp = this.dataSource.data.length;
    },1000)
          
          

    const source1$ = this.apollo.query<DataQuery1>({
      query: gql`
      {
        otapcommand{
          Message
          Name
          DeviceID
          PacketID
        }
      }`
      
    }).pipe(shareReplay(1))

source1$.pipe(map(result => result.data && result.data.otapcommand)).subscribe((data) =>   
 this.messages = data
  );

  
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
     
      if(this.fileToUpload != null){
        alert("FIle Successfully Uploaded")
      }
      }
      dash(){
        this.router.navigate(['Firmware']);
      }

      private isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
      }

      toggleRow(row: any, index: number) {
        this.selection.toggle(row);
        this.exporter.toggleRow(index);
        console.log(row)
        for (const [key, value] of Object.entries(row)) {
          if(key == "DeviceID"){
            this.device = value
            console.log(this.device)
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
      

      listed(version){
        console.log(version)
        for (const [key, value] of Object.entries(version)) {

          if(key == "Message"){
            this.messageFormat = value
          }
          if(key == "Name"){
            this.messageName = value
          }

        }
      }

      PostData(){
        if(this.device == undefined || this.messageName == undefined)
        {
          this._snackBar.open("Select Command and CheckBox To Upgrade Command","",{duration: 5000});
        }
        if(this.device != undefined && this.messageName != undefined)
        {
          let objData = Object.assign({update: [{Device: this.device , DeviceID: 351431 , MessageFormat: this.messageFormat , FirmwareUpgradeEnum: 17 , IOTDevice: "" , MessageName: this.messageName , AppInstanceID: null , DeviceGateway: "TDMG" , UserID: 2739}]});
          console.log(objData)
          this.UpgradecommandService.PublishedVersion(objData).pipe().subscribe(data=>{
          console.log(data)
          this._snackBar.open(this.device + " Updated Successfully","",{duration: 5000});
          },
          (error) => this._snackBar.open("DeviceID Mismatch","",{duration: 5000})
          )
        }
      }
      

      AddCommand(): void {
        const dialogRef = this.dialog.open(addCommand, {
          width: '400px',
          data: { }
        });
    
       dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
 
        });

      }
  }



  @Component({
    selector: 'addCommand',
    templateUrl: 'addCommand.html',
  })
  export class addCommand {
    public deviceId;
    public packetId;
    public name;
    public message;
  
    constructor(private apollo: Apollo,private _snackBar: MatSnackBar ,
      public dialogRef: MatDialogRef<addCommand>,
      @Inject(MAT_DIALOG_DATA) public data: []) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    AddCommand(addCommandForm: NgForm){
      if(addCommandForm.valid){
        console.log(addCommandForm.value)

        this.apollo.mutate({
          mutation: UPVOTE_POST,
          variables: 
          {
            PacketID:this.packetId,
            DeviceID:this.deviceId,
            Name: this.name,
            Message: this.message
          }
        }).subscribe(({data }) => {
          this._snackBar.open("Value Uploaded Successfully","",{duration: 2000});
        },
        (error) => this._snackBar.open("DeviceID Not Found","",{duration: 2000})
        )
        

   
        
      }
      else{
        return
      }

    }
  
  }
  
  

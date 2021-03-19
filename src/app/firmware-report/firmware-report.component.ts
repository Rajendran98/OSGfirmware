import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
 
import { ExportToCsv } from 'export-to-csv';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-firmware-report',
  templateUrl: './firmware-report.component.html',
  styleUrls: ['./firmware-report.component.css']
})
export class FirmwareReportComponent implements OnInit {

  public searchedData
  public listArray
  public entries: object = [];
  constructor(private router:Router, private _snackBar: MatSnackBar , private http: HttpClient) { }

  ngOnInit(): void {
  }

  dash(){
    this.router.navigate(['Firmware']);
  }

  search(val){
    if(val != undefined)
    {
      this.listArray = val.split(',');
      //  console.log(this.listArray)
          this.http.get<object>(`http://localhost:3000/devicetype/${this.listArray}`)
        .subscribe((data) => {
         this.entries = data;
         console.log(this.entries)
         this.download();
        },
        (error) => {
          console.log(error)
          this._snackBar.open("Device ID Not Found","",{duration: 2000});
        }
        );
    }
}

  download(){
    const options = { 
      filename: 'Firmware Report',
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true, 
      showTitle: false,
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
     
    };
   
  const csvExporter = new ExportToCsv(options);
   
  csvExporter.generateCsv(this.entries);
  }
}

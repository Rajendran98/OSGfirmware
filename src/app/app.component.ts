import { Component,OnInit  } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { Router } from '@angular/router';
import { Firmware } from './model/model';
import {Apollo , QueryRef} from 'apollo-angular';
import gql from "graphql-tag";
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs'

export interface Fruit {
  name: string;
}

// export interface devicetype{
//   ID:Number;
//   DeviceType:String;
//   IsActive:Boolean;
// }




// const QUERY = gql`
// {
//   devicetype {
//     ID
//     DeviceType
//     IsActive
//   }
// }
// `;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'osg';
  public firmwares: Firmware;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  firmwareValues: string[];
  
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];
  
query$: Observable<any>;
  constructor(
    private router: Router,private apollo: Apollo) {
      this.firmwares = new Firmware();
      this.firmwareValues = this.firmwares.name;
     }

     ngOnInit() {

      const source$ = this.apollo.query({
        query: gql`
        {
          devicetype {
            ID
            DeviceType
            IsActive
          }
        }`
        
      }).pipe(shareReplay(1))
      
      this.query$ = source$.pipe(map(result => result.data && result.data.devicetype));
      console.log(this.query$)
      // this.query$ = this.apollo
      // .watchQuery<any>({
      //   query: QUERY,
      // })
      // .valueChanges.pipe(map(result => result.data && result.data.devicetypes));
      // console.log(this.query$)
  }

     

     element: HTMLElement;
     toggleActive(event:any){
      
      event.preventDefault();
      if(this.element !== undefined){
        this.element.style.backgroundColor = "white";
        this.element.style.color = "#666666";
      } 
      var target = event.currentTarget;
      target.style.backgroundColor = "#005F9E";
      target.style.color = "white"
      this.element = target;
    }

    dashboard(){
      this.router.navigate(['dashboard']);
      console.log('dashboard');
    }
    
    firmware(){
      this.router.navigate(['Firmware']);
      console.log('Firmware Dashboard');
    }
    
    add(event: MatChipInputEvent): void {
      const input = event.input;
      const value = event.value;
  
      // Add our fruit
      if ((value || '').trim()) {
        this.fruits.push({name: value.trim()});
      }
  
      // Reset the input value
      if (input) {
        input.value = '';
      }
    }
  
    remove(fruit: Fruit): void {
      const index = this.fruits.indexOf(fruit);
  
      if (index >= 0) {
        this.fruits.splice(index, 1);
      }
    }

    deviceSearch(device) {
      this.router.navigate(['/deviceSearch', device])
    }




    
}

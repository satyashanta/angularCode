import { Component } from '@angular/core';
import {Employee} from './employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-learning';
  movie= 'lord of the rings';
  Employee={id:1,name:"satya",salary:100000, permanent:false,Department:{id:1,name:"payroll"},Skill:[{id:1,name:"java"},{id:2,name:"angular"},{id:3,name:"CSS"}],dob:new Date('10/02/1999')};
  
}

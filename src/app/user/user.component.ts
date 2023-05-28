import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
componentName="User";

mySum(a:number,b:number):number
{
return a+b;

}
}

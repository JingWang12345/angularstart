import { Component,OnInit,AfterViewInit,OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(){
    console.log("1)HEò");

      }

      ngOnInit(){
       console.log("2)hELLO" );

      }
      ngAfterViewInit(): void {
        console.log("3)Hello i am in afterviewinit");

      }
      ngOnDestroy(){
        console.log("4)Hello i am");

    }
}

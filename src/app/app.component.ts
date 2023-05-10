import { Component,OnInit,AfterViewInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit,OnDestroy {
  title = 'Jing';
  public firstName:string='Jing';
  public email:string='wangjing061993@gmail.com';

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
saySomething(){
 alert("Button Pressed");
}
}

import { Component, OnInit } from '@angular/core';
import { roundedDecorator } from '../../decorators/roundedDecorator';
import { environment } from '../../../environments/environment';
import { execTimeDecorator } from '../../decorators/execTimeDecorator';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  name = 'Prashant';
  result:number;
  operator = "";
  title = 'Card title';
  showCard=true;
  myVar:Array<boolean>;
  myObj = {
    key1: "value1"
  };
  
  @roundedDecorator(10) ceilNum1:number = 5.3;
  @roundedDecorator() ceilNum2:number;

  constructor() { }

  ngOnInit(): void {
    console.log(environment.test);
  }

  getInputName(value:string){
    console.log('value -> ', value);
    this.name = value;
  }

  calculate(firstValue:string, secondValue:string, operation:string){
    if(firstValue != "" && secondValue != "")
    {
      switch (operation) {
        case "plus":
          this.operator = "+";
          this.result = parseInt(firstValue) + parseInt(secondValue);
          break;
        case "minus":
          this.operator = "-";
          this.result = parseInt(firstValue) - parseInt(secondValue);
          break;
        case "times":
          this.operator = "*";
          this.result = parseInt(firstValue) * parseInt(secondValue);
          break;
        case "divide":
          this.operator = "/";
          this.result = parseInt(firstValue) / parseInt(secondValue);
          break;
        default:
          break;
      }
    }
    else{
      this.result = 0;
    }
  }

  addition(firstValue:string, secondValue:string){
    if(firstValue != "" && secondValue != "")
    {
      this.operator = "+";
      this.result = parseInt(firstValue) + parseInt(secondValue);
    }
    else{
      this.result = 0;
    }
  }

  subtraction(firstValue:string, secondValue:string){
    if(firstValue != "" && secondValue != "")
    {
      this.operator = "-";
      this.result = parseInt(firstValue) - parseInt(secondValue);
    }
    else{
      this.result = 0;
    }
  }

  multiply(firstValue:string, secondValue:string){
    if(firstValue != "" && secondValue != "")
    {
      this.operator = "*";
      this.result = parseInt(firstValue) * parseInt(secondValue);
    }
    else{
      this.result = 0;
    }
  }

  divide(firstValue:string, secondValue:string){
    if(firstValue != "" && secondValue != "")
    {
      this.operator = "/";
      this.result = parseInt(firstValue) / parseInt(secondValue);
    }
    else{
      this.result = 0;
    }
  }

  @execTimeDecorator
  showResult(num1,num2,operation){
    this[operation](num1,num2);
    //this.longRunningMethod();
  }

  toggleCard(){
    this.showCard= !this.showCard;
  }

  longRunningMethod() {
    let arrayCount = 5000;
    let dynamicArrays = [];
    for(let j=0;j<arrayCount;j++)
        dynamicArrays[j] = [];
    let lastLongI = 1;
    for(let i=0;i<5000;i++){
        for(let j=0;j<arrayCount;j++) dynamicArrays[j][i] = i;
    }
  }

}

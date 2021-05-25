import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

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

  showResult(num1,num2,operation){
    this[operation](num1,num2);
  }

  toggleCard(){
    this.showCard= !this.showCard;
  }

}

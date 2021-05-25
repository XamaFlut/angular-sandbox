import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { StorageService } from '../../services/storage.service';
import { Car } from '../../models/car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  //carList:Car[] = [];
  showCard=true;

  constructor(
    public dataService: DataService,
    public storageService: StorageService) { 
  }

  ngOnInit(): void {
    this.carList == undefined || this.carList.length == 0? this.dataService.seedCars() : "";
  }

  deleteCar(ref){
    this.carList = this.carList.filter(car => car.ref != ref);
  }

  toggleCard(){
    this.showCard = true;
  }

  toggleTable(){
    this.showCard = false;
  }

  set carList(value){
    this.storageService.set("Cars", value);
  }

  get carList():Car[]{
    return this.storageService.get("Cars");
  }
}

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

  filteredCarList:Car[] = [];
  showCard=true;
  searchText:string;

  constructor(
    public dataService: DataService,
    public storageService: StorageService) { 
  }

  ngOnInit(): void {
    this.carList == undefined || this.carList.length == 0? this.dataService.seedCars() : "";
    this.filteredCarList = this.carList;
  }

  deleteCar(ref){
    this.carList = this.carList.filter(car => car.ref != ref);
    this.filteredCarList = this.carList;
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

  search(){
    const searchTextLower = this.searchText.toLowerCase();
    if(this.searchText){
      this.filteredCarList = this.carList.filter(car => 
        car.name.toLowerCase().includes(searchTextLower) ||
        car.desc_excerpt.toLowerCase().includes(searchTextLower));
      return;
    }
    this.filteredCarList = this.carList;
  }

  clearSearchBox(){
    this.searchText = "";
    this.filteredCarList = this.carList; 
  }
}

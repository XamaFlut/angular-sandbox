import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { StorageService } from '../../services/storage.service';
import { Car } from '../../models/car';
import { SettingsService } from '../../services/settings.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  carList: Car[];
  filteredCarList:Car[] = [];
  showCard=true;
  searchText:string;
  toModal = "Vat 18%";
  currentTheme = 'light';

  constructor(
    public dataService: DataService,
    public storageService: StorageService,
    public settingsService: SettingsService,
    public apiService: ApiService
    ) { 
  }

  ngOnInit(): void {
    this.currentTheme = this.settingsService.theme;
    this.settingsService.outsetTheme.subscribe(result => {
      this.currentTheme = result;
    });
    
    // this.arrayMap();
    // this.arrayReducer();
    this.apiService.request('carList', 'get').subscribe( result => {
      this.carList = result['data'];
      this.filteredCarList = this.carList;
      const favourites = this.storageService.get('favourites');
      if(favourites){
        this.filteredCarList = this.carList.map(c => ({ ...c, is_favourite: favourites.Car.includes(c._id) }));
      }
    });
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

  // set carList(value){
  //   this.storageService.set("Cars", value);
  // }

  // get carList():Car[]{
  //   return this.storageService.get("Cars");
  // }

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
    this.search();
  }

  arrayMap(){
    const myArray=[1,2,3,4,5];
    const mapped = myArray.map(x => x*x);
    console.log("Mapped", mapped);
  }

  arrayReducer(){
    const myArray=[1,2,3,4,5];
    const reduced = myArray.reduce((accumulator, currentValue)=> accumulator+currentValue);
    console.log("reduced", reduced);

    const name = "PRASHANT";
    const result = name.split('').reverse().join('');
    console.log("result: ", result);

    const phrase = "Ler dezener la.. Christophe pas p laiss manzer, Mo faim.";
    const final = phrase.split(".").join();
    console.log("final: ", final);

  }
}

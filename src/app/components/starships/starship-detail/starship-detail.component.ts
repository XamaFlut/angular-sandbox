import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Starship } from '../../../models/starship';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss']
})
export class StarshipDetailComponent implements OnInit {

  starshipId = '';
  starshipDetails: Starship;
  starshipKeys;
  blacklist = ['name', 'pilots', 'films', 'url'];
  labels = {
    name: 'Name',
    model: 'Model', 
    manufacturer: 'Manufacturer', 
    cost_in_credits: 'Cost (Credits)', 
    length: 'Length', 
    max_atmosphering_speed: 'MAS', 
    crew: 'Crew', 
    passengers: 'Passengers', 
    cargo_capacity: 'Cargo Capacity', 
    consumables: 'Consumables', 
    hyperdrive_rating: 'Hyperdrive Rating', 
    MGLT: 'MGLT', 
    starship_class: 'Class', 
    created: 'Created', 
    edited: 'Edited',
   };

  constructor(
    public apiService: ApiService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.starshipId = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.getStarship();
  }

  getStarship(){
    this.apiService.request('starshipDetails', 'get', this.starshipId).subscribe(result => {
      this.starshipDetails = result;
      this.starshipKeys = Object.keys(this.starshipDetails);
      console.log('Starship keys: ', this.starshipKeys)
    });
  }

}

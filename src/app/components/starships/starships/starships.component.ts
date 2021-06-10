import { Component, OnInit } from '@angular/core';
import { Starship } from '../../../models/starship';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  starships: Starship[] = [];

  constructor(
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getStarships();
  }

  getStarships(){
    this.apiService.request('starshipList', 'get').subscribe(result => {
      this.starships = result['results'];
      console.log('Starships: ', this.starships);
    });
  }

}

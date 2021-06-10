import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
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
    public apiService: ApiService,
    public storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.getStarships();
  }

  getStarships(){
    this.apiService.request('starshipList', 'get').subscribe(result => {
      this.starships = result['results'];
      const favourites = this.storageService.get('favourites');
      if(favourites){
        this.starships = this.starships.map(s => ({ ...s, is_favourite: favourites.Starship.includes(s.url) }));
      }
    });
  }

}

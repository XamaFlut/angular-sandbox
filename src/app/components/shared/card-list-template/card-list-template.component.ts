import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'card-list-template',
  templateUrl: './card-list-template.component.html',
  styleUrls: ['./card-list-template.component.scss']
})
export class CardListTemplateComponent implements OnInit {

  @Input() list;
  @Input() entity;

  constructor(
    private router: Router,
    public storageService: StorageService
  ) { }

  ngOnInit(): void {

  }

  openStarship(url){
    const starshipId = url.split('/')[5];
    this.router.navigate(['/starships/', starshipId]);
  }

  setFavourite(id){
    let favourites = this.storageService.get('favourites');
    if(!favourites){
      favourites = {
        Car: [],
        User: [],
        Starship: []
      };
    }
    this.updateFavourite(id, true);
    favourites[this.entity] = [...favourites[this.entity], id];
    console.log('Favourites: ', favourites);
    this.storageService.set('favourites', favourites);
  }

  unsetFavourite(id){
    Swal.fire("Hey!", `Are you sure you wish to unlike this ${this.entity}?`, 'warning').then((result) => {
      if(result.value){
        this.updateFavourite(id, false);
        let favourites = this.storageService.get('favourites');
        favourites[this.entity] = favourites[this.entity].filter(e => e !== id);
        this.storageService.set('favourites', favourites);
        Swal.fire('Bummer!', `${this.entity} was unliked`, 'info');
      }
    });
  }

  updateFavourite(id, isFavourite){
    if(this.entity == 'Car' || this.entity == 'User'){
      this.list.find(i => i._id == id).is_favourite = isFavourite;
    }
    if(this.entity == 'Starship'){
      this.list.find(i => i.url == id).is_favourite = isFavourite;
    }
  }
}

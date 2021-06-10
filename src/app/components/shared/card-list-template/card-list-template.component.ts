import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card-list-template',
  templateUrl: './card-list-template.component.html',
  styleUrls: ['./card-list-template.component.scss']
})
export class CardListTemplateComponent implements OnInit {

  @Input() list;
  @Input() entity;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  openStarship(url){
    const starshipId = url.split('/')[5];
    this.router.navigate(['/starships/', starshipId]);
  }

}

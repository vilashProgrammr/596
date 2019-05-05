import { Component, OnInit } from '@angular/core';
import { MarvelService } from './services/marvel.service';
import { Character } from './models/character.model';
import { MarvelResponse } from './models/marvel.model';

@Component({
  selector: 'app-root',
  templateUrl: './views/app.component.html',
  providers: [
    MarvelService
  ]
})
export class AppComponent implements OnInit {
  title: string = "Search your Marvel SuperHero";
  attribution : string;
  characters : Character[] = [];
  shown : number = 10;
  total : number = null;
  filter : string = "spider";
  constructor(private _marvelService : MarvelService) {}
  async ngOnInit() {
    await this.refreshList();
  }
  async refreshList() {
    let response : MarvelResponse<Character> = await this._marvelService.getCharacters(this.shown, this.filter);
    this.characters = response.data.results;
    this.total = response.data.total;
    this.attribution = response.attributionHTML;
  }
}
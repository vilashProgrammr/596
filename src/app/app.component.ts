import { Component, OnInit, ViewChild } from '@angular/core';
import { MarvelService } from './services/marvel.service';
import { Comic } from './models/comic.model';
import { MarvelResponse } from './models/marvel.model';

@Component({
  selector: 'app-root',
  templateUrl: './views/app.component.html',
  providers: [
    MarvelService
  ]
})
export class AppComponent implements OnInit {
  title: string = "Search your Marvel Comics";
  attribution : string;
  isLoading: boolean = false;
  comics : Comic[] = [];
  selectedComic: Comic;
  shown : number = 20;
  year : number = 0;
  total : number = null;
  filter : string = "spider";
  @ViewChild('staticModal') staticModal;

  constructor(private _marvelService : MarvelService) {}
  async ngOnInit() {
    await this.refreshList();
  }
  async refreshList() {
    this.isLoading = true
    let response : MarvelResponse<Comic> = await this._marvelService.getComics(this.shown, this.filter, this. year);
    this.comics = response.data.results.map(item => {
      item.thumbnail.path = item.thumbnail.path.replace('http', 'https');
      item.saleDate = item['dates'].find(dateItem => dateItem.type === 'onsaleDate')
      item.price = item['prices'].find(price => price.type === 'printPrice')
      return item;
    });
    this.total = response.data.total;
    this.attribution = response.attributionHTML;
    this.isLoading = false
  }
  openModal(index) {
    this.selectedComic = this.comics[index]
    this.staticModal.show()
  }
}

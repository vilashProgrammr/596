import 'rxjs/add/operator/toPromise';
import { Md5 } from 'ts-md5/dist/md5'
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';
import { MarvelResponse } from '../models/marvel.model';

@Injectable()
export class MarvelService {
    private _marvelCharacterUrl : string = "https://gateway.marvel.com:443/v1/public/characters";
    private _publicKey : string = "c4b5296bc35888971631d22848916410";
    private _privateKey : string = "fddd97e16368b2fee706a1f6de69f30f191467d3";
    constructor(private _httpService : Http) {}
    private getHash(timeStamp : string) : string {
        let hashGenerator : Md5 = new Md5();
        hashGenerator.appendStr(timeStamp);
        hashGenerator.appendStr(this._privateKey);
        hashGenerator.appendStr(this._publicKey);
        let hash : string = hashGenerator.end().toString();
        return hash;
    }
    private getTimeStamp() : string {
        return new Date().valueOf().toString();
    }    
    public async getCharacters(limit : number = 10, prefix : string = null) : Promise<MarvelResponse<Character>> {
        let timeStamp = this.getTimeStamp();
        let hash = this.getHash(timeStamp);
        let requestUrl = this._marvelCharacterUrl + "?limit=" + limit + "&ts=" + timeStamp + "&apikey=" + this._publicKey + "&hash=" + hash;
        if (prefix) {
            requestUrl += "&nameStartsWith=" + prefix;
        }
        let response = await this._httpService.get(requestUrl).toPromise();
        return response.json();
    }
}

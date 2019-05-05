import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Origin } from '../models/origin.model';

@Injectable()
export class HttpBinService {
    private _httpBinUrl : string = "http://httpbin.org/delay/";

    constructor(private _http : Http) {}

    async getOriginData(delay : number = 3): Promise<Origin> {
        let response = await this._http.get(this._httpBinUrl + delay).toPromise();
        return response.json();
    }
}
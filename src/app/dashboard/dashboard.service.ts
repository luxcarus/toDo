import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DashboardService {

    url: string = 'http://testing-ground.scraping.pro/login?mode=login&usr=admin&pwd=12345';
    // constructor(){}
    constructor(private http:Http){}

    getList():void{
        console.log("DASH!!!");
    // return this.http.get    (this.url)
    //           .toPromise()
    //           .then(response => response.json().data)
    }

};
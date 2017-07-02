import {Injectable} from '@angular/core';
import {User} from './user';
import { Headers, Http} from '@angular/http';

// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class GatemanService {

    url: string = 'http://testing-ground.scraping.pro/login?mode=login&usr=admin&pwd=12345';

    constructor(private http:Http,private headers:Headers){}
    /*
    signIn(): Observable<User[]> {
      return this.http
                  .post(this.url, JSON.stringify({name: name}), {headers: this.headers})
                  .map(response => response.json().data as User[]);
    }
    */
    
    // import 'rxjs/add/operator/toPromise';
    signIn(): Promise<User[]> {
    return this.http.post(this.url, JSON.stringify({name: name}), {headers: this.headers})
              .toPromise()
              .then(response => response.json().data as User[])
              .catch(this.handleError);
    }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


};
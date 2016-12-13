import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const BASE_URL = 'http://localhost:3001/api';

@Injectable()
export class BeerData {

  constructor(public http: Http) {}

  load() {
    return this.http.get(BASE_URL+'/takebeers')
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  saveBeer(beer){
    console.log(beer);
      this.http.post(BASE_URL+'/pushbeer', beer).subscribe(
        response => this.load(),
        error => this.handleError(error)
      );
  }

  updateBeer(beer, beerId){
    return this.http.put(BASE_URL+'/update/'+beerId, beer)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  handleError(error: any){
    console.log(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }

}

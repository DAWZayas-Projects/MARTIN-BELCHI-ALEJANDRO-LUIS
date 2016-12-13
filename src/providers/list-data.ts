import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const BASE_URL = 'http://localhost:3001/api';

@Injectable()
export class ListData {

  constructor(public http: Http) {}

  load() {
    return this.http.get(BASE_URL+'/takelists')
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  saveList(list) {
    console.log(list);
      this.http.post(BASE_URL+'/pushlist', list).subscribe(
        response => console.log(response),
        error => this.handleError(error)
      );
  }

  updateList(list) {
    this.http.put(BASE_URL+'/updatelist/'+list._id, list).subscribe(
      response => console.log(response),
      error => this.handleError(error)
    );
  }

  deleteList(id) {
    this.http.delete(BASE_URL+'/deletelist/'+id).subscribe(
      response => console.log(response),
      error => this.handleError(error)
    );
  }

  handleError(error: any){
    console.log(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }

}

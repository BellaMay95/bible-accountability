import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class ReadingListService {
  reading: any;
  authToken: any;

  private oldTestament: any; 
  private newTestament: any; 

  constructor(private http: Http) { }

  getOldTestament() {
    //return this.oldTestament;
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    //return this.http.get('http://localhost:3000/reading/oldbooks', {headers: headers})
    //  .map(res => res.json());
    return this.http.get('reading/oldbooks', {headers: headers})
      .map(res => res.json());
  }
  getNewTestament() {
    //return this.newTestament;
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    //return this.http.get('http://localhost:3000/reading/newbooks', {headers: headers})
    //  .map(res => res.json());
    return this.http.get('reading/newbooks', {headers: headers})
      .map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  saveReading(reading) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //return this.http.post('http://localhost:3000/reading/save', reading, {headers: headers})
    //  .map(res => res.json());
    return this.http.post('reading/save', reading, {headers: headers})
      .map(res => res.json());
  }

  getReadingLog() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    //return this.http.get('http://localhost:3000/reading/load', {headers: headers})
    //  .map(res => res.json());
    return this.http.get('reading/load', {headers: headers})
      .map(res => res.json());
  }
}

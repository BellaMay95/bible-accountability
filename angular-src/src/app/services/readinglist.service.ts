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
    return this.http.get('http://localhost:8080/reading/oldbooks', {headers: headers}).map(res => res.json());
    //return this.http.get('reading/oldbooks', {headers: headers}).map(res => res.json());
  }
  getNewTestament() {
    //return this.newTestament;
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/reading/newbooks', {headers: headers}).map(res => res.json());
    //return this.http.get('reading/newbooks', {headers: headers}).map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  saveReading(reading) {
    let user = JSON.parse(localStorage.getItem('user'));
    reading.id = user.id;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/reading/save', reading, {headers: headers}).map(res => res.json());
    //return this.http.post('reading/save', reading, {headers: headers}).map(res => res.json());
  }

  removeReading(item) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/reading/remove', item, {headers: headers}).map(res => res.json());
    //return this.http.post('reading/remove', item, {headers: headers}).map(res => res.json());
  }

  getReadingLog() {
    let user = JSON.parse(localStorage.getItem('user'));
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    headers.append('User_Id', user.id);
    return this.http.get('http://localhost:8080/reading/load', {headers: headers}).map(res => res.json());
    //return this.http.get('reading/load', {headers: headers}).map(res => res.json());
  }
}

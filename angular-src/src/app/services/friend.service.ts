import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class FriendService {
  authToken: any;

  constructor(private http: Http) { }

  getUserList() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    //return this.http.get('http://localhost:8080/users/userlist', {headers: headers})
    //  .map(res => res.json());
    return this.http.get('users/userlist', {headers: headers})
      .map(res => res.json());
  }

  submitFriendRequest(friend) {
    let user = JSON.parse(localStorage.getItem('user'));
    let requestObj: Object = {
      sendUser: user,
      friendUser: friend,
      timestamp: new Date()
    };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //return this.http.post('http://localhost:8080/friend/sendRequest', requestObj, {headers: headers})
    //  .map(res => res.json());
    return this.http.post('friend/sendRequest', requestObj, {headers: headers})
      .map(res => res.json());
  }

  getSubReq() {
    let user = JSON.parse(localStorage.getItem('user'));
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    headers.append('User_Id', user.id);
    //return this.http.get('http://localhost:8080/friend/getsubpending', {headers: headers})
    //  .map(res => res.json());
    return this.http.get('friend/getsubpending', {headers: headers})
      .map(res => res.json());
  }

  getRecvReq() {
    let user = JSON.parse(localStorage.getItem('user'));
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    headers.append('User_Id', user.id);
    //return this.http.get('http://localhost:8080/friend/getrecvpending', {headers: headers})
    //  .map(res => res.json());
    return this.http.get('friend/getrecvpending', {headers: headers})
      .map(res => res.json());
  }

  rejectRequest(request) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //return this.http.post('http://localhost:8080/friend/rejrequest', request, {headers: headers})
    //  .map(res => res.json());
    return this.http.post('friend/rejrequest', request, {headers: headers})
      .map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  isFriend() {

  }
}

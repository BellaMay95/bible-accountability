import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class FriendService {
  authToken: any;
  friend: boolean;

  constructor(private http: Http, private route: ActivatedRoute) { }

  getUserList() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    //return this.http.get('http://localhost:8080/users/userlist', {headers: headers}).map(res => res.json());
    return this.http.get('users/userlist', {headers: headers}).map(res => res.json());
  }

  submitFriendRequest(friend) {
    let user = JSON.parse(localStorage.getItem('user'));
    let requestObj: Object = {
      sendUser: user,
      friendUser: friend,
      timestamp: new Date()
    };
    //alert(JSON.stringify(requestObj));
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //return this.http.post('http://localhost:8080/friend/sendRequest', requestObj, {headers: headers}).map(res => res.json());
    return this.http.post('friend/sendRequest', requestObj, {headers: headers}).map(res => res.json());
  }

  getSubReq() {
    let user = JSON.parse(localStorage.getItem('user'));
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    headers.append('User_Id', user.id);
    //return this.http.get('http://localhost:8080/friend/getsubpending', {headers: headers}).map(res => res.json());
    return this.http.get('friend/getsubpending', {headers: headers}).map(res => res.json());
  }

  getRecvReq() {
    let user = JSON.parse(localStorage.getItem('user'));
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    headers.append('User_Id', user.id);
    //return this.http.get('http://localhost:8080/friend/getrecvpending', {headers: headers}).map(res => res.json());
    return this.http.get('friend/getrecvpending', {headers: headers}).map(res => res.json());
  }

  rejectRequest(request) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //return this.http.post('http://localhost:8080/friend/rejrequest', request, {headers: headers}).map(res => res.json());
    return this.http.post('friend/rejrequest', request, {headers: headers}).map(res => res.json());
  }

  acceptRequest(request) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //return this.http.post('http://localhost:8080/friend/accrequest', request, {headers: headers}).map(res => res.json());
    return this.http.post('friend/accrequest', request, {headers: headers}).map(res => res.json());
  }

  getFriends() {
    let user = JSON.parse(localStorage.getItem('user'));
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    headers.append('User_Id', user.id);
    //return this.http.get('http://localhost:8080/friend/getfriends', {headers: headers}).map(res => res.json());
    return this.http.get('friend/getfriends', {headers: headers}).map(res => res.json());
  }

  getFriendProfile(friend) {
    //let user = JSON.parse(localStorage.getItem('user'));
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    headers.append('User_Name', friend);
    //return this.http.get('http://localhost:8080/users/getfriendprofile', {headers: headers}).map(res => res.json());
    return this.http.get('users/getfriendprofile', {headers: headers}).map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  checkFriend(friendName, userName) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    headers.append('friend_name', friendName);
    headers.append('user_name', userName);
    //return this.http.get('http://localhost:8080/friend/isfriend', {headers: headers}).map(res => res.json());
    return this.http.get('friend/isfriend', {headers: headers}).map(res => res.json());
  }
}
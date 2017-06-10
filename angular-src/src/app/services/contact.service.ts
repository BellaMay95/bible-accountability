import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  submitEmail(contactForm) {
      var headers = new Headers();
      //alert("Contact Form in Service: " + JSON.stringify(contactForm));
      headers.append('Content-Type', 'application/json');
      //return this.http.post('http://localhost:8080/contact/feedback', contactForm, {headers: headers}).map(res => res.json());
      return this.http.post('contact/feedback', contactForm, {headers: headers}).map(res => res.json());
  }
}
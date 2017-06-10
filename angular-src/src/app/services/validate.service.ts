import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined || user.confirmPassword == undefined) {
      return false;
    }
    else {
      return true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateMatchingPasswords(pass1, pass2) {
    if(pass1 == pass2)
      return true;
    else
      return false;
  }

  validateContactForm(form) {
    if(form.username == '' || form.type == "Select Message Type" || form.type == '' || form.subject == '' || form.content == '') {
      return false;
    }
    else {
      return true;
    }
  }
}

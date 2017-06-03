import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService, 
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router 
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    //Required Fields
    if(!this.validateService.validateRegister(user)) {
      //console.log("Please fill in all fields");
      this.flashMessage.show("Please fill in all the fields!", {cssClass: 'alert-danger', timeout: 10000});
      return false;
    }

     //Validate Email
    if(!this.validateService.validateEmail(user.email)) {
      //console.log("Please enter a valid email");
      this.flashMessage.show("Please enter a valid email", {cssClass: 'alert-danger', timeout: 10000});
      return false;
    }

    //Register User
    this.authService.registerUser(user).subscribe(data => {
      if(data.success) {
        //this.flashMessage.show("You are now registered and you may log in!", {cssClass: 'alert-success', timeout: 10000});
        this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: 10000});
        this.router.navigate(['/login']);
      } 
      else {
        this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout: 10000});
        this.router.navigate(['/register']);
      }
    });
  }
}
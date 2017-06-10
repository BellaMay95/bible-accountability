import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ContactService } from '../../services/contact.service';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailForm = {
    username: '',
    type: '',
    subject: '',
    content: ''
  }
  
  constructor(
    private validateService: ValidateService, 
    private contactService: ContactService, 
    private flashMessage: FlashMessagesService,
    private router: Router) {}

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.emailForm.username = user.username;
    }
    else {
      this.emailForm.username = "";
    }

    this.emailForm.type = "Select Message Type";
  }

  typeSelect(type) {
    this.emailForm.type = type;
  }

  onContactSubmit() {
    if(!this.validateService.validateContactForm(this.emailForm)) {
      //console.log("Please fill in all fields");
      this.flashMessage.show("Please fill in all the fields!", {cssClass: 'alert-danger', timeout: 10000});
      return false;
    }

    this.contactService.submitEmail(this.emailForm).subscribe(data => {
      alert(JSON.stringify(data));
      if (data.success) {
        this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: 10000});
        this.router.navigate(['/home']);
      }
      else {
        this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout: 10000});
      }
    }),
    err => {
      console.log(err);
      return false;
    };
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TypeaheadMatch, ModalDirective } from 'ngx-bootstrap';
import { FriendService } from '../../../services/friend.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {
  public asyncSelectedUser: string;
  public asyncSelectedEmail: string;
  public typeaheadLoading: boolean;
  public typeaheadNoResultsUser: boolean;
  public typeaheadNoResultsEmail: boolean;
  public userdataSource: Observable<any>;
  public emaildataSource: Observable<any>;
  
  public userlist: any[];
  public userSelect: any;

  @ViewChild('autoShownModal') public autoShownModal:ModalDirective;
  public isModalShown:boolean = false;


  constructor(private friendService: FriendService, private router: Router, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.friendService.getUserList().subscribe(user => {
      this.userlist = user.UserList;
      let myuser = JSON.parse(localStorage.getItem('user'));
      let myname = myuser.username;
      for (let i = 0; i < this.userlist.length; i++) {
        if(this.userlist[i].username == myname)
          this.userlist.splice(i, 1);
      }
    }),
    err => {
      console.log(err);
      return false;
    };
    this.userdataSource = Observable
      .create((observer: any) => {
        // Runs on every search
        observer.next(this.asyncSelectedUser);
      })
      .mergeMap((token: string) => this.getUsersAsObservable(token));
    this.emaildataSource = Observable
      .create((observer: any) => {
        // Runs on every search
        observer.next(this.asyncSelectedEmail);
      })
      .mergeMap((token: string) => this.getEmailsAsObservable(token));
  }

  public getUsersAsObservable(token: string): Observable<any> {
    let query = new RegExp(token, 'ig');
 
    return Observable.of(
      this.userlist.filter((state: any) => {
        return query.test(state.username);
      })
    );
  }

  public getEmailsAsObservable(token: string): Observable<any> {
    let query = new RegExp(token, 'ig');
 
    return Observable.of(
      this.userlist.filter((state: any) => {
        return query.test(state.email);
      })
    );
  }
 
  public changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }
 
  public changeTypeaheadNoResultsUser(e: boolean): void {
    this.typeaheadNoResultsUser = e;
  }

  public changeTypeaheadNoResultsEmail(e: boolean): void {
    this.typeaheadNoResultsEmail = e;
  }
 
  public typeaheadOnSelect(e: TypeaheadMatch): void {
    //e.item is the user object. e.value is the selected value (which I don't think I need)
    this.userSelect = e.item;
    //alert(JSON.stringify(this.userSelect));
    this.showModal();
  }

  public showModal():void {
    this.isModalShown = true;
  }
 
  public hideModal():void {
    this.autoShownModal.hide();
  }
 
  public onHidden():void {
    this.isModalShown = false;
  }

  public addFriend() {
    //alert(JSON.stringify(this.userSelect));
    this.userSelect.id = this.userSelect._id;
    this.userSelect._id = undefined;
    let friendObj = this.userSelect;
    //alert(JSON.stringify(friendObj));
    this.friendService.submitFriendRequest(friendObj).subscribe(data => {
      if(data.success) {
        this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: 10000});
        this.router.navigate(['/home']);
      }
      else {
        this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout: 10000});
      }
    });
  }

  public viewProfile() {
    let friendName = this.userSelect.username;
    //this.router.navigate(['/friend/' + friendName]);
  }
}

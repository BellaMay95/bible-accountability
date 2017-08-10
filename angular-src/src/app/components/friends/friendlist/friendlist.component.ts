import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { FriendService } from '../../../services/friend.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendListComponent implements OnInit {
  friendList :any = [];
  friendArray :any = [];

  constructor(private friendService: FriendService, private router: Router, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.friendService.getFriends().subscribe(friends => {
      this.friendList = friends.list;
      let user = JSON.parse(localStorage.getItem('user'));
      for (let i = 0; i < this.friendList.length; i++) {
        if (this.friendList[i].user1.id == user.id) {
          this.friendArray[i] = this.friendList[i].user2;
        }
        else {
          this.friendArray[i] = this.friendList[i].user1;
        }
      }
    }),
    err => {
      console.log(err);
      return false;
    };
  }
  public removeFriend(friendObj) {
    let result = confirm("Are you sure you want to remove " + friendObj.name + " from your friends' list?");
    if (result) {
      friendObj.id = friendObj._id;
      friendObj._id = undefined;
      //alert(JSON.stringify(friendObj));
      this.friendService.removeFriend(friendObj).subscribe(data => {
        if(data.success) {
          this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: 10000});
          this.router.navigate(['/home']);
        }
        else {
          this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout: 10000});
        }
      });
    }
    else {
      return;
    }
  }
}

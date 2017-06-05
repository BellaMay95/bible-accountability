import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FriendService } from '../../services/friend.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-pendingfriend',
  templateUrl: './pendingfriend.component.html',
  styleUrls: ['./pendingfriend.component.css']
})
export class PendingFriendComponent implements OnInit {
  subRequests :any;
  recvRequests :any;

  constructor(private friendService: FriendService, private router: Router, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.friendService.getSubReq().subscribe(sent => {
      this.subRequests = sent.subRequests;
      //alert(JSON.stringify(this.subRequests));
    }),
    err => {
      console.log(err);
      return false;
    };
    this.friendService.getRecvReq().subscribe(recv => {
      this.recvRequests = recv.recvRequests;
      //alert(JSON.stringify(this.recvRequests));
    }),
    err => {
      console.log(err);
      return false;
    };
  }

  acceptRequest(request) {
    let choice = confirm("Are you sure you wish to accept this friend request?");
    if (choice == true) {
      
    }

  }

  rejectRequest(id) { 
    //alert("Removing friend request with id " + id);
    let choice = confirm("Are you sure you want to delete this friend request?");
    if (choice == true) {
      this.friendService.rejectRequest(id).subscribe(data => {
        if(data.success) {
          this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: 10000});
          this.router.navigate(['/home']);
        }
        else {
          this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout: 10000});
        }
      });
    }
  }
}

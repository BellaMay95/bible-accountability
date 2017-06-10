import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FriendService } from '../../../services/friend.service';
import { ReadingListService } from '../../../services/readinglist.service';

import '../../../services/objSort';

@Component({
  selector: 'app-friendprofile',
  templateUrl: './friendprofile.component.html',
  styleUrls: ['./friendprofile.component.css']
})
export class FriendProfileComponent implements OnInit {
  friend = {
    username: "",
    name: "",
    id: "",
    _id: ""
  };
  friendReading;

  constructor(private route: ActivatedRoute, private friendService: FriendService, private readingList: ReadingListService) { }

  ngOnInit() {
    let friendName = this.route.snapshot.params['username'];
    let user = JSON.parse(localStorage.getItem('user'));
    this.friendService.getFriendProfile(friendName).subscribe(friends => {
      this.friend = friends.friend;
      this.friend.id = this.friend._id;
      this.friend._id = undefined;
      this.readingList.getReadingLog(this.friend).subscribe(reading => {
        let newobject = this.prettyDate(reading.reading);
        this.friendReading = newobject;
        this.friendReading.objSort("formatted",-1);
      }),
      err => {
        console.log(err);
        return false;
      }
    }),
    err => {
      console.log(err);
      return false;
    };
  }

  prettyDate(array) {
    for (let i = 0; i < array.length; i++) {
      array[i].date.prettydate = new Date(array[i].date.formatted).toDateString();
      array[i].formatted = array[i].date.formatted;
    }

    return array;
  }
}

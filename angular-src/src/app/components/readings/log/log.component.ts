import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReadingListService } from '../../../services/readinglist.service';
import { FlashMessagesService } from 'angular2-flash-messages';
//import { AuthService } from '../../services/auth.service';
import '../../../services/objSort';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  //user: Object;
  log: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private readingList: ReadingListService, 
    private router: Router,
    ) { }

  ngOnInit() {
    this.readingList.getReadingLog().subscribe(reading => {
      let newobject = this.prettyDate(reading.reading);
      this.log = newobject;
      this.log.objSort("formatted",-1);
    }),
    err => {
      console.log(err);
      return false;
    }
  }

  prettyDate(array) {
    for (let i = 0; i < array.length; i++) {
      array[i].date.prettydate = new Date(array[i].date.formatted).toDateString();
      array[i].formatted = array[i].date.formatted;
    }

    return array;
  }

  removeEntry(item) {
   // alert("removing entry with id: " + id);
    this.readingList.removeReading(item).subscribe(data => {
      if(data.success) {
        this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: 10000});
        this.router.navigate(['/home']);
      }
      else {
        this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout: 10000});
      }
    });
  }

  editEntry(item) {
    alert("Edit functionality coming soon! For now, just delete this entry and add a new one.");
  }
}

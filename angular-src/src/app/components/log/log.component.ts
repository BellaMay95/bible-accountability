import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReadingListService } from '../../services/readinglist.service';
//import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  //user: Object;
  log: Object;

  constructor(
    private readingList: ReadingListService, 
    private router: Router,
    ) { }

  ngOnInit() {

    this.readingList.getReadingLog().subscribe(reading => {
      this.log = reading.reading;
    }),
    err => {
      console.log(err);
      return false;
    }
  }

}

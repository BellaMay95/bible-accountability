import { Component, OnInit } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
//import { DropdownModule } from "ngx-dropdown";
import { BsDropdownModule } from 'ngx-bootstrap';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

import { ReadingListService } from '../../../services/readinglist.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent implements OnInit {
  date: DateModel;
  options: DatePickerOptions;
  oldTestament: any;
  newTestament: any;
  numChapters = [];
  selTest: string = "Select Testament";
  selBook: string = "Select Book";
  selChapter: any = "Select Chapter";
  showNotes :boolean;
  noteTitle :string;
  noteBody: string;

  constructor( 
    private readingList: ReadingListService, 
    private authService: AuthService, 
    private flashMessage: FlashMessagesService,
    private router: Router ) {
      this.options = new DatePickerOptions();
  }

  ngOnInit() {
    this.readingList.getOldTestament().subscribe(books => {
        this.oldTestament = books.stash;
      }),
      err => {
        console.log(err);
        return false;
      }

    this.readingList.getNewTestament().subscribe(books => {
        this.newTestament = books.stash;
      }),
      err => {
        console.log(err);
        return false;
      }
  }

  selectTest(testament) {
    this.selTest = testament;
  }

  selectBook(book) {
    this.selBook = book;
    this.numChapters = [];
    let element: any;
    var length: number;
    if(this.selTest == "Old Testament") {
      for (let i = 0; i < this.oldTestament.length; i++) {
        if (this.oldTestament[i].name == this.selBook)
          length = this.oldTestament[i].chapters;
      } 
    }
    else if (this.selTest == "New Testament") {
      for (let i = 0; i < this.newTestament.length; i++) {
        if (this.newTestament[i].name == this.selBook)
          length = this.newTestament[i].chapters;
      } 
    }
    for (let i = 1; i <= length; i++) {
      this.numChapters.push(i);
    }
  }

  selectChapter(chapter) {
    this.selChapter = chapter;
  }

  saveEntry() {
    const reading = {
      date: this.date,
      book: this.selBook,
      chapter: this.selChapter,
      title: this.noteTitle,
      note: this.noteBody
    }

    this.readingList.saveReading(reading).subscribe(data => {
      if(data.success) {
        this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: 10000});
        this.router.navigate(['/home']);
      }
    });
  }
}

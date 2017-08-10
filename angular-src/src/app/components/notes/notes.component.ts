import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ReadingListService } from '../../services/readinglist.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import { ModalDirective } from 'ngx-bootstrap';
import '../../services/objSort';

@Component({
	selector: 'app-notes',
	templateUrl: './notes.component.html',
	styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
	notes :any;
	length :number = 0;
	note :any;
	noteDisable :boolean = true;

	@ViewChild('autoShownModal') public autoShownModal:ModalDirective;
  	public isModalShown:boolean = false;

	constructor(private flashMessage: FlashMessagesService,
    private readingList: ReadingListService, 
    private router: Router ) {}

	ngOnInit() {
		let user = JSON.parse(localStorage.getItem('user'));
		this.readingList.getNoteLog(user).subscribe(reading => {
			//console.log(reading.reading);
			let newobject = this.prettyDate(reading.reading);
			this.notes = newobject;
			this.length = newobject.length;
			this.notes.objSort("formatted",-1);
		}),
		err => {
			console.log(err);
			return false;
		}
	}

	prettyDate(array) {
    //console.log(array);
    for (let i = 0; i < array.length; i++) {
      array[i].date.prettydate = new Date(array[i].date.formatted).toDateString();
      array[i].formatted = array[i].date.formatted;
    }
		//console.log(array);

    return array;
  }

	viewEntry(entry) {
		//alert("Can't view the entry yet!");
		this.note = entry;
		this.showModal();
	}

	editNote() {
		this.noteDisable = false;
	}

	saveNote() {
		alert("Save note functionality comes later!");
		this.hideModal();
		this.readingList.editNote(this.note).subscribe(data => {
			//console.log(data);
			if (data.success) {
				this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: 10000});
			}
			else {
				this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout: 10000});
			}
		});
	}

	removeEntry(entry) {
		let result = confirm("Are you SURE you wish to remove this note? This does NOT remove the associated reading entry, just the note.");
		if (result) {
			this.readingList.removeNote(entry).subscribe(data => {
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

	public showModal():void {
		this.isModalShown = true;
	}
	
	public hideModal():void {
		this.noteDisable = true;
		this.autoShownModal.hide();
	}
	
	public onHidden():void {
		this.noteDisable = true;
		this.isModalShown = false;
	}
}



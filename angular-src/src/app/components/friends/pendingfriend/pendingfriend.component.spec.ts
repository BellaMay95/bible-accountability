import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingfriendComponent } from './pendingfriend.component';

describe('PendingfriendComponent', () => {
  let component: PendingfriendComponent;
  let fixture: ComponentFixture<PendingfriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingfriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingfriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

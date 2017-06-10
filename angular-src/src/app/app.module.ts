import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { DatePickerModule } from 'ng2-datepicker';
import { AlertModule, CollapseModule, BsDropdownModule, TypeaheadModule, ModalModule, TabsModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/profiles/login/login.component';
import { RegisterComponent } from './components/profiles/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/profiles/dashboard/dashboard.component';
import { ProfileComponent } from './components/profiles/profile/profile.component';
import { ReadingComponent } from './components/readings/reading/reading.component';
import { LogComponent } from './components/readings/log/log.component';
import { FriendListComponent } from './components/friends/friendlist/friendlist.component';
import { AddFriendComponent } from './components/friends/add-friend/add-friend.component';
import { PendingFriendComponent } from './components/friends/pendingfriend/pendingfriend.component';
import { FriendProfileComponent } from './components/friends/friendprofile/friendprofile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { FriendGuard } from './guards/friend.guard';
import { ReadingListService } from './services/readinglist.service';
import { FriendService } from './services/friend.service';
import { ContactService } from './services/contact.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent},
  { path: 'friend', component: FriendListComponent, canActivate: [AuthGuard] },
  { path: 'friend/:username', component: FriendProfileComponent, canActivate: [FriendGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ReadingComponent,
    LogComponent,
    FriendListComponent,
    AddFriendComponent,
    PendingFriendComponent,
    ContactComponent,
    FriendProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    DatePickerModule,
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AuthGuard, FriendGuard, ReadingListService, FriendService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }

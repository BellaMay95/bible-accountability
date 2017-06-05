import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { DatePickerModule } from 'ng2-datepicker';
import { CollapseDirective, BsDropdownModule, TypeaheadModule, ModalModule, TabsModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReadingComponent } from './components/reading/reading.component';
import { LogComponent } from './components/log/log.component';
import { FriendListComponent } from './components/friendlist/friendlist.component';
import { AddFriendComponent } from './components/add-friend/add-friend.component';
import { PendingFriendComponent } from './components/pendingfriend/pendingfriend.component';
//import { FriendProfileComponent } from './components/friendprofile/friendprofile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ReadingListService } from './services/readinglist.service';
import { FriendService } from './services/friend.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent},
  { path: 'friend', component: FriendListComponent, canActivate: [AuthGuard] },
  //{ path: 'friend/:username', component: FriendProfileComponent, canShow: [AuthGuard] }
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
    CollapseDirective,
    FriendListComponent,
    AddFriendComponent,
    PendingFriendComponent//,
    //FriendProfileComponent
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
    TabsModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AuthGuard, ReadingListService, FriendService],
  bootstrap: [AppComponent]
})
export class AppModule { }

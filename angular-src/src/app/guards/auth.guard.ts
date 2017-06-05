import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FriendService } from '../services/friend.service';

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private friendService: FriendService,
        private router: Router
    ) { }

    canActivate() {
        if(this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }

    canShow() {
        if (this.friendService.isFriend()) {
            return true;
        }
        else {
            this.router.navigate(['/friend']);
            return false;
        }
    }
}
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FriendService } from '../services/friend.service';

@Injectable()

export class FriendGuard implements CanActivate {
    constructor(
        private friendService: FriendService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            //return false;
            this.router.navigate(['/login']);
        }
         else {
            let position = state.url.lastIndexOf("/");
            let friendName = state.url.substring(position+1);
            return this.friendService.checkFriend(friendName, user.username).map(friend => {
                if (friend.success) {
                    return true;
                }
                else { 
                    //return false;
                    this.router.navigate(['/friend']);
                }
            });
        }
    }
}
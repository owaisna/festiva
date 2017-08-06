import { Injectable } from '@angular/core';
import {
	CanActivate, Router,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	CanActivateChild
} from '@angular/router';
// import { AuthService } from './auth.service';
import { UserService } from './../app_services/user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
	constructor(private authService: UserService, private router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (this.authService.getLoggedUser()) {
            // logged in so return true
            // console.log('got in auth');
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
	}

	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		return this.canActivate(route, state);
	}

	// checkLogin(url: string): boolean {
	// 	if (this.authService.isLoggedIn) { return true; }

	// 	// Store the attempted URL for redirecting
	// 	this.authService.redirectUrl = url;

	// 	// Navigate to the login page with extras
	// 	this.router.navigate(['/login']);
	// 	return false;
	// }
}

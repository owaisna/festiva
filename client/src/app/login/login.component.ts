import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../app_services/user.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
	localUser = {
	// user:"name",
	// pass:"pass"
	};
	// user;
	constructor(private router: Router, private userService: UserService) { }

	ngOnInit() {
		if (this.userService.getLoggedUser()) {
			this.router.navigate(['dashboard']);
		}
	}

	login(event) {
		event.preventDefault();
		// console.log(this.localUser);
		this.userService.login(this.localUser)
			.subscribe(user => {
			  // console.log(user);
			  Cookie.set('currentUser', JSON.stringify(user));
				// this.user = user;
        this.router.navigate(['dashboard']);
			});
	}
}

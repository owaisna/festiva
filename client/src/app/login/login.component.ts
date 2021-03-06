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
	msg = "";
	constructor(private router: Router, private userService: UserService) { }

	ngOnInit() {
		if (this.userService.getLoggedUser()) {
			this.msg = "";
			this.router.navigate(['dashboard']);
		} else {
			// this.msg = "Invalid username or password";
		}
	}

	login(event) {
		event.preventDefault();
		this.userService.login(this.localUser)
			.subscribe(user => {
				console.log(user);
				if (user != null) {
					this.msg = "";
					Cookie.set('currentUser', JSON.stringify(user));
					this.router.navigate(['dashboard']);
				} else {
					this.msg = "Invalid username or password";
				}
			});
	}
}

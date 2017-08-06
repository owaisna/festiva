import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../app_services/user.service';

@Component({
	selector: 'signup',
	templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
	obj = {
		// user:"me",
		// email:"me@me.com",
		// pass:"********",
		// address:"st 1 , block 2 , city 3",
		// phone:"123456789"
	};
	successMsg;
	constructor(private router: Router, private userService: UserService) { }

	ngOnInit() {
		if (this.userService.isLoggedIn() === true) {
			this.router.navigate(['dashboard']);
		}
	}

	signup(event) {
		event.preventDefault();
		this.userService.signup(this.obj)
			.subscribe(user => {
				this.successMsg = "Successfully Signed In";
				this.obj = {};
				this.router.navigate(['dashboard']);
			});
	}
}

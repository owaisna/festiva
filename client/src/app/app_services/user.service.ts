import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
// var config = require('./../data');

@Injectable()
export class UserService {
	logged: Boolean = false;
	loggedUser = null;
	host = 'http://localhost:3000/';
	route = 'dashboard/users/';

	constructor(private http: Http, private router: Router) {
		console.log('User service initialized...');
	}

	get(id) {
		return this.http.get(this.host + this.route + id)
			.map(res => { return res.json() });
	}

	update(data) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put(this.host + this.route + data._id, JSON.stringify(data), { headers: headers })
			.map(res => {
				// console.log(data);
				// localStorage['currentUser'] = JSON.stringify(data);
        Cookie.set('currentUser', JSON.stringify(data));
				// this.logout();
				return res.json()
			});
	}

	login(user) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(this.host + 'dashboard/users/login/', JSON.stringify(user), { headers: headers })
			.map((data) => {
				this.logged = true;
				this.loggedUser = data;
				// console.log (data);
				// localStorage.setItem('currentUser', JSON.stringify(data));
				Cookie.set('currentUser', JSON.stringify(data));
				return data.json();
			});
	}

	logout() {
		this.logged = false;
		this.loggedUser = null;
		// localStorage.removeItem('currentUser');
    Cookie.delete('currentUser');
		this.router.navigate(['/login']);
	}

	signup(user) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(this.host + 'dashboard/users/signup/', JSON.stringify(user), { headers: headers })
			.map(res => {
				return res.json();
			});
	}

	isLoggedIn() { return this.logged }
	getLoggedUser() {
		// let u = localStorage.getItem('currentUser');
		// let p = JSON.parse(JSON.parse(u)._body);
    if (Cookie.get("currentUser")) {
      let q = Cookie.get("currentUser");
      let r = (JSON.parse(q));
      // console.log(p);
      // console.log(r);
      // this.loggedUser = r;
      return r;
    }
    return false;
	}

	updateUser(){
	  //
  }

}

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedbackService {

	host = 'http://localhost:3000/';
	route = 'dashboard/feedback/';

	constructor(private http: Http) {
		console.log('Feedback service initialized...');
	}

	get() {
		return this.http.get(this.host + this.route)
			.map(res => { return res.json() });
	}

	add(newData) {
		// console.log(newData);
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(this.host + this.route, JSON.stringify(newData), { headers: headers })
			.map(res => { return res.json() });
	}

	delete(newData) {
		return this.http.delete(this.host + this.route + newData)
			.map(res => { return res.json() });
	}

	update(data) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put(this.host + this.route + data._id, JSON.stringify(data), { headers: headers })
			.map(res => { return res.json() });
	}

}
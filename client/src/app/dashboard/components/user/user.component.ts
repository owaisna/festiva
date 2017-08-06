import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../app_services/user.service';

@Component({
	moduleId: module.id,
	selector: 'user-dashboard',
	templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
	dataList;
	isEditingMode = false;
	formItem = { _id: undefined, name: '', email: '', password: '', address: '', phone: '' };
	cuser;

	constructor(private factory: UserService) { }

	ngOnInit() {
		this.cuser = this.factory.getLoggedUser();
		this.factory.get(this.cuser._id).subscribe(data => { this.cuser = data });
	}

	onSubmit() {
		console.log(this.formItem);
		this.factory.update(this.formItem).subscribe(data => {
			this.cuser = this.formItem;
			this.clearThis();
		});
	}

	updateThis(data) {
		this.formItem._id = this.cuser._id;
		this.formItem.name = this.cuser.name;
		this.formItem.email = this.cuser.email;
		this.formItem.password = this.cuser.password;
		this.formItem.address = this.cuser.address;
		this.formItem.phone = this.cuser.phone;
	}

	clearThis() {
		this.formItem = { _id: undefined, name: '', email: '', password: '', address: '', phone: '' };
	}
}

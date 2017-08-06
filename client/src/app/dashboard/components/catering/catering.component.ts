import { Component, OnInit } from '@angular/core';
import { CateringService } from './../../../app_services/catering.service';

@Component({
	moduleId: module.id,
	selector: 'catering-dashboard',
	templateUrl: './catering.component.html'
})

export class CateringComponent implements OnInit {
	dataList;
	isEditingMode = false;
	formItem = { _id: undefined, name: '', description: '' };

	constructor(private factory: CateringService) { }

	ngOnInit() {
		this.factory.get().subscribe(data => this.dataList = data);
	}

	addThis() {
		if (this.formItem._id === undefined) {
			this.factory.add(this.formItem).subscribe(data => {
				this.dataList.push(data);
				this.clearThis();
			});
		} else {
			this.factory.update(this.formItem).subscribe(data => {
				var id = this.formItem._id;
				for (var i = 0; i < this.dataList.length; i++) {
					if (this.dataList[i]._id == id) {
						this.dataList[i] = this.formItem;
						this.clearThis();
						return;
					}
				};
			});
		}
	}

	deleteThis(id) {
		this.factory.delete(id).subscribe(data => {
			for (var i = 0; i < this.dataList.length; i++) {
				if (this.dataList[i]._id == id) {
					this.dataList.splice(i, 1);
					return;
				}
			};
		});
	}

	updateThis(data) {
		this.formItem._id = data._id;
		this.formItem.name = data.name;
		this.formItem.description = data.description;
	}

	clearThis() {
		this.formItem = { _id: undefined, name: '', description: '' };
	}
}

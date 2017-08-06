import { Component, OnInit } from '@angular/core';
import { PhotosService } from './../../../app_services/photos.service';

@Component({
	moduleId: module.id,
	selector: 'photos-dashboard',
	templateUrl: './photos.component.html'
})
export class PhotosComponent implements OnInit {
	photoList;
	photoStyle = ["","timeline-inverted"];

	constructor(private photosService: PhotosService) {
		this.photosService.get().subscribe(data => {
			var photoList = data;
			for (let i in photoList) {
				photoList[i].style = this.photoStyle[Math.floor(Math.random() * this.photoStyle.length)];
				// console.log(this.photoList[i]);
				// console.log(photoList[i].style);
			}
			this.photoList = photoList;
			
		});
	}

	ngOnInit() {
	}

	addOne() {
		this.photosService.add().subscribe(data => this.photoList.push(data));
	}
	delOne() {
		this.photosService.delete().subscribe(data => {
			this.photosService.get().subscribe(data => this.photoList = data);
		});
	}
}

import { Component, OnInit, ViewChild, ElementRef, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http';

@Component({
	selector: 'oneself-list',
	templateUrl: './oneself.component.html',
	styleUrls: ['./oneself.component.css']
})

export class OneSelfComponent implements OnInit {
	
	// data = [];
	loading = true;
	// me:any;

	// page = 0;
	// limit = 10;

	// headImg = "./assets/images/headimg.png";
	// videoImg = "./assets/images/listimg.jpg";

	pageType = 1;

	baseUrl = "";

	constructor(
		private route: ActivatedRoute,
		private http: HttpService,
		private router: Router
	) {
		this.baseUrl = window["context"]["apiroot"];
	}

	ngOnInit() {
		// this.id = +this.route.snapshot.data.id;
		// this.title = this.titles[this.id];
	}

	changePage(i):void{
        this.pageType = i;
	}
	
}

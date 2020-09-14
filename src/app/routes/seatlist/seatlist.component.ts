import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http';

@Component({
	selector: 'seatlist',
	templateUrl: './seatlist.component.html'
})

export class SeatListComponent implements OnInit {
	
	titles=["","设备绑定","姓名绑定"];
	title;
	id=1;
	data = [
		
	];
	loading = false;
	meetid;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private location: Location,
    	private http: HttpService
	) {
	}

	ngOnInit() {
		

		this.id = +this.route.snapshot.paramMap.get('id');
		this.meetid = +this.route.snapshot.paramMap.get('meetid');
		this.title = this.titles[this.id];

		this.createSeatList();
		this.getMeetMacList();
	}

	back(){
		this.location.back();
	}
	
	createSeatList():void{
		if(this.id == 1){
			for(let i = 1; i < 100; i++){
				let seats = [];
				for(let j = 1; j < 100; j++){
					seats.push({"seatid":i+"-"+j});
				}
				this.data.push(seats);
			}
		}
	}

	itemClick(item,i?):void{
		if(this.id==1){
            this.router.navigate(['/seatbind/code',{id:this.id,meetid:this.meetid,seatid:item.seatid,name:item.mac||""}]);
        }else{
            this.router.navigate(['/seatbind/name',{id:this.id,meetid:this.meetid,seatid:item.seatid,iid:item.id,ii:i,name:item.name||""}]);
        }
	}

	getMeetMacList():void{
		this.loading = true;

		const params: Map<string, any> = new Map<string, any>();

		let url = "";
		if(this.id == 1){
			url = "/seatmac/findByseatmac";
			params.set("roomid",this.meetid);
		}else{
			url = "/meetingcanhui/findByMeetingCanHui";
			params.set("meetingId",this.meetid);
		}

		this.http.get(url, params, null).subscribe(data => {
			if(data.code == 0){
				let arr = data.data || [];
				if(arr.length > 0){
					if(this.id==1){
						arr.forEach((item)=>{
							if(item.seatid){
								let seatid = item.seatid.split("-");
								let x = +seatid[0] - 1;
								let y = +seatid[1] - 1;
								this.data[x][y] = item;
							}
						});
					}else{
						this.data = arr;
					}
				}
			}
			this.loading = false;
		}, error => {
			console.error(error);
			this.loading = false;
		});
	}
	
}

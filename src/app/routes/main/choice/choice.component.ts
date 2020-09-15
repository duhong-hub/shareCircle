import { Component, OnInit, ViewChild, ElementRef, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http';

@Component({
	selector: 'choice-list',
	templateUrl: './choice.component.html',
	styleUrls: ['./choice.component.css']
})

export class ChoiceComponent implements OnInit {
	
	// titles=["","设备绑定","姓名绑定"];
	// title;
	// id=1;
	data = [];
	loading = true;
	me:any;

	constructor(
		private route: ActivatedRoute,
		private http: HttpService,
		private router: Router
	) {
	}

	ngOnInit() {
		// this.id = +this.route.snapshot.data.id;
		// this.title = this.titles[this.id];

		this.getSelectedCircle();
	}

	meetClick(item):void{
        // if(this.id==1){
        //     this.router.navigate(['/seatlist/code',{id:this.id,meetid:item.id}]);
        // }else{
        //     this.router.navigate(['/seatlist/name',{id:this.id,meetid:item.id}]);
        // }
	}
	
	getSelectedCircle():void{
		this.loading = true;
		const params: Map<string, any> = new Map<string, any>();

		let url = "/jqkj/cricle/getSelectedCircle";
		this.http.get(url, params, null).subscribe(data => {
			if(data.status == 1){
				this.data = data.data || [];

				// if(arr.length < this.condi.pageSize){
				// 	// 锁定
				// 	this.me.lock();
				// 	// 无数据
				// 	this.me.noData(true);
				// }
				setTimeout(()=>{
					this.me.resetload();
				},200);
			}
			this.loading = false;
		}, error => {
			console.error(error);
			this.loading = false;
		});
	}


	drapUp(me:any){
        console.log("drapUp-----");
        this.me = me;
        this.me.resetload();
        this.me.unlock();
        this.me.noData(false);
        // this.condi.pageNum = 1;
        // this.listData = [];
        // this.getData();
        // this.getUserData();
        // this.getUserFCode();
    }
    drapDown(me:any){
        console.log("drapDown------------");
        this.me = me;
        // this.condi.pageNum++;
        // this.getData();
	}
	
	// setSenseName(item:any): void {
	// 	const params: Map<string, any> = new Map<string, any>();
	// 	params.set('name', item.name);
	// 	params.set('id', item.id);

	// 	//判断名字是否已存在
	// 	let obj = this.senseList.filter(t=>t.name==item.name && !t.del && t.id != item.id) || "";
	// 	if(obj!=""){
	// 		this.httpError("新建大屏名称" + item.name + "已存在");
	// 		return;
	// 	}

	// 	//this.config.isLoading = true;
	// 	this.http.post('/config/modifyName', params, this.senseapi).subscribe(data => {
	// 		if (data.status == 200) {
	// 			item.editname = false;
	// 		} else {
	// 			this.httpError("修改大屏名称失败");
	// 			// this.fadeOutAction('系统错误,请稍后重试...', false);
	// 		}
	// 	}, error => {
	// 		//   this.fadeOutAction('系统错误,请稍后重试...', false);
	// 	});
	// }
	// delSenseById(item:any): void {
	// 	const params: Map<string, any> = new Map<string, any>();
	// 	// params.set('id', item.id);


	// 	//this.config.isLoading = true;
	// 	this.http.post('/config/del/'+item.id, params, this.senseapi).subscribe(data => {
	// 		this.isShowDeleteBox = false;
	// 		if (data.status == 200) {
	// 			item.del = true;
	// 			this.deladd++;
	// 		} else {
	// 			this.httpError("删除大屏失败");
	// 			// this.fadeOutAction('系统错误,请稍后重试...', false);
	// 		}
	// 	}, error => {
	// 		this.isShowDeleteBox = false;
	// 		//   this.fadeOutAction('系统错误,请稍后重试...', false);
	// 	});
	// }

	
}

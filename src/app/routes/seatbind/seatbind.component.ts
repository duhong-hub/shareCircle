import { Component, OnInit, ViewChild, ElementRef, Injector } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import weui from '../../../assets/js/weui.min.js';

declare var isWeixin;
declare var wx;

@Component({
	selector: 'seatbind',
	templateUrl: './seatbind.component.html'
})

export class SeatBindComponent implements OnInit {
	
	titles=["","设备绑定","姓名绑定"];
	title;
	id=1;
	data = [
		
	];
	nameList = [];
	ii=0;
	loading = false;
	tip=false;
	msg="";
	meetid;
	iid;
	seatid;
	name;
	ext;
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
		this.iid = +this.route.snapshot.paramMap.get('iid') || 0;
		this.ii = +this.route.snapshot.paramMap.get('ii') || 0;
		this.seatid = this.route.snapshot.paramMap.get('seatid');
		this.name = this.route.snapshot.paramMap.get('sn')||"";
		this.ext = this.route.snapshot.paramMap.get('ext')||"";
		// alert(this.name);
		// alert(this.ext);
		// scancode = decodeURI(scancode);
		// alert(scancode)
		// // scancode = "https://pages.dingtalk.com/wow/dingtalk/act/smartdevice?code=13&service=000166&sign=ee9e51&ext=pc=311621&fid=102&cm=B&sn=d896e00009000688&pk=a1rcpA4tTYG&conn=qr";
		// this.name = this.getQueryString("sn",scancode);
		// this.ext = this.getQueryString("ext=pc",scancode);

		this.title = this.titles[this.id];

		if(this.id == 2){
			this.getMeetNameList();
		}

		setTimeout(()=>{
			this.seatPickerInit();
		},200)
		
	}

	back(){
		this.location.back();
	}

	getQueryString(name,str):string{
		let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		let r:any = decodeURI(str);
		r = r.substr(1).match(reg);
		if (r != null && typeof r != "undefined"){
			return unescape(r[2]);
		}
		else{
			return "";
		}
	}

	seatPickerInit():void{
		let x = [];
		let y = [];
		for(let i = 1; i < 100; i++){
			x.push({label:i,value:i});
			y.push({label:i,value:i});
		}
		let cx = 1;
		let cy = 1;
		
		if(!!this.seatid){
			let arr = this.seatid.split('-');
			cx = +arr[0];
			cy = +arr[1];
		}
		
		let t = this;
		document.querySelector('#multiPickerBtn').addEventListener('click', ()=>{
			weui.picker(x,[{label:'排',value:1}],y,[{label:'列',value:1}], {
				defaultValue: [cx,1,cy,1],
				onChange: function (result) {
					// console.log(result);
				},
				onConfirm: function (result) {
					// console.log(result);
					let x = result[0].value;
					let y = result[2].value;
					t.seatid = x + "-" + y;
					// console.log(t.seatid);

					
					t.getNameById();
				},
				id: 'multiPickerBtn',
				onClose: function(){
					// console.log('onClose');
				},
				title: '座区选择'
			});
		});
	}

	pre():void{
		if(this.id == 1){
			if(this.seatid == "1-1"){
				return;
			}
			let xy = this.seatid.split("-");
			let x = +xy[0];
			let y = +xy[1];
			if(y > 1){
				y--;
				this.seatid = x + "-" + y;
			}else{
				x--;
				y=99;
				this.seatid = x + "-" + y;
			}
			this.getNameById();
		}else{
			if(this.ii == 0){
				return;
			}
			if(this.ii > 0){
				this.ii--;
				this.seatid = this.nameList[this.ii].seatid;
				this.name = this.nameList[this.ii].name;
			}
		}
	}

	next():void{
		if(this.id == 1){
			if(this.seatid == "99-99"){
				return;
			}
			let xy = this.seatid.split("-");
			let x = +xy[0];
			let y = +xy[1];
			if(y < 99){
				y++;
				this.seatid = x + "-" + y;
			}else{
				x++;
				y=1;
				this.seatid = x + "-" + y;
			}
			this.getNameById();
		}else{
			if(this.ii == (this.nameList.length - 1)){
				return;
			}
			if(this.ii < this.nameList.length){
				this.ii++;
				this.seatid = this.nameList[this.ii].seatid;
				this.name = this.nameList[this.ii].name;
			}
		}
	}

	bind():void{
		

		const params: Map<string, any> = new Map<string, any>();
		
		let url = "";
		if(this.id == 1){
			url = "/seatmac/AddByseatmac";
			params.set("roomid",this.meetid);
			params.set("seatid",this.seatid);
			params.set("mac",this.name);
			params.set("ext",this.ext);

			if(!this.name){
				this.msg = "识别码错误";
				this.tip = true;
				setTimeout(()=>{
					this.tip = false;
				},1200);
				return;
			}
			if(!this.ext){
				this.msg = "ext识别码错误";
				this.tip = true;
				setTimeout(()=>{
					this.tip = false;
				},1200);
				return;
			}
		}else{
			url = "/meetingcanhui/updateSeatidByid";
			params.set("id",this.iid);
			params.set("seatid",this.seatid);
			if(!this.seatid){
				this.msg = "座位号错误";
				this.tip = true;
				setTimeout(()=>{
					this.tip = false;
				},1200);
				return;
			}
		}

		this.loading = true;

		this.http.post(url, params, null).subscribe(data => {
			
			this.msg = data.msg || "";
			this.tip = true;
			setTimeout(()=>{
				this.tip = false;
			},1200);

			this.loading = false;
		}, error => {
			console.error(error);
			this.loading = false;
		});
	}

	getNameById():void{
		this.loading = true;

		const params: Map<string, any> = new Map<string, any>();
		
		let url = "";
		if(this.id == 1){
			url = "/seatmac/findByseatmac";
			params.set("roomid",this.meetid);
			params.set("seatid",this.seatid);
		}else{
			url = "/meetingcanhui/findByMeetingCanHui";
			params.set("meetingId",this.meetid);
			params.set("seatid",this.seatid);
		}
		this.http.get(url, params, null).subscribe(data => {
			if(data.code == 0){
				if(this.id == 1){
					if(data.data && data.data.length > 0){
						let obj = data.data[0] || {};
						this.name = obj.mac || "";
					}else{
						this.name = "";
					}
				}else{
					if(data.data && data.data.length > 0){
						this.seatid = data.data[0].seatid;
						this.name = data.data[0].name;

						let iid = data.data[0].id;
						for(let i = 0,len = this.nameList.length; i < len; i++){
							if(this.nameList[i].id == iid){
								this.ii = i;
							}
						}
					}else{
						this.name = "";
					}
				}
			}

			this.loading = false;
		}, error => {
			console.error(error);
			this.loading = false;
		});
	}

	getMeetNameList():void{
		this.loading = true;

		const params: Map<string, any> = new Map<string, any>();

		let url = "";
		url = "/meetingcanhui/findByMeetingCanHui";
		params.set("meetingId",this.meetid);

		this.http.get(url, params, null).subscribe(data => {
			if(data.code == 0){
				let arr = data.data || [];
				if(arr.length > 0){
					this.nameList = arr;
				}
			}
			this.loading = false;
		}, error => {
			console.error(error);
			this.loading = false;
		});
	}

	openScanCode():void{
		// window.location.href="scan.html"
		//打开微信扫一扫
		if(!!wx.miniProgram){
			//跳转到小程序调用微信扫一扫页面
			// console.error(wx)
			wx.miniProgram.navigateTo({url: '/pages/scanCode/scanCode?id='+this.id+"&meetid="+this.meetid+"&seatid="+this.seatid});
		}else{
			//非小程序环境（公众号环境）
			//通过jssdk方法调用微信扫一扫，代码忽略
		}
	   
	}

	isMiniProgram():boolean{ //是否为小程序环境
		//是否在微信环境
	   if (!isWeixin()) {
		   return false
	   } else {
		   //微信API获取当前运行环境
		   wx.miniProgram.getEnv((res) => {
			   if (res.miniprogram) {
				   //小程序环境
				   return true;
			   } else {
				   return false;
			   }
		   })
	   }
 	}

	itemClick(item):void{
		if(this.id==1){
            this.router.navigate(['/seatbind/code',{id:this.id,meetid:this.meetid,seatid:item.seatid}]);
        }else{
            this.router.navigate(['/seatbind/name',{id:this.id,meetid:this.meetid,seatid:item.seatid}]);
        }
	}
	
	
}

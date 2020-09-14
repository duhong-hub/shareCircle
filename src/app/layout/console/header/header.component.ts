import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'header-console',
    template: `
    <div class="searchTop">
        <div class="inputDiv">
            <input type="text" placeholder="搜索资源 " readonly onclick="window.location.href='#'">
            <img src="./assets/images/searchTop.png" alt="">
        </div>
        <div class="rightBtn">
            <img src="./assets/images/icon1.png" alt="">
        </div>
    </div>
    <div class="tabDiv">
        <ul class="tabDiv-box">
            <li class="tabDivActive">精选</li>
            <li>关注</li>
            <li>我的圈子</li>
            <li>音乐圈</li>
            <li>私密圈 </li>
            <li>娱乐圈</li>
            <li>娱乐圈</li>
            <li>娱乐圈</li>
            <li>娱乐圈</li>
        </ul>
    </div>
    `,
    styles: [``]
})


export class HeaderConsoleComponent implements OnInit {
    ctx: string;

    id=1;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { 
        

        // this.route.params.pipe(map).map(params => {
        //     return params['id'];
        // }).subscribe(id => {
        //     this.loadDB(id);
        // });

        // this.heroService.getHero(id)
        //   .subscribe(hero => this.hero = hero);
    }

    ngOnInit() {
        // let url = this.router.url;
        // if(url == '/meetlist/name'){
        //     this.id = 2;
        // }else{
        //     this.id = 1;
        // }
    }

    changeType(i):void{
        // this.id = i;
        // if(i==1){
        //     this.router.navigate(['/meetlist/code']);
        // }else{
        //     this.router.navigate(['/meetlist/name']);
        // }
    }

    getLicense(): void {
      // this.http.post('/platform/authz/getList', null , this.ctx).subscribe(data => {
      //   if (data.code === 200) {
      //     this.license = data.data.licenseInfo;
      //   }
      // });
    }
}

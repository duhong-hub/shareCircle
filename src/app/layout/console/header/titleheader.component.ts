import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'title-header',
    template: `
    <div class="topDiv">
        <div class="topDiv-btnL"></div>
        作者主页
    </div>
    `,
    styles: [``]
})


export class TitleHeaderComponent implements OnInit {
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

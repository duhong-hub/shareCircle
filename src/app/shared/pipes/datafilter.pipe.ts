import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'formattime'
})
export class FormatTimePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        // console.log("value----",value);
        if(value){
            let time = value;
            let pubsh = new Date(time);
            let pubshtime = parseInt((Date.parse(new Date(time).toString())/1000).toString());
            let now = parseInt((Date.parse(new Date().toString())/1000).toString());
            let nowtime = new Date();
            let nowY = nowtime.getFullYear();
            let nowM = parseInt((nowtime.getMonth()).toString())+1;
            let nowD = nowtime.getDate();
            let todaytime = parseInt((Date.parse((new Date(nowY+"-"+nowM+"-"+nowD+" 00:00:00")).toString())/1000).toString()); //今天0点0分时间戳
            // let nowh = nowtime.getHours();
            // let nowm = nowtime.getMinutes();
            let yesterdaytime = todaytime-24*60*60; //昨天0点0分时间戳
            let idate = '';

            if(pubshtime<yesterdaytime){
                idate = time;
            }else if(pubshtime>yesterdaytime && pubshtime<todaytime ){
                idate = '昨天 '+ ('0'+pubsh.getHours()).slice(-2) +':'+ ('0'+pubsh.getMinutes()).slice(-2) ;
            }else{
                let cha = now-pubshtime;
                if(cha<=60){
                    idate = cha+'秒之前';
                }else if(cha>60 && cha<=3600){
                    idate = parseInt((cha/60).toString())+'分钟之前';
                }else if(cha>3600){
                    idate = parseInt((cha/3600).toString())+'小时之前';
                }
            }
            return idate;
        }
        return value;
    }
}
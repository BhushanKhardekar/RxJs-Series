import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  obsMsg:any;
  VideoSubs:Subscription | undefined;
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    //const broadCastVideo = interval(1000);
    //timer(delay,intervel)
    const broadCastVideo =timer(5000,1000)

    this.VideoSubs=broadCastVideo.subscribe(res=>{
      this.obsMsg='Video '+res;
      this._userService.elPrint(this.obsMsg, 'elContainer')
      this._userService.elPrint(this.obsMsg, 'elContainer2')
      this._userService.elPrint(this.obsMsg, 'elContainer3')
      if(res>=5){
        this.VideoSubs?.unsubscribe();
      }
    });
  }
}

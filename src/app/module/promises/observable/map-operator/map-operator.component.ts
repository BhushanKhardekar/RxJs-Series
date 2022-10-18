import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.scss']
})
export class MapOperatorComponent implements OnInit {

  constructor(private uService:UserService) { }

  subs1: Subscription = new Subscription();
  subs2: Subscription = new Subscription();
  msg1:any;
  msg2:any;
  ngOnInit(): void {


    const broadcast =interval(1000);

    //Ex-01
    this.subs1=broadcast.pipe(map(data=> 'mapData => '+data))
    .subscribe(res=>{
      this.msg1=res
    });
    setTimeout(() => {
      this.subs1.unsubscribe();
    }, 5000);

    //Ex-02
    this.subs2=broadcast.pipe(
      map(data => data*2)
    )
    .subscribe(res=>{
      this.msg2=res
      setTimeout(() => {
        this.subs2.unsubscribe();
      }, 5000);
    })


    //Ex-03
    const member =from([
      {age:25,id:1,name:'Anup'},
      {age:25,id:2,name:'Anup2'},
      {age:25,id:3,name:'Anup3'},
      {age:25,id:4,name:'Anup4'},
      {age:25,id:5,name:'Anup5'},
      {age:25,id:6,name:'Anup6'}
    ])

    member.pipe(
      map(data=> data.name)
    ).subscribe(res=>{
      this.uService.elPrint(res,'elContainer')
    })
  }
}

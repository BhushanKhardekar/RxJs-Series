import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  constructor() { }
  sourceSub:Subscription | undefined;
  users=[
    {name:'Anup', skill:'Angular'},
    {name:'Shekhar', skill:'Html,CSS'},
    {name:'Sharma', skill:'Angular, HTML'},
    {name:'Sid', skill:'Angular, TS'}
  ]

  toArray1:any;
  toArray2:any;
  toArray3:any;

  ngOnInit(): void {
    const source = interval(1000);
    this.sourceSub= source.pipe( take(5), toArray()).
    subscribe(res =>{
      this.toArray1=res
      //console.log(res);
    });

    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe(res =>{
      this.toArray2=JSON.stringify(res)
      //console.log(res);
    });

    const source3 = of('Anup', 'Shekhar', 'Sharma');
    source3.pipe(toArray()).subscribe(res=>{
      this.toArray3=JSON.stringify(res)
      //console.log(res)
    })
  }
}

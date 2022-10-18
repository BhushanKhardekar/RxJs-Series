import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck-operator',
  templateUrl: './pluck-operator.component.html',
  styleUrls: ['./pluck-operator.component.scss']
})
export class PluckOperatorComponent implements OnInit {

  constructor() { }
  data:any;
  data2:any;

  users=[
    {name:'Anup', Skils:'Angular', job:{title:'Frontend Developer', exp:'10Years'}},
    {name:'Raj', Skils:'HTMl', job:{title:'HTMl Developer', exp:'11Years'}},
    {name:'Vijay', Skils:'CSS', job:{title:'CSS Developer', exp:'12Years'}},
    {name:'Ram', Skils:'BootStrap',job:{title:'BootStrap Developer', exp:'13Years'} }
  ]

  ngOnInit(): void {
    //Ex-01
    from(this.users).pipe(pluck('name'),toArray())
    .subscribe(res=>{
      this.data=res;
    });

    //Ex-02
    from(this.users).pipe(pluck('job','title'),toArray())
    .subscribe(res=>{
      console.log(res)
      this.data2=res;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor(private uService:UserService) { }
  randomNames =[ 'Anup', 'Shekhar', 'Sharma', 'John', 'Alex','Robert', 'Bob']

  ngOnInit(): void {

    const nameSource=from(this.randomNames)

    //Ex-01 |take(5)
    nameSource.pipe(
      take(5)
    ).subscribe(res=>{
      this.uService.elPrint(res,'elContainer1')
    })


    //Ex-02 |takeLast(5)
    nameSource.pipe(
      takeLast(5)
    ).subscribe(res=>{
      this.uService.elPrint(res,'elContainer2')
    })

    //Ex-03 |takeUntil(Condition)

    let condition1 = timer(6000)
    let condition2 = fromEvent(document,'click')
    const source = interval(1000);
    source.pipe(
      map(res => 'Number '+res),
      takeUntil(condition2)
    ).subscribe(res=>{
      this.uService.elPrint(res,'elContainer3')
    })

  }

}

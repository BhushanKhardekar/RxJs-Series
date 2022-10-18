import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-tap-operator',
  templateUrl: './tap-operator.component.html',
  styleUrls: ['./tap-operator.component.scss']
})
export class TapOperatorComponent implements OnInit {

  Arr=['Anup', 'Shekhar', 'Sharma', 'John', 'Alex', 'Rob']

  Arr2=['Red', 'Blue', 'Orange','Black','Pink','Green', 'Yellow', 'Purple']
  source = interval(1000);
  obsSubs1 = new Subscription();
  obsSubs2 = new Subscription();
  mycolor:any;

  constructor(private uService:UserService) { }

  ngOnInit(): void {

    //Ex-01
    this.obsSubs1= this.source.pipe(
      tap(res=>{
        if(res===4){
          this.obsSubs1.unsubscribe();
        }
      }),
      map(data =>this.Arr[data]))
    .subscribe(res=>{
      this.uService.elPrint(res,'elContainer');
    });

    //Ex-02

    this.obsSubs2= this.source.pipe(
      tap(res=>{
        if(res===8){
          this.obsSubs2.unsubscribe();
        }
      }),
      map(res =>this.mycolor =this.Arr2[res]))
    .subscribe(res=>{
      this.uService.elPrint(res,'elContainer2');
    });
  }

}

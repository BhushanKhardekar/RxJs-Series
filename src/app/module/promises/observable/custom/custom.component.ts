import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
})
export class CustomComponent implements OnInit, OnDestroy {
  constructor(private uService: UserService) {}

  techStatus: any;
  techStatus2: any;
  names: any;
  nameStatus: any;

  subs2: Subscription = new Subscription();
  ngOnInit(): void {
    //Ex-01 (Manual)
    const custObs1 = new Observable((ob) => {
      setTimeout(() => {
        ob.next('Angular');
      }, 1000);

      setTimeout(() => {
        ob.next('TypeScript');
      }, 2000);
      setTimeout(() => {
        ob.next('Html & Css');
        ob.complete();
      }, 3000);
    });

    custObs1.subscribe(
      (res) => {this.uService.elPrint(res, 'elContainer')},
      (err) => {this.techStatus = 'error'},
      () => {this.techStatus = 'completed'});

    //Ex-02 (Custom Interval)
    const arr2 = ['Angular','TypeScript','Html','Css','Java','Python','ReactJs'];
    const custObs2 = new Observable((ob) => {
      let count = 0;

      setInterval(() => {
        ob.next(arr2[count]);
        if (count >= 3) {ob.error('Error Emit')}
        if (count >= 5) {ob.complete()}
        count++;
      }, 1000)});

    this.subs2 = custObs2.subscribe(
      (res) => {this.uService.elPrint(res, 'elContainer2')},
      (err) => {this.techStatus2 = 'error'},
      () => {this.techStatus2 = 'completed'}
    );

    //Ex-03 (Random Names)
    const arr3 = ['Anup', 'Shekhar', 'Sharma', 'John', 'Alex', 'Robert', 'Bob'];
    const custObs3 = new Observable((ob) => {
      let count = 0;
      setInterval(() => {ob.next(arr3[count]);
        if (count >= 3) {ob.error('Error Emit')}
        if (count >= 5) {ob.complete()}
        count++;
      }, 1000)});

    custObs3.subscribe(
      (res) => {this.names = res},
      (err) => {this.nameStatus = 'error'},
      () => {this.nameStatus = 'completed'})}

  ngOnDestroy(): void {
    this.subs2.unsubscribe();
  }
}

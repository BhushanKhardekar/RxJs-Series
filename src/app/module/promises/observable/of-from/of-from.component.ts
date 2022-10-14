import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent implements OnInit {
  constructor(private _userService: UserService) {}

  obsMsg: any;

  ngOnInit(): void {
    //of
    const obs1 = of('Anup', 'Shekhar', 'Sharma');
    obs1.subscribe((res) => {
      this._userService.elPrint(res, 'elContainer');
    });

    //From
    const obs2 = of({ a: 'Anup', b: 'Shekhar', c: 'Sharma' });
    obs2.subscribe((res) => {
      this.obsMsg = res;
    });

    //Array
    let arr = ['AnupXy', 'ShekharXy', 'SharmaXy'];
    const obs3 = from(arr);
    obs3.subscribe((res) => {
      this._userService.elPrint(res, 'elContainer3');
    });

    //From-promise
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise Resolved');
      }, 3000);
    });
    const obs4 = from(promise);
    obs4.subscribe((res) => {
      this._userService.elPrint(res, 'elContainer4');
    });

    //From-String
    const obs5 = from('Welcome to MyWorld');
    obs5.subscribe((res) => {
      console.log('from p =>', res);
      this._userService.elPrint(res, 'elContainer5');
    });
  }
}

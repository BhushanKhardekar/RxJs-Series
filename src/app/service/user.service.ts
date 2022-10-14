import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  peronalDetails = new Subject<boolean>();
  addressDetails = new Subject<boolean>();


  elPrint(val: any , containerId:any) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el);
  }

}

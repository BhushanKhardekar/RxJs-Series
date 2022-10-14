import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-view-promises',
  templateUrl: './view-promises.component.html',
  styleUrls: ['./view-promises.component.scss']
})
export class ViewPromisesComponent implements OnInit {

  constructor(private _userService: UserService) { }

  //objects
  dell = { company: 'Dell', hdd: '1TB', ram: '8Gb', graphics: 'Integrated Graphics' }
  hp = { company: 'Dell', hdd: '1TB', ram: '8Gb', graphics: 'Nvidia - 940Mx (4GB)' }

  ngOnInit(): void {

  }
  //this.laptop();
  // this.callVal().then(data=> console.log(data))
  // laptop(){let buyLaptop=new Promise((resolve,reject) =>{ resolve('Promise is Resolved');//reject('Promise is Rejected');})
  //   buyLaptop.then(res=>{
  //     if(this.dellLaptop()){console.log(this.dell) }
  //     else if(this.hpLaptop()){console.log(this.hp)}
  //   }).catch(res=>{console.log('Laptop Not Available')})}
  // dellLaptop(){
  //   return true;
  // }

  // hpLaptop(){
  //   return false;
  // }

  // async callVal(){let res = await this.promise}
  // promise = new Promise((resolve, reject) =>{setTimeout(()=>{resolve('Data Recived')},3000)});


  //ex-01 with promise
  fetch1() {
    let result1: any = document.getElementById('result1');
    result1.innerText = "Fetching Data...";
    let promise = new Promise((resolve, reject) => { setTimeout(() => { resolve(this.dell) }, 3000) });
    promise.then(res => { result1.innerText = JSON.stringify(res) });
  }

  //ex-02 with Asynch/Await
  async fetch2() {
    let result2: any = document.getElementById('result2');
    result2.innerText = "Fetching Data...";
    let promise = new Promise((resolve, reject) => { setTimeout(() => { resolve(this.dell) }, 3000) });
    let data = await promise;
    result2.innerText = JSON.stringify(data);
  }


  incomingData = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

  //ex-03 with FetchApi
  // promise
  // fetch3() {
  //   let result3: any = document.getElementById('result3');
  //   result3.innerText = "Fetching Data...";
  //   this.incomingData.then(res => {result3.innerText = JSON.stringify(res);})
  // }

 //ex-03 with Asyn / Await
  async fetch3() {
    let result3: any = document.getElementById('result3');
    result3.innerText = "Fetching Data...";
    let res = await this.incomingData
    console.log(res);
  }
  // this._userService.peronalDetails.next(false);
  // this._userService.addressDetails.next(false);
}

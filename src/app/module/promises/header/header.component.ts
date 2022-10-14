import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  peronalDetails:boolean=false;
  addressDeatils:boolean=false;

  constructor( private _userService:UserService) {  }

  ngOnInit(): void {

    this._userService.addressDetails.subscribe(res=>{
      this.addressDeatils=res
    });

    this._userService.peronalDetails.subscribe(res=>{
      this.peronalDetails=res
    });

  }
}

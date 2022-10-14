import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements OnInit, AfterViewInit {
  constructor( private _userService:UserService) {}

  @ViewChild('addBtn') addBtn!: ElementRef;

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      let val = ('Video ' + count++);
      this._userService.elPrint(val,'elContainer');
      this._userService.elPrint(val,'elContainer2');
    });
  }


}

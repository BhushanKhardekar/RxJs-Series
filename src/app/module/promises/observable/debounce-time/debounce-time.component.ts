import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {

  @ViewChild('myInput') myInput:ElementRef | undefined;
  reqData=null;
  constructor() { }


  ngOnInit(): void {


  }

  ngAfterViewInit(): void {
    const searchTerm = fromEvent<any>(this.myInput?.nativeElement, 'keyup')
    searchTerm.pipe(map(event => event?.target.value))
    .subscribe(res=>{
      this.reqData=res

      setTimeout(()=>{
        this.reqData=null
      },2000)
    })
  }

}

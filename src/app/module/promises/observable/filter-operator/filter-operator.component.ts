import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrls: ['./filter-operator.component.scss'],
})
export class FilterOperatorComponent implements OnInit {
  dataArr = [
    { id: 1, name: 'Anup', gender: 'Male' },
    { id: 2, name: 'Priyanka', gender: 'Female' },
    { id: 3, name: 'Anish', gender: 'Male' },
    { id: 4, name: 'Vijay', gender: 'Male' },
    { id: 5, name: 'Laya', gender: 'Female' },
    { id: 6, name: 'Neha', gender: 'Female' },
    { id: 7, name: 'Sakshi', gender: 'Female' },
    { id: 8, name: 'Neeraj', gender: 'Male' },
    { id: 9, name: 'Anupma', gender: 'Female' },
    { id: 10, name: 'Viswajith', gender: 'Male' },
  ];

  data: any;
  data2: any;
  data3: any;

  constructor() { }

  ngOnInit(): void {
    const source = from(this.dataArr);

    //Ex - 01 Filter by length
    source
      .pipe(
        filter((member) => member.name.length > 5),
        toArray()
      )
      .subscribe((res) => {
        this.data = res;
      });

    //Ex - 02 Filter by Gender
    source
      .pipe(
        filter((member) => member.gender == 'Female'),
        toArray()
      )
      .subscribe((res) => {
        this.data2 = res;
      });

    //Ex - 03 Filter by nth Item
    source
      .pipe(
        filter((member) => member.id <= 7),
        toArray()
      )
      .subscribe((res) => {
        this.data3 = res;
      });
  }
}

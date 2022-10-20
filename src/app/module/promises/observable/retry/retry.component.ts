import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss'],
})
export class RetryComponent implements OnInit {
  person: any;
  fetching = false;
  status = 'No Data';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  fetch() {
    this.fetching = true;
    this.status = 'Fetching Data';
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        // retry(100),
        retryWhen((err) =>
          err.pipe(
            delay(3000),
            scan((retryCount) => {
              if (retryCount >= 5) {
                throw err;
              } else {
                retryCount = retryCount + 1;
                console.log('retryCount => ' + retryCount);
                this.status = 'Retry Attempt => ' + retryCount;
                return retryCount;
              }
            }, 0)
          )
        )
      )
      .subscribe({
        next: (res) => {
          this.person = res;
          this.fetching = false;
          this.status = 'Data Fetched';
        },
        error: (err) => {
          console.log(err);
          this.fetching = false;
          this.status = 'Problem in Fetching Data Fetched';
        },
      });
  }
}

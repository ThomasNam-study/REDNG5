import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rx-js-test',
  templateUrl: './rx-js-test.component.html',
  styles: []
})
export class RxJsTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fetchWork ()
  {
    const res = fetch("https://jsonplaceholder.typicode.com/users").then (res => res.json());

    res.then((value) => {
      console.log (`we got back ${value}`);
    }, (err) => {
      console.log (`${err}`);
    })
  }

}

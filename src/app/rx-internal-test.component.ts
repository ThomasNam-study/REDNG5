import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/observable/interval'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/throttleTime'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/pluck'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/scan'
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/reduce'
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-rx-internal-test',
  templateUrl: './rx-internal-test.component.html',
  styles: []
})
export class RxInternalTestComponent implements OnInit {

  constructor() { }

  obt : Observable<number>;

  s1 : Subscription;

  ngOnInit() {
    this.obt = Observable.interval(1000).take(5);
  }

  test1 ()
  {
    if (this.s1)
      this.s1.unsubscribe();

    this.s1 = this.obt.subscribe((t) => {

      console.log (`S - ${t}`)
    }, null, () => {
      console.log ("타이머 종료");
    })
  }

  test2 ()
  {
    if (this.s1)
    {
      this.s1.unsubscribe();
      this.s1 = null;
    }
  }
}

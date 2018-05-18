import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscribable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/throttleTime'
import 'rxjs/add/operator/map'
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-rxjs-page',
  templateUrl: './rxjs-page.component.html',
  styles: []
})
export class RxjsPageComponent implements OnInit {

  constructor() { }

  @ViewChild("myClick")
  myClick: ElementRef;

  subscript: any;

  subject: Subject<string>;

  mySubscript: Subscription;

  ngOnInit() {

    let observer = {
      next: (value) => {
        console.log (value);
      },
      error: (error) => {
        console.log (error);
      }
      ,
      complete: () => {
        console.log ("Finish!!");
      }
    };

    Observable.fromEvent (this.myClick.nativeElement, 'click')
      .throttleTime(1000)
      .subscribe(observer);
      // .subscribe((event) => console.log (event));

    Observable.create ((obs) => {
      obs.next('some value 1');
      obs.next('some value 2');
      obs.next('some value 3');
      obs.next('some value 4');
      obs.complete();
    }).subscribe((r) => {
      console.log (r);
    });


    this.subject = new Subject<string>();

    this.subject.subscribe((r) => {
      console.log ("source next", r);
    }, (error) => {
      console.log ("source error", error);
    }, () => {
      console.log ("source complete");
    });

  }

  startWork()
  {
    this.subscript = Observable.interval(1000)
      .map((v) => v * 2)
      //.throttleTime(2000)
      .subscribe((r) => {
        console.log (r);
      });
  }

  endWork()
  {
    console.log ("End work");

    this.subscript.unsubscribe();
  }

  subjectWork()
  {
    this.subject.next("TEST!!!");
  }

  subjectWorkSub ()
  {
    if (this.mySubscript)
      this.mySubscript.unsubscribe();

    this.mySubscript = this.subject.subscribe((r) => {
      console.log ("나 호출됨?", r);
    });
  }

  subjectWorkSub2 ()
  {
    if (this.mySubscript)
      this.mySubscript.unsubscribe();

    this.mySubscript = null;
  }
}

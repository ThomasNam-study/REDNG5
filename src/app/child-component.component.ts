import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styles: []
})
export class ChildComponentComponent implements OnInit {

  display: boolean = false;

  closeEvent: EventEmitter<void> = new EventEmitter<void>();


  constructor() { }

  ngOnInit() {

  }

  showDialog()
  {
    this.display = true;
  }
}

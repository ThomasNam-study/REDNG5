import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {Dialog} from 'primeng/dialog';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styles: []
})
export class ChildComponentComponent implements OnInit {

  display: boolean = false;

  closeEvent: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild(Dialog) dialog;

  constructor() { }

  ngOnInit() {

    this.dialog.onHide.subscribe((d) => {
      this.closeEvent.emit();
    });

    console.dir (this.dialog);
  }

  showDialog()
  {
    this.display = true;
  }
}

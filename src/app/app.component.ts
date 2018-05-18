import {Component, ElementRef, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private renderer: Renderer2)
  {

  }

  ngOnInit(): void {
  }
}

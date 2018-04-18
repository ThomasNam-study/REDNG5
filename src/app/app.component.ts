import {Component, ElementRef, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  @ViewChild("myDiv") el: ElementRef;



  treeData = [

    {name : "자동차", children : [
      {name : "현대"},
      {name : "기아"}
    ]},

    {name : "스마트폰", children : [
      {name : "삼성"},
      {name : "애플"},
      {name : "LG"},
    ]}
  ];




  constructor(private renderer: Renderer2)
  {

  }

  ngOnInit(): void {

    this.renderer.setStyle(this.el.nativeElement, "backgound-color", "red");
  }


}

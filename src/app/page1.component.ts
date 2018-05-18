import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styles: []
})
export class Page1Component implements OnInit {

  constructor() { }

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

  ngOnInit() {
  }

}

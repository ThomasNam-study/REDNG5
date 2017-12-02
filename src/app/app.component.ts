import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

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
  ]
}

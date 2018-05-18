import { Component, OnInit } from '@angular/core';
import {Action, Reducer} from './redux/reducer';
import {Store} from './redux/store';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styles: []
})
export class Page2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  test1()
  {
    let increseAction: Action = {type: 'INCREMENT'};
    let decreseAction: Action = {type: 'DECREMENT'};

    let reducer: Reducer<number> = (state: number, action: Action) => {

      switch (action.type) {
        case 'INCREMENT':
          return state + 1;

        case 'DECREMENT':
          return state - 1;

        case 'PLUS':
          return state + action.payload;

        default:
          return state;
      }
    };

    let store = new Store<number>(reducer, 0);

    console.log (store.getState());

    let plusAction: Action = {type: 'PLUS', payload: 7};

    store.dispatch(increseAction);
    console.log (store.getState());

    store.dispatch(plusAction);
    console.log (store.getState());
  }
}

import {Action, ListenerCallback, Reducer, UnsubscribeCallback} from './reducer';

export class Store<T>
{
  private  _state: T;

  private _listeners: ListenerCallback[] = [];

  constructor(private reducer: Reducer<T>, initState: T) {
    this._state = initState;
  }

  getState() : T
  {
    return this._state;
  }

  dispatch (action: Action) : void
  {
    this._state = this.reducer(this._state, action);

    this._listeners.forEach((l) => l());
  }

  subscribe(listener: ListenerCallback): UnsubscribeCallback
  {
    this._listeners.push(listener);

    return () => {
      this._listeners = this._listeners.filter(l => l !== listener);
    }
  }
}

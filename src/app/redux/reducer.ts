export interface Action
{
  type: string;

  payload?: any;
}

export interface Reducer<T>
{
  (state: T, action: Action): T;
}

export interface ListenerCallback
{
  () : void;
}

export interface UnsubscribeCallback
{
  () : void;
}

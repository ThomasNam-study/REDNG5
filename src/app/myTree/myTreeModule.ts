import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MyTreeDirective, MyTreeNodeDirective, TreeChildren} from "./myTree.directive";

@NgModule({
  declarations: [MyTreeNodeDirective, MyTreeDirective, TreeChildren],
  exports: [MyTreeNodeDirective, MyTreeDirective, TreeChildren],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class MyTreeModule { }

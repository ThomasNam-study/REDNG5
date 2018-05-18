import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


import { AppComponent } from './app.component';
import {MyTreeModule} from './myTree/myTreeModule';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyComponentComponent } from './my-component.component';
import { ChildComponentComponent } from './child-component.component';
import { Page1Component } from './page1.component';
import {AppRoutingModule, appRoutingProviders} from "./app.routes";
import { Page2Component } from './page2.component';
import { RxjsPageComponent } from './rxjs-page.component';
import { RxJsTestComponent } from './rx-js-test.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ChildComponentComponent,
    Page1Component,
    Page2Component,
    RxjsPageComponent,
    RxJsTestComponent
  ],
  imports: [
    BrowserModule, MyTreeModule,BrowserAnimationsModule, AppRoutingModule,
    MatButtonModule, MatCheckboxModule
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  entryComponents : [ChildComponentComponent],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MyTreeModule} from './myTree/myTreeModule';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyComponentComponent } from './my-component.component';
import { ChildComponentComponent } from './child-component.component';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { Page1Component } from './page1.component';
import {AppRoutingModule, appRoutingProviders} from "./app.routes";
import { Page2Component } from './page2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ChildComponentComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule, MyTreeModule,BrowserAnimationsModule, AppRoutingModule,
    PanelModule,
    DialogModule,
    ButtonModule
  ],
  entryComponents : [ChildComponentComponent],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

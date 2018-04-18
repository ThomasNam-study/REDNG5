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

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule, MyTreeModule,BrowserAnimationsModule,
    PanelModule,
    DialogModule,
    ButtonModule
  ],
  entryComponents : [ChildComponentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

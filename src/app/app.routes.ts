import {RouterModule, Routes} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {NgModule} from '@angular/core';
import {Page1Component} from './page1.component';
import {Page2Component} from './page2.component';
import {RxjsPageComponent} from './rxjs-page.component';
import {RxJsTestComponent} from './rx-js-test.component';

const introRouter: Routes = [
  {path: 'page1', component: Page1Component},
  {path: 'page2', component: Page2Component},
  {path: 'rxjs1', component: RxjsPageComponent},
  {path: 'rxjsTest', component: RxJsTestComponent}
];

const appRouter: Routes = [...introRouter,];

export const appRoutingProviders: any[] = [
  {provide: LocationStrategy, useClass: HashLocationStrategy}
];

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

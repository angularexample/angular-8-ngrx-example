import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {XxxHomeComponent} from './modules/xxx-home/xxx-home.component';
import {XxxHomeModule} from './modules/xxx-home/xxx-home.module';
import {XxxPageNotFoundComponent} from './modules/xxx-page-not-found/xxx-page-not-found.component';
import {XxxPageNotFoundModule} from './modules/xxx-page-not-found/xxx-page-not-found.module';

export const xxxAppRoutes: Routes = [
  {path: '', component: XxxHomeComponent},
  {path: '**', component: XxxPageNotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    XxxHomeModule,
    XxxPageNotFoundModule,
    RouterModule.forRoot(
        xxxAppRoutes
    )
  ]
})

export class XxxAppRoutingModule {
}

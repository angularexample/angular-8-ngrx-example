import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {XxxStackExchangeAnswersComponent} from './xxx-stack-exchange-answers.component';

const routes: Routes = [
  {path: 'answers/:id', component: XxxStackExchangeAnswersComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class XxxStackExchangeAnswersRoutingModule {
}

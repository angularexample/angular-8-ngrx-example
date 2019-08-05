import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {XxxStackExchangeQuestionsComponent} from './xxx-stack-exchange-questions.component';

const routes: Routes = [
  {path: 'questions', component: XxxStackExchangeQuestionsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class XxxStackExchangeQuestionsRoutingModule {
}

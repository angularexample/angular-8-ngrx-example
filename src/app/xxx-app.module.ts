import {NgModule} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {BrowserModule} from '@angular/platform-browser';

import {XxxAlertModule, XxxErrorHandlerModule, XxxLogModule, XxxMessageModule} from './xxx-common';
import {XxxAppComponent} from './xxx-app.component';
import {XxxAppRoutingModule} from './xxx-app-routing.module';
import {XxxHeaderModule} from './modules/xxx-header/xxx-header.module';
import {XxxStackExchangeAnswersModule} from './modules/xxx-stack-exchange-answers/xxx-stack-exchange-anwers.module';
import {XxxStackExchangeQuestionsModule} from './modules/xxx-stack-exchange-questions/xxx-stack-exchange-questions.module';
import {XxxStackExchangeSearchModule} from './modules/xxx-stack-exchange-search/xxx-stack-exchange-search.module';

@NgModule({
  bootstrap: [XxxAppComponent],
  declarations: [XxxAppComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    XxxAlertModule,
    XxxErrorHandlerModule,
    XxxHeaderModule,
    XxxLogModule,
    XxxMessageModule,
    XxxStackExchangeAnswersModule,
    XxxStackExchangeQuestionsModule,
    XxxStackExchangeSearchModule,
    XxxAppRoutingModule
  ]
})

export class XxxAppModule {
}

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {XxxAlertModule, XxxDataModule, XxxEventMgrModule, XxxStateStoreModule} from '../../xxx-common';
import {XxxStackExchangeAnswersComponent} from './xxx-stack-exchange-answers.component';
import {XxxStackExchangeAnswersRoutingModule} from './xxx-stack-exchange-answers-routing.module';

@NgModule({
  declarations: [XxxStackExchangeAnswersComponent],
  exports: [XxxStackExchangeAnswersComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    XxxAlertModule,
    XxxDataModule,
    XxxEventMgrModule,
    XxxStateStoreModule,
    XxxStackExchangeAnswersRoutingModule
  ]
})

export class XxxStackExchangeAnswersModule {
}

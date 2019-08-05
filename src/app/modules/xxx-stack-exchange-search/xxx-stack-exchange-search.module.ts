import {NgModule} from '@angular/core';

import {XxxEventMgrModule, XxxMessageModule, XxxStateStoreModule} from '../../xxx-common';
import {XxxStackExchangeSearchService} from './xxx-stack-exchange-search.service';

@NgModule({
  imports: [
    XxxEventMgrModule,
    XxxMessageModule,
    XxxStateStoreModule
  ],
  providers: [XxxStackExchangeSearchService]
})

export class XxxStackExchangeSearchModule {
}

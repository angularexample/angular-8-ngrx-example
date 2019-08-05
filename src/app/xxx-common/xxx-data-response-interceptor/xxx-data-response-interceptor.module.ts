import {NgModule} from '@angular/core';

import {XxxDataResponseInterceptor} from './xxx-data-response-interceptor.service';
import {XxxMessageModule} from '../xxx-message/xxx-message.module';

@NgModule({
  imports: [XxxMessageModule],
  providers: [XxxDataResponseInterceptor]
})

export class XxxDataResponseInterceptorModule {
}

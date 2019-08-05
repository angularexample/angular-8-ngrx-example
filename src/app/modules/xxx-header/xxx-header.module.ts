import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';

import {XxxHeaderComponent} from './xxx-header.component';
import {XxxSearchBoxModule} from '../xxx-search-box/xxx-search-box.module';

@NgModule({
  declarations: [XxxHeaderComponent],
  exports: [XxxHeaderComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    XxxSearchBoxModule
  ]
})

export class XxxHeaderModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { metaReducers, reducers } from './reducers';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '@env/environment';
import { XxxAlertModule, XxxErrorHandlerModule, XxxLogModule, XxxMessageModule } from '@app/xxx-common';
import { XxxAnswersPageModule } from '@app/modules/xxx-answers-page/xxx-answers-page.module';
import { XxxHeaderModule } from '@app/modules/xxx-header/xxx-header.module';
import { XxxHomePageModule } from '@app/modules/xxx-home-page/xxx-home-page.module';
import { XxxQuestionsPageModule } from '@app/modules/xxx-questions-page/xxx-questions-page.module';
import { XxxSearchModule } from '@app/modules/xxx-search/xxx-search.module';

import * as fromSearchBox from '@app/modules/xxx-search-box/xxx-search-box.reducer';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    XxxAlertModule,
    XxxAnswersPageModule,
    XxxErrorHandlerModule,
    XxxHeaderModule,
    XxxHomePageModule,
    XxxLogModule,
    XxxMessageModule,
    XxxQuestionsPageModule,
    XxxSearchModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects])
  ]
})

export class AppModule {
}

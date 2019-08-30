import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
// import { Subscription } from 'rxjs';

import { XxxAlertService, XxxLogEntry, XxxLogLevelEnum, XxxLogService } from '@app/xxx-common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnDestroy, OnInit {
  // private subscriptionDataError: Subscription;

  constructor(
      private xxxAlertService: XxxAlertService,
      private xxxLogService: XxxLogService
  ) {
    this.xxxLogService.log(new XxxLogEntry('XxxAppComponent constructor', XxxLogLevelEnum.INFO));
  }

  ngOnInit(): void {
    // this.subscribeToMessages();
  }

  ngOnDestroy() {
    // this.subscriptionDataError.unsubscribe();
  }

  // private subscribeToMessages(): void {
  //   this.subscriptionDataError = this.xxxMessageService.subscribe('data.responseError', (payload) => {
  //     this.xxxAlertService.openAlert(payload.alertType, payload.alertMessage);
  //   });
  // }
}

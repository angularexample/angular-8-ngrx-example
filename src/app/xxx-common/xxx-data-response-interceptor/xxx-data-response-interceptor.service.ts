import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { XxxAlertService } from '../xxx-alert/xxx-alert.service';
import { XxxAlertType } from '../xxx-alert/xxx-alert.enum';

// import {environment} from '@env/environment';

@Injectable({providedIn: 'root'})
export class XxxDataResponseInterceptor implements HttpInterceptor {
  constructor(private xxxMessageService: XxxAlertService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
        .pipe(
            catchError((err: any) => {
              let errorMsg = '';
              if (err instanceof HttpErrorResponse) {
                if (!navigator.onLine) {
                  errorMsg = 'Not connected to internet.';
                } else {
                  if (err.status === 401) {
                    // this.handleAuthError();
                  } else {
                    errorMsg = `Error Code: ${err.status},  Message: ${err.message}`;
                  }
                }
              } else {
                errorMsg = 'Unknown Error. Response format not recognized.';
              }
              this.handleError(errorMsg);
              return throwError(errorMsg);
            })
        );
  }

  private handleError(errorMsg): void {
    // const message = new XxxMessage('data.responseError');
    // message.payload = {
    //   alertType: XxxAlertType.ERROR,
    //   alertMessage: errorMsg
    // };
    // this.xxxMessageService.broadcast(message);
  }
}

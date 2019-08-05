import {DebugElement} from '@angular/core';
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {Router, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

import {MockXxxAlertService} from './xxx-common/xxx-alert/mock-xxx-alert.service';
import {MockXxxErrorHandler} from './xxx-common/xxx-error-handler/mock-xxx-error-handler';
import {MockXxxHeaderModule} from './modules/xxx-header/mock-xxx-header.module';
import {MockXxxLogService} from './xxx-common/xxx-log/mock-xxx-log.service';
import {MockXxxStackExchangeSearchService} from './modules/xxx-stack-exchange-search/mock-xxx-stack-exchange-search.service';
import {XxxAlertService} from './xxx-common/xxx-alert/xxx-alert.service';
import {XxxAppComponent} from './xxx-app.component';
import {XxxErrorHandler} from './xxx-common/xxx-error-handler/xxx-error-handler.service';
import {XxxHomeComponent} from './modules/xxx-home/mock-xxx-home.component';
import {XxxLogService} from './xxx-common/xxx-log/xxx-log.service';
import {XxxMessage} from './xxx-common/xxx-message/xxx-message';
import {XxxMessageService} from './xxx-common/xxx-message/xxx-message.service';
import {XxxStackExchangeSearchService} from './modules/xxx-stack-exchange-search/xxx-stack-exchange-search.service';
import {XxxPageNotFoundComponent} from './modules/xxx-page-not-found/mock-xxx-page-not-found.component';

class XxxLogEntry {
  constructor(message: string, level: any) {
  }
}

describe('XxxAppComponent', () => {
  let component: XxxAppComponent;
  let fixture: ComponentFixture<XxxAppComponent>;
  let hostDebugElement: DebugElement;
  let router: Router;
  let spyAlertService: jasmine.Spy;
  let spyErrorHandler: jasmine.Spy;
  let spyLogService: jasmine.Spy;
  let xxxAlertService: XxxAlertService;
  let xxxErrorHandler: XxxErrorHandler;
  let xxxLogService: XxxLogService;
  let xxxMessageService: XxxMessageService;
  let xxxStackExchangeSearchService: XxxStackExchangeSearchService;

  // copy the routes from xxx-app-routing.module
  // so we can use the mock components
  const xxxAppRoutes: Routes = [
    {path: '', component: XxxHomeComponent},
    {path: '**', component: XxxPageNotFoundComponent}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        XxxAppComponent,
        XxxHomeComponent,
        XxxPageNotFoundComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(xxxAppRoutes),
        MockXxxHeaderModule
      ],
      providers: [
        {provide: XxxAlertService, useClass: MockXxxAlertService},
        {provide: XxxErrorHandler, useClass: MockXxxErrorHandler},
        {provide: XxxLogService, useClass: MockXxxLogService},
        XxxMessageService,
        {provide: XxxStackExchangeSearchService, useClass: MockXxxStackExchangeSearchService}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    xxxAlertService = TestBed.get(XxxAlertService);
    spyAlertService = spyOn(xxxAlertService, 'openAlert');
    xxxErrorHandler = TestBed.get(XxxErrorHandler);
    spyErrorHandler = spyOn(xxxErrorHandler, 'handleError');
    xxxLogService = TestBed.get(XxxLogService);
    spyLogService = spyOn(xxxLogService, 'log');
    xxxMessageService = TestBed.get(XxxMessageService);
    xxxStackExchangeSearchService = TestBed.get(XxxStackExchangeSearchService);
    fixture = TestBed.createComponent(XxxAppComponent);
    component = fixture.componentInstance;
    hostDebugElement = fixture.debugElement;
    router = TestBed.get(Router);
    router.initialNavigation();
  });

  it('should create the app component', () => {
    expect(component).toBeDefined();
  });

  it('should run log service on create app component', () => {
    expect(spyLogService).toHaveBeenCalled();
  });

  it('should run alert service when message broadcasts data error', fakeAsync(() => {
    let alertType: string;
    let alertMessage: string;
    const mockMessage = new XxxMessage('data.responseError');
    mockMessage.payload = {
      alertType: 'error',
      alertMessage: 'error msg'
    };
    spyAlertService.and.callFake((type: any, msg: any) => {
      alertMessage = msg;
      alertType = type;
    });
    xxxMessageService.broadcast(mockMessage);
    tick();
    expect(spyAlertService).toHaveBeenCalled();
    expect(alertType).toBe(mockMessage.payload.alertType);
    expect(alertMessage).toBe(mockMessage.payload.alertMessage);
  }));

  it('should create the home component when navigated to that route url', fakeAsync(() => {
    router.navigate(['']);
    tick();
    const targetElement = hostDebugElement.query(By.css('xxx-home'));
    expect(targetElement).toBeDefined();
  }));

  it('should create the page not found component when navigated to that route url', fakeAsync(() => {
    router.navigate(['badpath']);
    tick();
    const targetElement = hostDebugElement.query(By.css('xxx-page-not-found'));
    expect(targetElement).toBeDefined();
  }));

  it('should create the stack exchange search service', () => {
    expect(xxxStackExchangeSearchService).toBeDefined();
  });
});

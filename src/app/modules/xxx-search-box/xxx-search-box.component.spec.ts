import {DebugElement} from '@angular/core';
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {By} from '@angular/platform-browser';

import {MockXxxEventMgrService, MockXxxStateStoreService} from '../../xxx-common/test';
import {XxxEventMgrService, XxxMessage, XxxMessageService, XxxStateStoreService} from '../../xxx-common';
import {XxxSearchBoxComponent} from './xxx-search-box.component';

describe('XxxSearchBoxComponent', () => {
  let buttonElement: HTMLButtonElement;
  let component: XxxSearchBoxComponent;
  let fixture: ComponentFixture<XxxSearchBoxComponent>;
  let inputElement: HTMLInputElement;
  let spyEventMgrService: jasmine.Spy;
  let spyStateStoreService: jasmine.Spy;
  let xxxEventMgrService: XxxEventMgrService;
  let xxxMessageService: XxxMessageService;
  let xxxStateStoreService: XxxStateStoreService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [XxxSearchBoxComponent],
      imports: [
        FormsModule,
        MatButtonModule,
        MatIconModule
      ],
      providers: [
        {provide: XxxEventMgrService, useClass: MockXxxEventMgrService},
        XxxMessageService,
        {provide: XxxStateStoreService, useClass: MockXxxStateStoreService}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    let buttonDebugElement: DebugElement;
    let inputDebugElement: DebugElement;

    fixture = TestBed.createComponent(XxxSearchBoxComponent);
    component = fixture.componentInstance;
    buttonDebugElement = fixture.debugElement.query(By.css('button'));
    buttonElement = buttonDebugElement.nativeElement as HTMLButtonElement;
    inputDebugElement = fixture.debugElement.query(By.css('input'));
    inputElement = inputDebugElement.nativeElement as HTMLInputElement;
    xxxEventMgrService = TestBed.get(XxxEventMgrService);
    spyEventMgrService = spyOn(xxxEventMgrService, 'handleEvent');
    xxxMessageService = TestBed.get(XxxMessageService);
    xxxStateStoreService = TestBed.get(XxxStateStoreService);
    spyStateStoreService = spyOn(xxxStateStoreService, 'putItem');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run event mgr service on click', () => {
    buttonElement.click();
    expect(spyEventMgrService).toHaveBeenCalled();
  });

  it('should run state store service on click', () => {
    buttonElement.click();
    expect(spyStateStoreService).toHaveBeenCalled();
  });

  it('should enable button after message received', fakeAsync(() => {
    xxxMessageService.broadcast(new XxxMessage('searchButtonEnable'));
    tick();
    fixture.detectChanges();
    expect(component.isButtonDisabled).toBeFalsy();
  }));
});

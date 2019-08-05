import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import {MockXxxEventMgrService, MockXxxStateStoreService} from '../../xxx-common/test';
import {XxxEventMgrService, XxxMessage, XxxMessageService, XxxStateStoreService} from '../../xxx-common';
import {XxxStackExchangeSearchService} from './xxx-stack-exchange-search.service';

describe('XxxStackExchangeSearchService', () => {
  let spyEventMgrHandleEvent: jasmine.Spy;
  let spyStateStoreGetItem: jasmine.Spy;
  let spyStateStorePutItem: jasmine.Spy;
  let xxxEventMgrService: XxxEventMgrService;
  let xxxMessageService: XxxMessageService;
  let xxxStackExchangeSearchService: XxxStackExchangeSearchService;
  let xxxStateStoreService: XxxStateStoreService;

  function createService() {
    xxxStackExchangeSearchService = TestBed.get(XxxStackExchangeSearchService);
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: XxxEventMgrService, useClass: MockXxxEventMgrService},
        XxxMessageService,
        XxxStackExchangeSearchService,
        {provide: XxxStateStoreService, useClass: MockXxxStateStoreService}
      ]
    });
  });

  beforeEach(() => {
    xxxEventMgrService = TestBed.get(XxxEventMgrService);
    xxxMessageService = TestBed.get(XxxMessageService);
    xxxStateStoreService = TestBed.get(XxxStateStoreService);
    spyEventMgrHandleEvent = spyOn(xxxEventMgrService, 'handleEvent');
    // state store needs to return different value each time for these tests
    spyStateStoreGetItem = spyOn(xxxStateStoreService, 'getItem').and.returnValue(Math.random().toString());
    spyStateStorePutItem = spyOn(xxxStateStoreService, 'putItem');
  });

  it('should create service', () => {
    createService();
    expect(xxxStackExchangeSearchService).toBeDefined();
  });

  it('should run state store and event mgr services when message broadcasts search text change', fakeAsync(() => {
    createService();
    const mockMessage = new XxxMessage('searchTextChange');
    xxxMessageService.broadcast(mockMessage);
    tick();
    expect(spyStateStoreGetItem).toHaveBeenCalled();
    expect(spyStateStorePutItem).toHaveBeenCalled();
    expect(spyEventMgrHandleEvent).toHaveBeenCalled();
  }));

  it('should handle missing search text from state', fakeAsync(() => {
    spyStateStoreGetItem.and.returnValue(undefined);
    createService();
    const mockMessage = new XxxMessage('searchTextChange');
    xxxMessageService.broadcast(mockMessage);
    tick();
    expect(spyEventMgrHandleEvent).not.toHaveBeenCalled();
  }));
});

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { XxxSearchBoxEffects } from './xxx-search-box.effects';

describe('XxxSearchBoxEffects', () => {
  let actions$: Observable<any>;
  let effects: XxxSearchBoxEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XxxSearchBoxEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get<XxxSearchBoxEffects>(XxxSearchBoxEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

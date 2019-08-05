import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {XxxPageNotFoundComponent} from './xxx-page-not-found.component';

describe('XxxPageNotFoundComponent', () => {
  let component: XxxPageNotFoundComponent;
  let fixture: ComponentFixture<XxxPageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [XxxPageNotFoundComponent]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XxxPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

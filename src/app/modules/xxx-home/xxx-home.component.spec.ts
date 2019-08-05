import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {XxxHomeComponent} from './xxx-home.component';

describe('XxxHomeComponent', () => {
  let component: XxxHomeComponent;
  let fixture: ComponentFixture<XxxHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [XxxHomeComponent]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XxxHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

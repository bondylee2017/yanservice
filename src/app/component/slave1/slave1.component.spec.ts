import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slave1Component } from './slave1.component';

describe('Slave1Component', () => {
  let component: Slave1Component;
  let fixture: ComponentFixture<Slave1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slave1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slave1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

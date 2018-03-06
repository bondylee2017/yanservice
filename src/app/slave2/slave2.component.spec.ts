import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slave2Component } from './slave2.component';

describe('Slave2Component', () => {
  let component: Slave2Component;
  let fixture: ComponentFixture<Slave2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slave2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slave2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

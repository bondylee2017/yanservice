import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonserviceComponent } from './personservice.component';

describe('PersonserviceComponent', () => {
  let component: PersonserviceComponent;
  let fixture: ComponentFixture<PersonserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

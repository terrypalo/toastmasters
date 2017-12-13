import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDutyDesiresComponent } from './update-duty-desires.component';

describe('UpdateDutyDesiresComponent', () => {
  let component: UpdateDutyDesiresComponent;
  let fixture: ComponentFixture<UpdateDutyDesiresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDutyDesiresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDutyDesiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

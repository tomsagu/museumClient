import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceTypeComponent } from './maintenanceType.component';

describe('MaintenanceTypeComponent', () => {
  let component: MaintenanceTypeComponent;
  let fixture: ComponentFixture<MaintenanceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

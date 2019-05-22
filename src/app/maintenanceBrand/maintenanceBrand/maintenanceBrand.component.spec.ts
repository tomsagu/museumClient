import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceBrandComponent } from './maintenanceBrand.component';

describe('MaintenanceBrandComponent', () => {
  let component: MaintenanceBrandComponent;
  let fixture: ComponentFixture<MaintenanceBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

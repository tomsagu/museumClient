import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceRoomComponent } from './maintenanceRoom.component';

describe('MaintenanceRoomComponent', () => {
  let component: MaintenanceRoomComponent;
  let fixture: ComponentFixture<MaintenanceRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

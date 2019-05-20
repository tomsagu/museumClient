import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceDocumentationComponent } from './maintenanceDocumentation.component';

describe('MaintenanceDocumentationComponent', () => {
  let component: MaintenanceDocumentationComponent;
  let fixture: ComponentFixture<MaintenanceDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

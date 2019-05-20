import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceArticleDialogComponent } from './maintenanceArticleDialog.component';

describe('MaintenanceArticleDialogComponent', () => {
  let component: MaintenanceArticleDialogComponent;
  let fixture: ComponentFixture<MaintenanceArticleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceArticleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceArticleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

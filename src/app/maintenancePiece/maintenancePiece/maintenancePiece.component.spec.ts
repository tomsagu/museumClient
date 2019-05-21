import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePieceComponent } from './maintenancePiece.component';

describe('PieceCRUDComponent', () => {
  let component: MaintenancePieceComponent;
  let fixture: ComponentFixture<MaintenancePieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancePieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceCRUDComponent } from './pieceCRUD.component';

describe('PieceCRUDComponent', () => {
  let component: PieceCRUDComponent;
  let fixture: ComponentFixture<PieceCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieceCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieceCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

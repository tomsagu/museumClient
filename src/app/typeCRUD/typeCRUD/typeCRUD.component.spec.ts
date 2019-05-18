import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCRUDComponent } from './typeCRUD.component';

describe('TypeCRUDComponent', () => {
  let component: TypeCRUDComponent;
  let fixture: ComponentFixture<TypeCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

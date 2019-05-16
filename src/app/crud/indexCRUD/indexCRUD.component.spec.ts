import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCRUDComponent } from './indexCRUD.component';

describe('IndexCRUDComponent', () => {
  let component: IndexCRUDComponent;
  let fixture: ComponentFixture<IndexCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

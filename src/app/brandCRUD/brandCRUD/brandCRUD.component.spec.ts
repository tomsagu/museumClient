import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandCRUDComponent } from './brandCRUD.component';

describe('BrandCRUDComponent', () => {
  let component: BrandCRUDComponent;
  let fixture: ComponentFixture<BrandCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

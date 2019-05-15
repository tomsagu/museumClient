import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionCRUDComponent } from './collectionCRUD.component';

describe('CollectionCRUDComponent', () => {
  let component: CollectionCRUDComponent;
  let fixture: ComponentFixture<CollectionCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationCRUDComponent } from './documentationCRUD.component';

describe('DocumentationCRUDComponent', () => {
  let component: DocumentationCRUDComponent;
  let fixture: ComponentFixture<DocumentationCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentationCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

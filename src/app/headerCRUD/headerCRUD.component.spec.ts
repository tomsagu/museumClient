import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCRUDComponent } from './headerCRUD.component';

describe('HeaderCRUDComponent', () => {
  let component: HeaderCRUDComponent;
  let fixture: ComponentFixture<HeaderCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCRUDComponent } from './roomCRUD.component';

describe('RoomCRUDComponent', () => {
  let component: RoomCRUDComponent;
  let fixture: ComponentFixture<RoomCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomCRUDComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

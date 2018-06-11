import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryItemListComponent } from './itinerary-item-list.component';

describe('ItineraryItemListComponent', () => {
  let component: ItineraryItemListComponent;
  let fixture: ComponentFixture<ItineraryItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItineraryItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

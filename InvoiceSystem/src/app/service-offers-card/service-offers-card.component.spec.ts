import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOffersCardComponent } from './service-offers-card.component';

describe('ServiceOffersCardComponent', () => {
  let component: ServiceOffersCardComponent;
  let fixture: ComponentFixture<ServiceOffersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceOffersCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceOffersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

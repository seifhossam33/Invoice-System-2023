import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneServicesComponent } from './telephone-services.component';

describe('TelephoneServicesComponent', () => {
  let component: TelephoneServicesComponent;
  let fixture: ComponentFixture<TelephoneServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephoneServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelephoneServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

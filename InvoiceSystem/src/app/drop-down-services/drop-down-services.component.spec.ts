import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownServicesComponent } from './drop-down-services.component';

describe('DropDownServicesComponent', () => {
  let component: DropDownServicesComponent;
  let fixture: ComponentFixture<DropDownServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropDownServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

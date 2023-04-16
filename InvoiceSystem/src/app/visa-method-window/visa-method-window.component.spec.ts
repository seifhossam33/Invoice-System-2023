import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaMethodWindowComponent } from './visa-method-window.component';

describe('VisaMethodWindowComponent', () => {
  let component: VisaMethodWindowComponent;
  let fixture: ComponentFixture<VisaMethodWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaMethodWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisaMethodWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

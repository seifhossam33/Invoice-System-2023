import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashMethodWindowComponent } from './cash-method-window.component';

describe('CashMethodWindowComponent', () => {
  let component: CashMethodWindowComponent;
  let fixture: ComponentFixture<CashMethodWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashMethodWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashMethodWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

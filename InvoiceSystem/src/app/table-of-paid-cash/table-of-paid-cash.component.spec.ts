import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfPaidCashComponent } from './table-of-paid-cash.component';

describe('TableOfPaidCashComponent', () => {
  let component: TableOfPaidCashComponent;
  let fixture: ComponentFixture<TableOfPaidCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOfPaidCashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableOfPaidCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

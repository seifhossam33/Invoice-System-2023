import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesForTheClientComponent } from './invoices-for-the-client.component';

describe('InvoicesForTheClientComponent', () => {
  let component: InvoicesForTheClientComponent;
  let fixture: ComponentFixture<InvoicesForTheClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesForTheClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesForTheClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

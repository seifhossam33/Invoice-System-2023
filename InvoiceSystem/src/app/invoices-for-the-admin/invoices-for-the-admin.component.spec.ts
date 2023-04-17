import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesForTheAdminComponent } from './invoices-for-the-admin.component';

describe('InvoicesForTheAdminComponent', () => {
  let component: InvoicesForTheAdminComponent;
  let fixture: ComponentFixture<InvoicesForTheAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesForTheAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesForTheAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

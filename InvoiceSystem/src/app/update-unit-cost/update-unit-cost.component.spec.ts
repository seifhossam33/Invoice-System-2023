import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUnitCostComponent } from './update-unit-cost.component';

describe('UpdateUnitCostComponent', () => {
  let component: UpdateUnitCostComponent;
  let fixture: ComponentFixture<UpdateUnitCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUnitCostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUnitCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

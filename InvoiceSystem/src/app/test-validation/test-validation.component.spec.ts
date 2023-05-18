import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestValidationComponent } from './test-validation.component';

describe('TestValidationComponent', () => {
  let component: TestValidationComponent;
  let fixture: ComponentFixture<TestValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

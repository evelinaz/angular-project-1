import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMIPageComponent } from './bmipage.component';

describe('BMIPageComponent', () => {
  let component: BMIPageComponent;
  let fixture: ComponentFixture<BMIPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMIPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMIPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastDinnerComponent } from './last-dinner.component';

describe('LastDinnerComponent', () => {
  let component: LastDinnerComponent;
  let fixture: ComponentFixture<LastDinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastDinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastDinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

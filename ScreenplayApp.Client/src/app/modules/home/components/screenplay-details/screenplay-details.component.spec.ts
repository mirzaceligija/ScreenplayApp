import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenplayDetailsComponent } from './screenplay-details.component';

describe('ScreenplayDetailsComponent', () => {
  let component: ScreenplayDetailsComponent;
  let fixture: ComponentFixture<ScreenplayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenplayDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenplayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

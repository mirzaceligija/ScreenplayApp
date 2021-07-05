import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenplayCardComponent } from './screenplay-card.component';

describe('ScreenplayCardComponent', () => {
  let component: ScreenplayCardComponent;
  let fixture: ComponentFixture<ScreenplayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenplayCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenplayTableComponent } from './screenplay-table.component';

describe('ScreenplayTableComponent', () => {
  let component: ScreenplayTableComponent;
  let fixture: ComponentFixture<ScreenplayTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenplayTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenplayTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

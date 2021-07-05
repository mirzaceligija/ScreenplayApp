import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenplayListComponent } from './screenplay-list.component';

describe('ScreenplayListComponent', () => {
  let component: ScreenplayListComponent;
  let fixture: ComponentFixture<ScreenplayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenplayListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

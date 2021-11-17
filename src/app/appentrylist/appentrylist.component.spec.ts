import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppentrylistComponent } from './appentrylist.component';

describe('AppentrylistComponent', () => {
  let component: AppentrylistComponent;
  let fixture: ComponentFixture<AppentrylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppentrylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppentrylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

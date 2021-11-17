import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedCalendersComponent } from './searched-calenders.component';

describe('SearchedCalendersComponent', () => {
  let component: SearchedCalendersComponent;
  let fixture: ComponentFixture<SearchedCalendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedCalendersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedCalendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

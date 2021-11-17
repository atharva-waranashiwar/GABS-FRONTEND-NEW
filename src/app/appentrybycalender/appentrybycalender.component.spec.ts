import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppentrybycalenderComponent } from './appentrybycalender.component';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
//import { RouterTestingModule } from "@angular/router/testing";
fdescribe('AppentrybycalenderComponent', () => {
  let component: AppentrybycalenderComponent;
  let fixture: ComponentFixture<AppentrybycalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppentrybycalenderComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppentrybycalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',() => {
      expect(component).toBeTruthy();
    }
  )
});

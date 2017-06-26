import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {

  let fixture: ComponentFixture<DashboardComponent>;
  let HTMLnode: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [
        DashboardComponent
      ]
    })

    fixture = TestBed.createComponent(DashboardComponent);
    HTMLnode = fixture.debugElement.nativeElement;

  });


  it("should render a wrapper for the dashboard elements", () => {
    expect(HTMLnode.querySelector('#grid-wrap')).not.toEqual(null);
  });

  it("should render a dashboard button titled Iron Man", () => {
    expect(HTMLnode.querySelector('.dashBtns').textContent).toMatch('IRON MAN');
  });

});

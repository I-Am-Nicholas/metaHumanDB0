import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {

  let comp: DashboardComponent
  let fixture: ComponentFixture<DashboardComponent>;
  let dbug: DebugElement;
  let HTMLnode: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [
        DashboardComponent
      ]
    })

    fixture = TestBed.createComponent(DashboardComponent);
    comp = fixture.componentInstance;
    dbug = fixture.debugElement;
    HTMLnode = fixture.debugElement.nativeElement;

  }));


  it("should render a wrapper for the dashboard elements", async(() => {
    expect(HTMLnode.querySelector('#grid-wrap')).not.toEqual(null);
  }));

  it("should render a dashboard button titled Iron Man", async(() => {
    expect(HTMLnode.querySelector('.dashBtns').textContent).toMatch('IRON MAN');
  }));

});

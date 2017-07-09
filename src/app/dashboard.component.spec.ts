import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { MetaService } from './meta-service';


describe('DashboardComponent', () => {

  let fixture: ComponentFixture<DashboardComponent>;
  let HTMLnode: HTMLElement;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [
        DashboardComponent
      ],
      providers: [ MetaService ],
      })

    fixture = TestBed.createComponent(DashboardComponent);
    HTMLnode = fixture.debugElement.nativeElement;

  });


  it("should render a wrapper for the dashboard elements", () => {
    expect(HTMLnode.querySelector('#grid-wrap').childElementCount).toEqual(1);
  });

  xit("should render four elements", async(() => {
    var grid = HTMLnode.querySelector('.grid')
    console.log(grid.childElementCount)
    expect(grid.childElementCount).toBe(4);
  }));

  xit("should render a dashboard button titled Iron Man", () => {
    expect(HTMLnode.querySelector('.grid').textContent).toContain('IRON MAN');
  });

});

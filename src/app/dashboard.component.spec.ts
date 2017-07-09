import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';

import { DashboardComponent } from './dashboard.component';
import { MetaService } from './meta-service';

let fixture: ComponentFixture<DashboardComponent>;
let HTMLnode: HTMLElement;
let page: Page;
let comp: DashboardComponent;
let mockNames: {}

describe('DashboardComponent', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent
      ],
      providers: [ MetaService ]
    });

    fixture = TestBed.createComponent( DashboardComponent );
    HTMLnode = fixture.debugElement.nativeElement;
    comp = fixture.componentInstance;

    TestBed.compileComponents().then(checkDOMWhenStable);

  });


  it("should render a wrapper for the dashboard elements", () => {
    expect(HTMLnode.querySelector('#grid-wrap').childElementCount).toEqual(1);
  });

  it("should render correct number of button elements", () => {
    mockNames = {
      alias: "Steve",
      anonym: "Bruce",
    }
    spyOn(comp, 'ngOnInit').and.returnValue(mockNames);
    expect(Object.keys(comp.ngOnInit()).length).toEqual(Object.keys(mockNames).length);
  });

});

function checkDOMWhenStable() {
  fixture.detectChanges();

  return fixture.whenStable().then(() => {
    fixture.detectChanges();
    page = new Page();
  });
}

class Page {
  dashButtons: HTMLElement[];
  constructor() {
    this.dashButtons = fixture.debugElement.queryAll(By.css('h4'))
      .map(debug => debug.nativeElement);
  }
}

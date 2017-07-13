import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';

import { DashboardComponent } from './dashboard.component';
import { MetaService } from './meta-service';

let fixture: ComponentFixture<DashboardComponent>;
let HTMLnode: HTMLElement;
let page: Page;

describe('DashboardComponent', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent
      ],
      providers: [ MetaService ]
    });

    fixture = TestBed.createComponent( DashboardComponent );
    HTMLnode = fixture.nativeElement;

    TestBed.compileComponents().then(checkDOMWhenStable);

  });


  it("should render a wrapper for the dashboard elements", () => {
    expect(HTMLnode.querySelector('#grid-wrap').childElementCount).toEqual(1);
  });

  it("should render correct number of buttons elements", () => {
    expect(page.dashButtons.length).toBeGreaterThan(0);
  });

  it("should render correct number of image elements", () => {
    expect(page.dashImages.length).toBeGreaterThan(0);
  });

  it("should render same number of images as of buttons", () =>{
    expect(page.dashImages.length == page.dashButtons.length).toBe(true);
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
  dashImages: HTMLElement[];

  constructor() {
    this.dashButtons = fixture.debugElement.queryAll(By.css('h4'))
      .map(debug => debug.nativeElement);
    this.dashImages = fixture.debugElement.queryAll(By.css('img'))
      .map(debug => debug.nativeElement);
  }
}

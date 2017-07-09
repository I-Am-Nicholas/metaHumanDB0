import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By }           from '@angular/platform-browser';

import { MetaService } from './meta-service';
import { MetasComponent } from './metas.component';

let comp: MetasComponent;
let fixture: ComponentFixture<MetasComponent>;
let testMetas: {}
let page: Page;


describe('MetasComponent', () => {

  beforeEach( async(() => {

    TestBed.configureTestingModule({
      declarations: [ MetasComponent ],
      imports: [ RouterTestingModule ],
      providers: [ MetaService ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent( MetasComponent );
    comp = fixture.componentInstance;

    TestBed.compileComponents().then(checkDOMWhenStable);

  }));


  it('should display heroes', () => {
    expect(page.metaRows.length).toBeGreaterThan(0);
  });

  it('executes the enclosed method call', () => {
    testMetas = { mockObject: "Superheroes" };
    spyOn(comp, 'getTheMetas').and.returnValue(testMetas);
    expect(comp.getTheMetas()).toEqual(jasmine.objectContaining({mockObject: 'Superheroes'}))
  });

  it("selectedMeta attains the value passed in to the onSelect method", () => {
    var oneMeta = {id: 1, name: "Thor", logo: "Mjolnir"};
    comp.onSelect(oneMeta);
    expect(comp.selectedMeta.logo).toEqual("Mjolnir");
  });

});

function checkDOMWhenStable() {
  // change detection triggers ngOnInit which gets a meta
  fixture.detectChanges();

  /*the whenStable promise resolves when all pending asynchronous
   activities within this test complete—the definition of "stable."*/
  return fixture.whenStable().then(() => {
    // got the heroes and updated component
    // change detection updates the view
    fixture.detectChanges();
    page = new Page();
  });
}

class Page {
  metaRows: HTMLElement[];

  constructor() {
      this.metaRows = fixture.debugElement.queryAll(By.css('li')).map(debug => debug.nativeElement);
  }
}

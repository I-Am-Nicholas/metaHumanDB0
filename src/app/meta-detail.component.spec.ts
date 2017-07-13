import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { MetaDetailComponent } from './meta-detail.component'
import { Meta } from './meta'

let fixture: ComponentFixture<MetaDetailComponent>;
let comp: MetaDetailComponent;
let DOMElement: DebugElement;
let testMeta: Meta;

describe('MetaDetailComponent', () => {

  beforeEach( async(() => {

    TestBed.configureTestingModule({
      declarations: [ MetaDetailComponent ],
    })
    .compileComponents(); // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaDetailComponent);
    comp = fixture.componentInstance;
    DOMElement = fixture.nativeElement.children;

    testMeta = ({id: 1, name: "Thor", logo: "Mjolnir", alias: "God of Thunder"});
    comp.valueFromMetasComponent = testMeta;
    fixture.detectChanges();
  });


  it("should display the meta's name", () => {
    const expectedPipedName = testMeta.name.toUpperCase();
    expect(DOMElement[0].textContent.toUpperCase()).toContain(expectedPipedName);
  });


});

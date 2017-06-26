import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MetaService } from './meta-service';
import { MetasComponent } from './metas.component';

describe('MetasComponent', () => {

  let fixture: ComponentFixture<MetasComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [
        MetasComponent
      ],
      providers: [MetaService]
    });

    fixture = TestBed.createComponent(MetasComponent);
    de = fixture.debugElement.query(By.css('.metas'));
    el = de.nativeElement;

  });

  
  it('presents the empty list container', () => {
    expect(el.childElementCount).toEqual(0);
  });

});

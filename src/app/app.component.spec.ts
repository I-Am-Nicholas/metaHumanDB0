import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let comp: AppComponent
  let fixture: ComponentFixture<AppComponent>;
  let HTMLnode: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [
        AppComponent
      ]
    })

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    HTMLnode = fixture.debugElement.nativeElement;

  });


  it('should create the app', () => {
    expect(comp).toBeTruthy();
  });

  it(`should have the given text as title`, () => {
    expect(comp.title).toEqual('-HUMAN DATABASE');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    expect(HTMLnode.querySelector('h1').textContent).toContain('META-HUMAN DATABASE');
  });

  it("should render a nav button titled 'Dashboard'", () => {
    expect(HTMLnode.querySelector('#dashboard').textContent).toMatch('Dashboard');
  });

  it("should render a nav button titled 'Meta-Human List'", () => {
    expect(HTMLnode.querySelector('#metaList').textContent).toMatch('Meta-Human List');
  });

});

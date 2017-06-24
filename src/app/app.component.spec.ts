import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let comp: AppComponent
  let fixture: ComponentFixture<AppComponent>;
  let dbug: DebugElement;
  let HTMLnode: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [
        AppComponent
      ]
    })

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    dbug = fixture.debugElement
    HTMLnode = fixture.debugElement.nativeElement;

  }));


  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));

  it(`should have the given text as title`, async(() => {
    expect(comp.title).toEqual('META-HUMAN DATABASE');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    expect(HTMLnode.querySelector('h1').textContent).toContain('META-HUMAN DATABASE');
  }));

  it("should render a nav button titled 'Dashboard'", async(() => {
    expect(HTMLnode.querySelector('#dashboard').textContent).toMatch('Dashboard');
  }));

  it("should render a nav button titled 'Meta-Human List'", async(() => {
    expect(HTMLnode.querySelector('#metaList').textContent).toMatch('Meta-Human List');
  }));

});

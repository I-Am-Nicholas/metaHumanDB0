import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let comp: AppComponent
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [
        AppComponent
      ],
    // }).compileComponents();
    })

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

  }));


  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have the given text as title`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('META-HUMAN DATABASE');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('META-HUMAN DATABASE');
  }));
});

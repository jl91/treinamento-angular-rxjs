import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SimpleTestComponent} from "./simple-test.component";
import {by, element} from "protractor";

describe('SimpleTest', () => {

  let component: SimpleTestComponent;
  let fixture: ComponentFixture<SimpleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleTestComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test click', () => {
    spyOn(component, 'showText');

    const button = fixture.debugElement.nativeElement.querySelector('button');

    const div = fixture.debugElement.nativeElement.querySelector('.custom-text');

    button.click();

    fixture.whenStable()
      .then(() => {
        expect(component.showText).toHaveBeenCalled();
        expect(component.text).toEqual('my text');
        expect(div.textContent).toEqual('my text');
      });
  });

});

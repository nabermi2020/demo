import {async, ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick} from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {By} from "@angular/platform-browser";
import {CalculatorService} from "../services/calculator.service";

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let el;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      imports: [HttpClientTestingModule],
      providers: [CalculatorService]
    })
    .compileComponents()
    .then(() => {

    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Set items to the list', () => {

    fixture.detectChanges();

    const jobs = el.queryAll(By.css('.item'));
    // console.log(component.todos);
    // console.log(el.nativeElement);
    // console.log(jobs);
    expect(jobs).toBeTruthy('Find Jobs!');
    expect(jobs.length).toBe(3, 'Unexpected number of jobs!');


    //const jobs = el.getElementsByTagName()
    // console.log('here');
    // console.log(jobs);
  });

  it('click on the add button', (done: DoneFn) => {
    fixture.detectChanges();

    const addButton = el.nativeElement.querySelector('#add');
    addButton.click();
    fixture.detectChanges();

    expect(component.todos.length).toBe(4);
    expect(component.isClicked).toBe(true);

    setTimeout(() => {
      let jobs = el.queryAll(By.css('.item'));
      console.log(jobs);
      done();
    },500);


  });

  it('check user status', fakeAsync(() => {
    spyOn(component, 'logIn');
    const addButton = el.nativeElement.querySelector('#add');
    addButton.click();
    fixture.detectChanges();
    expect(component.logIn).toHaveBeenCalledTimes(1);

    setTimeout(() => {

    }, 600);

    setTimeout(() => {

    }, 500);
    tick(100);
    tick(400);
    tick(100);

   // flush();
  }));

  it('Promises test', fakeAsync(() => {
    let counter = 0;

    Promise.resolve().then(() => {
        counter++;
        setTimeout(() => {
          counter += 10;
        }, 500);
    });
    expect(counter).toBe(0);
    flushMicrotasks();
    expect(counter).toBe(1);
    tick(500);
    expect(counter).toBe(11);
    tick(500);
    expect(counter).toBe(11);


  }));

   
});

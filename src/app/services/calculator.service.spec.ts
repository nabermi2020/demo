import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
import { LoggerService } from "./logger.service";
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {any} from "codelyzer/util/function";

describe('CalculatorService', () => {
  let service: CalculatorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        CalculatorService
      ]
    });

    service = TestBed.get(CalculatorService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => {
    expect(service.addTwoNumbers(3,5)).toEqual(8);
  });

  it('add 2 numbers constructor', () => {
    const logger = new LoggerService();
    const http = jasmine.createSpyObj('http', ['get']);
    spyOn(logger, 'printLog');
    const calculator = new CalculatorService(logger, http);
    let res = calculator.addTwoNumbers(10, 20);
    expect(res).toBe(30);
    expect(logger.printLog).toHaveBeenCalledTimes(1);
  });

  it('substract two numbers', () => {
    const logger = jasmine.createSpyObj('LoggerService', ['printLog']);
    const http = jasmine.createSpyObj('http', ['get']);
    //expect(service.substractTwoNumbers(100, 10)).toBe(90);
    const service = new CalculatorService(logger, http);
    expect(service.substractTwoNumbers(10, 5)).toBe(5);
    expect(logger.printLog).toHaveBeenCalledTimes(1);
  });

  it('get posts', () => {
    const dummyTours: Array<any> = [
      {
        "id": 1,
        "title": "Incredible Adventure!",
        "price": 200
      },
      {
        "id": 2,
        "title": "Best Season Trip!",
        "price": 368
      }
    ];

    let tours = [];

    service.getPosts().subscribe((posts:Array<any>) => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyTours);
    });

    const request = httpMock.expectOne(`http://localhost:3000/tours`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyTours);
  });


  it('add new post', () => {
    const dummyTours: Array<any> = [
      {
        "id": 1,
        "title": "Incredible Adventure!",
        "price": 200
      },
      {
        "id": 2,
        "title": "Best Season Trip!",
        "price": 368
      }
    ];

    service.addPosts({
      "title": "Best Season Trip!",
      "price": 368
    }).subscribe((res) => {
      expect(dummyTours.length).toBe(3);
    });

    const request = httpMock.expectOne(`http://localhost:3000/tours`);
    expect(request.request.method).toBe('POST');
  });

  it('Multiply two numbers', () => {
    let LoggerService = jasmine.createSpyObj('LoggerService', ['printLog']);
    const http = jasmine.createSpyObj('http', ['get']);
    const service = new CalculatorService(LoggerService, http);
    expect(service.multiplyTwoNumbers(5, 10)).toBe(50);
    expect(LoggerService.printLog).toHaveBeenCalledTimes(1);
  });

  it('Observable async test', () => {
    let LoggerService = jasmine.createSpyObj('LoggerService', ['printLog']);
    const http = jasmine.createSpyObj('http', ['get']);
    const service = new CalculatorService(LoggerService, http);


  });


});

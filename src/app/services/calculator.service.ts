import { Injectable } from '@angular/core';
import { LoggerService } from "./logger.service";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(
    private loggerService: LoggerService,
    private http: HttpClient) { }

  public addTwoNumbers(a: number, b: number): number {
    const total = a + b;
    this.loggerService.printLog(total);
    return total;
  }

  public substractTwoNumbers(a: number, b: number): number {
    const total = a - b;
    this.loggerService.printLog(total);
    return total;
  }

  public multiplyTwoNumbers(a: number, b: number): number {
    const total = a * b;
    this.loggerService.printLog(total);
    return total;
  }

  public getPosts(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/tours`);
  }

  public addPosts(post: any): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/tours`, post);
  }

  public test2() { }
}

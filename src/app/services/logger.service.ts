import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  public printLog(msg: number): void {
    console.log('Logger Service');
    console.log(msg);
  }
}

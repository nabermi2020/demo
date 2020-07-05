import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorService } from "./services/calculator.service";
import { LoggerService } from "./services/logger.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CalculatorService,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

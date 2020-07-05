import { Component, OnInit } from '@angular/core';
import { CalculatorService } from "../services/calculator.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public todos: Array<string> = [];
  public isClicked: boolean = false;
  public isLogged: boolean = false;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.addTwoNumbers(5, 8);
    this.substractTwoNumbers(100, 10);
    this.multiplyNumbers(10, 5);

    this.calculatorService.getPosts().subscribe((posts) => {
      console.log('here');
      console.log(posts);
    })

    this.calculatorService.addPosts(
      {
        "title": "Best Season Trip!",
        "price": 368
      }
    ).subscribe((res) => console.log);

    this.addJobs();
  }

  public addJob(): void {
    this.isClicked = true;
    this.logIn();
    this.todos.push('new job!');
  }

  public logIn(): void {
    this.isLogged = true;
  }

  public addJobs(): void {
    this.todos.push('Stand up');
    this.todos.push('Training');
    this.todos.push('Breakfast');
  }

  public addTwoNumbers(a: number, b: number): void {
    this.calculatorService.addTwoNumbers(a, b);
  }

  public substractTwoNumbers(a: number, b: number): void {
    this.calculatorService.substractTwoNumbers(a, b);
  }

  public multiplyNumbers(a: number, b: number): void {
    this.calculatorService.multiplyTwoNumbers(a, b);
  }

  public test() {
    this.calculatorService.test2();
  }

  public test2() {

  }

}

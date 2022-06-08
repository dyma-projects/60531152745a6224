import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() public result : number = 0;
  public resultTotal : number;
  @Output() IncrementNumber : EventEmitter<number> = new EventEmitter();
  @Output() DecrementNumber : EventEmitter<number> = new EventEmitter();



  constructor() { }

  ngOnInit() {
  }

  public increment(reference: HTMLInputElement) {
    this.IncrementNumber.emit(this.result++);
  }

  public decrement(reference: HTMLInputElement) {
    this.DecrementNumber.emit(this.result--);
  }




}

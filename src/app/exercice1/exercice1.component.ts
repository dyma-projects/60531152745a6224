import { Component, Input, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { Exercice1EnfantComponent } from './exercice1-enfant/exercice1-enfant.component';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public result: number = 0;

  constructor() { }

  ngOnInit() {

  }


}

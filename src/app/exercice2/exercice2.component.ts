import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {

  public valeur: string = '';
  public valeurs: string[] = [];

  @ViewChild('refInput', {static : true} ) public refref: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit() {
  }

  public addvalue(reference : HTMLInputElement) {
    this.valeurs.push(this.refref.nativeElement.value);
    console.log(this.refref.nativeElement.value);
  }

}

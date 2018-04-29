import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

  nombreLista: string;
  nombreItem;

  constructor() { }

  ngOnInit(): void { }
}

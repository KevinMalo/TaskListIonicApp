import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.services';

@Component({
  selector: 'app-cumplidos',
  templateUrl: './cumplidos.component.html'
})
export class CumplidosComponent implements OnInit {

  constructor(private _listaDeseos : ListaDeseosService) {
   }

  ngOnInit(): void { }
}

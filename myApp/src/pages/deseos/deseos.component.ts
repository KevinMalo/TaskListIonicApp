import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.services';

import { NavController } from 'ionic-angular';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
  selector: 'app-deseos',
  templateUrl: './deseos.component.html'
})
export class DeseosComponent implements OnInit {

  constructor(private _listaDeseos : ListaDeseosService,
    private navCtrl: NavController) { }

  ngOnInit(): void { }

  verDetalle( lista, index ){
    this.navCtrl.push( DetalleComponent, {
      lista,
      index
    } );
  }
  
}


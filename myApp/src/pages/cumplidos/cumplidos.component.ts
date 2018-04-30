import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.services';

import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
  selector: 'app-cumplidos',
  templateUrl: './cumplidos.component.html'
})
export class CumplidosComponent implements OnInit {

  constructor(private _listaDeseos : ListaDeseosService,
              private navCtrl: NavController    ) {
   }

  ngOnInit(): void { }

  irAgregar(){
    this.navCtrl.push( AgregarComponent )
  }

  verDetalle( lista, index ){
    this.navCtrl.push( DetalleComponent, {
      lista,
      index
    } );
  }
}

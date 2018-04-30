import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.services';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

  idx:number;
  lista: Lista;

  constructor(
    public navCtrl: NavController,
    public NavParams: NavParams,
    public _listaDeseos: ListaDeseosService,
    public alertCtrl:AlertController
  ) {

    this.idx = this.NavParams.get("index");
    this.lista = this.NavParams.get("lista")


  }

  ngOnInit(): void { }

  actualizar( item: ListaItem ){

    console.log('esto funciona');

    item.cumplido = !item.cumplido;

    let todosMarcados = true;

    for (let item of this.lista.items) {

      if (item.cumplido) {
        todosMarcados = false;
        break;
      }
    }

    this.lista.terminada = todosMarcados;

    this._listaDeseos.actualizarData();

  }

  borrarItem(){
    let confirm = this.alertCtrl.create({
      title: this.lista.nombre,
      message: 'Esta seguro que desea eliminar la lista?',
      buttons: ['Cancelar',
        {
          text: 'Eliminar',
          handler: () => {
            this._listaDeseos.eliminarLista(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }
}

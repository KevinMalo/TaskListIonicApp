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

    item.cumplido = !item.cumplido;
    this._listaDeseos.actualizarData();

  }

  borrarItem(){
    let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}

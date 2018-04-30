import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Servicios
import { ListaDeseosService } from './services/lista-deseos.services';

//Pipes
import { PlaceholderPipe } from './pipe/placeholder.pipe';
import { PendientesPipe } from './pipe/pendientes.pipe';


//Tabs
import { TabsPage } from '../pages/tabs/tabs';
import { DeseosComponent } from '../pages/deseos/deseos.component';
import { CumplidosComponent } from '../pages/cumplidos/cumplidos.component';
import { AgregarComponent } from '../pages/agregar/agregar.component';
import { DetalleComponent } from '../pages/detalle/detalle.component';



@NgModule({
  declarations: [
    MyApp,
    DeseosComponent,
    CumplidosComponent,
    AgregarComponent,
    PlaceholderPipe,
    PendientesPipe,
    DetalleComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DeseosComponent,
    CumplidosComponent,
    AgregarComponent,
    DetalleComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

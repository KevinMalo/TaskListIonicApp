import { Component } from '@angular/core';

import { DeseosComponent } from '../deseos/deseos.component';
import { CumplidosComponent } from '../cumplidos/cumplidos.component';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CumplidosComponent;
  tab2Root = DeseosComponent;

  constructor() {

  }
}

import { Component } from '@angular/core';
import { VarGlobal } from '../global/var.global';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  video1: string;
  titreVideo1 = 'Titre de la vidéo';
  video2: string;
  titreVideo2 = 'Titre de la fameuse vidéo';
  // url: string = this.api.mainUrl + 'affichage.php';
  avatar = 'assets/img/indexPage/avatar1.png';
  titreHead = 'Ravis de te revoir !';
  soutitreHead = 'Que souhaites-tu faire aujourd\'hui ?';

  // tslint:disable-next-line: max-line-length
  constructor(public gb: VarGlobal, public screenOrientation: ScreenOrientation) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);

    setTimeout(() => {
      this.titreHead = 'Allez commençons !';
      this.soutitreHead = 'Choisis parmis les options ci-dessous';
    }, 5000);
  }

}

import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-morpion',
  templateUrl: './morpion.page.html',
  styleUrls: ['./morpion.page.scss'],
})
export class MorpionPage implements OnInit {

  tap1 = new Audio('../../assets/audio/jeuxPage/morpion/tap1.mp3');
  tap2 = new Audio('../../assets/audio/jeuxPage/morpion/tap2.mp3');
  win = new Audio('../../assets/audio/jeuxPage/morpion/win.mp3');
  victoire = 0;
  tour = 1; // vaut 1 si cest le tour du joueur 1 et 2 sinon
  pointsJoueur1 = 0;
  pointsJoueur2 = 0;
  pion = {
    pion1: '', pion2: '', pion3: '',
    pion4: '', pion5: '', pion6: '',
    pion7: '', pion8: '', pion9: ''
  };
  couleur = {
    pion1: '1', pion2: '2', pion3: '3',
    pion4: '4', pion5: '5', pion6: '6',
    pion7: '7', pion8: '8', pion9: '9',
    tour: 'danger'
  };

  constructor(
    public screenOrientation: ScreenOrientation, 
    public alertController: AlertController, 
    public toastController: ToastController){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
  }

  ngOnInit() {
  }

  async voirScore() {
    const alerter = await this.alertController.create({
      header: '      <<<< Score >>>>',
      message: 'Joueur 1 >>>>>>> ' + this.pointsJoueur1 + ' Points <br>Joueur 2 >>>>>>>  ' + this.pointsJoueur2 + ' Points',
      buttons: ['OK']
    });
    alerter.present();
  }

  async reprendrePartie() {
    this.pion.pion1 = '';
    this.pion.pion2 = '';
    this.pion.pion3 = '';
    this.pion.pion4 = '';
    this.pion.pion5 = '';
    this.pion.pion6 = '';
    this.pion.pion7 = '';
    this.pion.pion8 = '';
    this.pion.pion9 = '';

    this.couleur.pion1 = '1';
    this.couleur.pion2 = '2';
    this.couleur.pion3 = '3';
    this.couleur.pion4 = '4';
    this.couleur.pion5 = '5';
    this.couleur.pion6 = '6';
    this.couleur.pion7 = '7';
    this.couleur.pion8 = '8';
    this.couleur.pion9 = '9';
    this.couleur.tour = 'danger';

    this.victoire = 0;
    this.tour = 1;

    const toast = await this.toastController.create({
      message: 'Une nouvelle partie commemce...',
      duration: 2000
    });
    toast.present();
  }

  async jouer(btn: string) {
    if (this.victoire === 0) {
      this.tap1.currentTime = 0;
      this.tap1.pause();

      switch (btn) {
      case '1':
      if (this.pion.pion1 === '') {
        if (this.tap1.paused) {
          this.tap1.play();
        }
        if (this.tour === 1) {
          this.pion.pion1 = 'medical';
          this.couleur.pion1 = 'danger';
          this.couleur.tour = 'primary';
          this.tour = 2;
        } else {
          this.pion.pion1 = 'radio-button-on';
          this.couleur.pion1 = 'primary';
          this.couleur.tour = 'danger';
          this.tour = 1;
        }
      } else {
        if (this.tap2.paused) {
          this.tap2.play();
        }
      }
      break;
      case '2':
      if (this.pion.pion2 === '') {
        if (this.tap1.paused) {
          this.tap1.play();
        }
        if (this.tour === 1) {
        this.pion.pion2 = 'medical';
        this.couleur.pion2 = 'danger';
        this.couleur.tour = 'primary';
        this.tour = 2;
      } else {
        this.pion.pion2 = 'radio-button-on';
        this.couleur.pion2 = 'primary';
        this.couleur.tour = 'danger';
        this.tour = 1;
      }
    } else {
      if (this.tap2.paused) {
        this.tap2.play();
      }
    }
      break;
      case '3':
      if (this.pion.pion3 === '') {
        if (this.tap1.paused) {
          this.tap1.play();
        }
        if (this.tour === 1) {
        this.pion.pion3 = 'medical';
        this.couleur.pion3 = 'danger';
        this.couleur.tour = 'primary';
        this.tour = 2;
      } else {
        this.pion.pion3 = 'radio-button-on';
        this.couleur.pion3 = 'primary';
        this.couleur.tour = 'danger';
        this.tour = 1;
      }
    } else {
      if (this.tap2.paused) {
        this.tap2.play();
      }
    }
      break;
      case '4':
      if (this.pion.pion4 === '') {
        if (this.tap1.paused) {
          this.tap1.play();
        }
        if (this.tour === 1) {
        this.pion.pion4 = 'medical';
        this.couleur.pion4 = 'danger';
        this.couleur.tour = 'primary';
        this.tour = 2;
      } else {
        this.pion.pion4 = 'radio-button-on';
        this.couleur.pion4 = 'primary';
        this.couleur.tour = 'danger';
        this.tour = 1;
      }
    } else {
      if (this.tap2.paused) {
        this.tap2.play();
      }
    }
      break;
      case '5':
      if (this.pion.pion5 === '') {
        if (this.tap1.paused) {
          this.tap1.play();
        }
        if (this.tour === 1) {
        this.pion.pion5 = 'medical';
        this.couleur.pion5 = 'danger';
        this.couleur.tour = 'primary';
        this.tour = 2;
      } else {
        this.pion.pion5 = 'radio-button-on';
        this.couleur.pion5 = 'primary';
        this.couleur.tour = 'danger';
        this.tour = 1;
      }
    } else {
      if (this.tap2.paused) {
        this.tap2.play();
      }
    }
      break;
      case '6':
      if (this.pion.pion6 === '') {
        if (this.tap1.paused) {
          this.tap1.play();
        }
        if (this.tour === 1) {
        this.pion.pion6 = 'medical';
        this.couleur.pion6 = 'danger';
        this.couleur.tour = 'primary';
        this.tour = 2;
      } else {
        this.pion.pion6 = 'radio-button-on';
        this.couleur.pion6 = 'primary';
        this.couleur.tour = 'danger';
        this.tour = 1;
      }
    } else {
      if (this.tap2.paused) {
        this.tap2.play();
      }
    }
      break;
      case '7':
      if (this.pion.pion7 === '') {
        if (this.tap1.paused) {
          this.tap1.play();
        }
        if (this.tour === 1) {
        this.pion.pion7 = 'medical';
        this.couleur.pion7 = 'danger';
        this.couleur.tour = 'primary';
        this.tour = 2;
      } else {
        this.pion.pion7 = 'radio-button-on';
        this.couleur.pion7 = 'primary';
        this.couleur.tour = 'danger';
        this.tour = 1;
      }
    } else {
      if (this.tap2.paused) {
        this.tap2.play();
      }
    }
      break;
      case '8':
      if (this.pion.pion8 === '') {
        if (this.tap1.paused) {
          this.tap1.play();
        }
        if (this.tour === 1) {
        this.pion.pion8 = 'medical';
        this.couleur.pion8 = 'danger';
        this.couleur.tour = 'primary';
        this.tour = 2;
      } else {
        this.pion.pion8 = 'radio-button-on';
        this.couleur.pion8 = 'primary';
        this.couleur.tour = 'danger';
        this.tour = 1;
      }
    } else {
      if (this.tap2.paused) {
        this.tap2.play();
      }
    }
      break;
      case '9':
      if (this.pion.pion9 === '') {
        if (this.tap1.paused) {
          this.tap1.play();
        }
        if (this.tour === 1) {
        this.pion.pion9 = 'medical';
        this.couleur.pion9 = 'danger';
        this.couleur.tour = 'primary';
        this.tour = 2;
      } else {
        this.pion.pion9 = 'radio-button-on';
        this.couleur.pion9 = 'primary';
        this.couleur.tour = 'danger';
        this.tour = 1;
      }
    } else {
      if (this.tap2.paused) {
        this.tap2.play();
      }
    }
      break;

      default:
        break;
    }
      // tslint:disable-next-line: max-line-length
      if ((this.couleur.pion1 === this.couleur.pion2 && this.couleur.pion2 === this.couleur.pion3) || (this.couleur.pion4 === this.couleur.pion5 && this.couleur.pion5 === this.couleur.pion6) || (this.couleur.pion7 === this.couleur.pion8 && this.couleur.pion8 === this.couleur.pion9) || (this.couleur.pion1 === this.couleur.pion4 && this.couleur.pion4 === this.couleur.pion7) || (this.couleur.pion2 === this.couleur.pion5 && this.couleur.pion5 === this.couleur.pion8) || (this.couleur.pion3 === this.couleur.pion6 && this.couleur.pion6 === this.couleur.pion9) || (this.couleur.pion1 === this.couleur.pion5 && this.couleur.pion5 === this.couleur.pion9) || (this.couleur.pion3 === this.couleur.pion5 && this.couleur.pion5 === this.couleur.pion7)) {
      this.win.play();
      this.victoire = 1;
      let yes = this.tour;
      if (yes === 1) {
        yes = 2;
        this.pointsJoueur2++;
      } else {
        yes = 1;
        this.pointsJoueur1++;
      }
      const alert = await this.alertController.create({
        header: 'Partie terminée !',
        message: 'Le joueur ' + yes + ' remporte la manche',
        buttons: ['OK']
      });
        await alert.present();
    // tslint:disable-next-line: max-line-length
    } else if (this.couleur.pion1 !== '1' && this.couleur.pion2 !== '2' && this.couleur.pion3 !== '3' && this.couleur.pion4 !== '4' && this.couleur.pion5 !== '5' && this.couleur.pion6 !== '6' && this.couleur.pion7 !== '7' && this.couleur.pion8 !== '8' && this.couleur.pion9 !== '9') {
      this.victoire = 1;
      const alert = await this.alertController.create({
        header: 'Macth nul !',
        message: 'Retentez votre chance...',
        buttons: ['OK']
      });
      alert.present();
    }
    }
  }

}

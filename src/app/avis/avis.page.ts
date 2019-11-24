import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ToastController } from '@ionic/angular';
import { VarGlobal } from '../global/var.global';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.page.html',
  styleUrls: ['./avis.page.scss'],
})
export class AvisPage implements OnInit {

  hearts = ['heart', 'heart-empty', 'heart-empty', 'heart-empty', 'heart-empty'];
  avisEnText: string;
  url: string;

  constructor(private api: ApiService, public vg: VarGlobal, public toastController: ToastController) { }

  ngOnInit() {
  }

  donnerCoeur(nbDeLike: number) {
    for (let i = 0; i < nbDeLike; i++) {
      this.hearts[i] = 'heart';
    }
    for (let i = nbDeLike; i < this.hearts.length; i++) {
      this.hearts[i] = 'heart-empty';
    }
  }

  envoyerAvis() {
    let lesCoeurs = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.hearts.length; i++) {
      if (this.hearts[i] === 'heart') {
        lesCoeurs++;
      }
    }
    this.url = this.api.mainUrl + 'avis.php';
    // tslint:disable-next-line: new-parens
    const avis = new FormData;
    // const toast = this.toastController;
    avis.append('mdp', this.vg.mdp);
    avis.append('donnerAvis', '');
    avis.append('nombreDeCoeurs', lesCoeurs.toString());
    avis.append('avisText', this.avisEnText);

    this.api.ajaxPost(this.url, avis, async (rep) => {
      this.presentToast(rep.message);
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

}

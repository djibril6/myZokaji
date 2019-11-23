import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { VarGlobal } from 'src/app/global/var.global';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-reponses',
  templateUrl: './reponses.component.html',
  styleUrls: ['./reponses.component.scss'],
})
export class ReponsesComponent implements OnInit {

  idQuestion: number;
  laQuestion: string;
  datePublication: string;
  url: string;
  reponse: string;

  // tslint:disable-next-line: max-line-length
  constructor(public modalCtrl: ModalController, private navParams: NavParams, public vg: VarGlobal, private api: ApiService, public toastController: ToastController) {
    this.idQuestion = +navParams.get('idQuestion');
    this.laQuestion = navParams.get('laQuestion');
    this.datePublication = navParams.get('datePublication');

    this.url = this.api.mainUrl + 'forum.php';
    // tslint:disable-next-line: new-parens
    const repData = new FormData;
    // const toast = this.toastController;
    repData.append('mdp', this.vg.mdp);
    repData.append('voirUneQuestion', '');
    repData.append('idQuestion', this.idQuestion.toString());

    this.api.ajaxPost(this.url, repData, async (rep) => {
      if (rep.success) {
        this.vg.lesReponses = rep.result;
      } else {
        this.presentToast(rep.message);
      }
    });
  }

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss({
      dismissed: true
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

  sendMessage() {
    // tslint:disable-next-line: new-parens
    const repData = new FormData;
    // const toast = this.toastController;
    repData.append('mdp', this.vg.mdp);
    repData.append('repondre', '');
    repData.append('laReponse', this.reponse);
    repData.append('idQuestion', this.idQuestion.toString());

    this.api.ajaxPost(this.url, repData, async (rep) => {
      this.presentToast(rep.message);
      this.vg.lesReponses = rep.result;
    });
  }

}

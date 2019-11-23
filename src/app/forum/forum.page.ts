import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { VarGlobal } from '../global/var.global';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { ReponsesComponent } from './reponses/reponses.component';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {
  url: string;
  toDay = Date;

  // tslint:disable-next-line: max-line-length
  constructor(private api: ApiService, public vg: VarGlobal, public toastController: ToastController, public alertController: AlertController, public modalController: ModalController) {
    this.url = this.api.mainUrl + 'forum.php';
    // tslint:disable-next-line: new-parens
    const poserQuestion = new FormData;
    // const toast = this.toastController;
    poserQuestion.append('mdp', this.vg.mdp);
    poserQuestion.append('voirLesQuestions', '');

    this.api.ajaxPost(this.url, poserQuestion, async (rep) => {
      if (rep.success) {
        this.vg.lesQuestions = rep.result;
      } else {
        this.presentToast(rep.message);
      }
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

  ngOnInit() {
  }

  async poserUneQuestion() {
    const alert = await this.alertController.create({
      header: 'Posser votre question!',
      inputs: [
        {
          name: 'laQuestion',
          type: 'text',
          placeholder: 'Poses ta question ici'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Envoyer',
          handler: (data) => {
            console.log(data.laQuestion);
            // tslint:disable-next-line: new-parens
            const dataQ = new FormData;
            dataQ.append('mdp', this.vg.mdp);
            dataQ.append('creerQuestion', '');
            dataQ.append('question', data.laQuestion);

            this.api.ajaxPost(this.url, dataQ, async (rep) => {
              this.presentToast(rep.message);
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async filtrer() {
    const alert = await this.alertController.create({
      header: 'Choisissez un intervalle de temps !',
      inputs: [
        {
          name: 'dateDebut',
          type: 'date',
          max: this.toDay.toString()
        },
        {
          name: 'dateFin',
          type: 'date',
          max: this.toDay.toString()
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Envoyer',
          handler: (data) => {
            // tslint:disable-next-line: new-parens
            const dataF = new FormData;
            dataF.append('mdp', this.vg.mdp);
            dataF.append('filtrer', '');
            dataF.append('dateDebut', data.dateDebut);
            dataF.append('dateFin', data.dateFin);

            this.api.ajaxPost(this.url, dataF, async (rep) => {
              if (rep.success) {
                this.vg.lesQuestions = rep.result;
              } else {
                this.presentToast(rep.message);
              }
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async voirReponses(item: any) {
    const modal = await this.modalController.create({
      component: ReponsesComponent,
      componentProps: {
        idQuestion: item.idQuestion,
        laQuestion: item.laQuestion,
        datePublication: item.datePublication
      }
    });
    return await modal.present();
  }

}

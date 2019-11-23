import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LeConseilComponent } from './le-conseil/le-conseil.component';
import { Themes } from './themes';
import { VarGlobal } from '../global/var.global';

@Component({
  selector: 'app-conseil',
  templateUrl: 'conseil.page.html',
  styleUrls: ['conseil.page.scss']
})
export class ConseilPage implements OnInit, OnDestroy {

  Themes = [];

  cn = 'sans';
  welcomAudio = new Audio('../../assets/audio/audio.mp4');

  iconebtn = 'play'; // change vers pause si audio en marche
  constructor(public modalController: ModalController, private themes: Themes, public vg: VarGlobal) {
    this.Themes = themes.lesThemes;
  }

  ngOnInit() {
    if (this.welcomAudio.paused && this.vg.audioPageConseil) {
      this.welcomAudio.play();
      this.iconebtn = 'pause';
    }
  }

  ngOnDestroy() {
    this.welcomAudio.pause();
    this.iconebtn = 'play';
  }

  joue() {
    if (this.welcomAudio.paused) {
      this.welcomAudio.play();
      this.iconebtn = 'pause';
    } else {
      this.welcomAudio.currentTime = 0;
      this.welcomAudio.pause();
      this.iconebtn = 'play';
      this.vg.audioPageConseil = false;
    }
  }

  async goToConseil(item: any) {
    this.welcomAudio.pause();
    this.iconebtn = 'play';
    const modal = await this.modalController.create({
      component: LeConseilComponent,
      componentProps: {
        id: item.id,
        theme: item.theme,
        titreVideo: item.titreVideo,
        image: item.image,
        description: item.description
      }
    });
    return await modal.present();
  }
}

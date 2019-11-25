import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { VarGlobal } from 'src/app/global/var.global';
import { Themes } from '../themes';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-le-conseil',
  templateUrl: './le-conseil.component.html',
  styleUrls: ['./le-conseil.component.scss'],
})
export class LeConseilComponent implements OnInit {

  id: number;
  titreVideo2: string;
  theme: string;
  description: string;
  image: string;
  avant = 0;
  apres = 0;
  lesThemes = [];
  videoPath = '../../../assets/video/';

  // tslint:disable-next-line: max-line-length
  constructor(public modalCtrl: ModalController, private navParams: NavParams, public vg: VarGlobal, private themes: Themes, public screenOrientation: ScreenOrientation) {
    this.id = +navParams.get('id');
    this.theme = navParams.get('theme');
    this.titreVideo2 = this.videoPath + vg.langue + navParams.get('titreVideo');
    this.description = navParams.get('description');
    this.image = navParams.get('image');
    this.lesThemes = themes.lesThemes;
  }

  ngOnInit() {
    this.titreVideo2 = this.videoPath + this.vg.langue + this.navParams.get('titreVideo');
    this.screenOrientation.unlock();
  }

  dismissModal() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  autreConseil(action: string) {
    if (action === 'suivant') {
      if (this.id < this. vg.maxRubriques) {
        this.id = this.id + 1;
      } else {
        this.id = 1;
      }
    } else {
      if (this.id > 1) {
        this.id = this.id - 1;
      } else {
        this.id = this.vg.maxRubriques;
      }
    }
    this.lesThemes.forEach(t => {
      if (t.id === this.id) {
        this.theme = t.theme;
        this.titreVideo2 = this.videoPath + this.vg.langue + t.titreVideo;
        this.description = t.description;
        this.image = t.image;
      }
    });
  }

}

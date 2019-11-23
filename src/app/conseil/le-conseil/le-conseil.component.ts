import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { VarGlobal } from 'src/app/global/var.global';
import { Themes } from '../themes';

@Component({
  selector: 'app-le-conseil',
  templateUrl: './le-conseil.component.html',
  styleUrls: ['./le-conseil.component.scss'],
})
export class LeConseilComponent implements OnInit {

  id: number;
  titreVideo: string;
  theme: string;
  description: string;
  image: string;
  avant = 0;
  apres = 0;
  lesThemes = [];
  videoPath = '../../../assets/video/';

  constructor(public modalCtrl: ModalController, private navParams: NavParams, public vg: VarGlobal, private themes: Themes) {
    this.id = +navParams.get('id');
    this.theme = navParams.get('theme');
    this.titreVideo = this.videoPath + vg.langue + navParams.get('titreVideo');
    this.description = navParams.get('description');
    this.image = navParams.get('image');
    this.lesThemes = themes.lesThemes;
  }

  ngOnInit() {}

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
        this.titreVideo = this.videoPath + this.vg.langue + t.titreVideo;
        this.description = t.description;
        this.image = t.image;
      }
    });
  }

}

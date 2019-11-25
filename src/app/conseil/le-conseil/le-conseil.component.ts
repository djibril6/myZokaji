import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { VarGlobal } from 'src/app/global/var.global';
import { Themes } from '../themes';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-le-conseil',
  templateUrl: './le-conseil.component.html',
  styleUrls: ['./le-conseil.component.scss'],
})
export class LeConseilComponent implements OnInit {

  id: number;
  titreVideo2 = '../../../assets/video/' + this.vg.langue + this.navParams.get('titreVideo');
  theme: string;
  description: string;
  image2 = this.navParams.get('image');
  avant = 0;
  apres = 0;
  lesThemes = [];
  videoPath = '../../../assets/video/';

  // tslint:disable-next-line: max-line-length
  constructor(public modalCtrl: ModalController, private navParams: NavParams, public vg: VarGlobal, private themes: Themes, public screenOrientation: ScreenOrientation, private videoPlayer: VideoPlayer) {
    this.id = +navParams.get('id');
    this.theme = navParams.get('theme');
    this.titreVideo2 = this.videoPath + vg.langue + navParams.get('titreVideo');
    this.description = navParams.get('description');
    this.image2 = navParams.get('image');
    this.lesThemes = themes.lesThemes;
  }

  ngOnInit() {
    this.titreVideo2 = this.videoPath + this.vg.langue + this.navParams.get('titreVideo');
    this.screenOrientation.unlock();
  }

  jouerVideo() {
    this.videoPlayer.play('../../../assets/video/fr/ana_physio.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
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
        this.image2 = t.image;
      }
    });
  }

}

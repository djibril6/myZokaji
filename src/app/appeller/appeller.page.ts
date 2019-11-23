import { Component, OnInit } from '@angular/core';

import { CallNumber } from '@ionic-native/call-number/ngx';
import { VarGlobal } from '../global/var.global';

@Component({
  selector: 'app-appeller',
  templateUrl: './appeller.page.html',
  styleUrls: ['./appeller.page.scss'],
})
export class AppellerPage implements OnInit {

  welcomAudio = new Audio('../../assets/audio/audio.mp4');
  iconebtn = 'play'; // change vers pause si audio en marche

  constructor(private callNumber: CallNumber, public vg: VarGlobal) { }

  ngOnInit() {
    if (this.welcomAudio.paused && this.vg.audioPageAppeller) {
      this.welcomAudio.play();
      this.iconebtn = 'pause';
    }
  }

  appeller() {
    this.callNumber.callNumber('488', true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  joue() {
    if (this.welcomAudio.paused) {
      this.welcomAudio.play();
      this.iconebtn = 'pause';
    } else {
      this.welcomAudio.currentTime = 0;
      this.welcomAudio.pause();
      this.iconebtn = 'play';
      this.vg.audioPageAppeller = false;
    }
  }

}

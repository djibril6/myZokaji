import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { VarGlobal } from 'src/app/global/var.global';

@Component({
  selector: 'app-langue',
  templateUrl: './langue.page.html',
  styleUrls: ['./langue.page.scss'],
})
export class LanguePage implements OnInit {

  welcomAudio = new Audio('../../assets/audio/langue.mp3');

  iconebtn = 'play'; // change vers pause si audio en marche

  // tslint:disable-next-line: max-line-length
  constructor(public navCtrl: NavController, public gb: VarGlobal, private nativeStorage: NativeStorage, private router: Router) {
    // if (this.welcomAudio.paused) {
    //   this.welcomAudio.play();
    //   this.iconebtn = 'pause';
    // }
  }

  ngOnInit() {
    if (this.welcomAudio.paused) {
      this.welcomAudio.play();
      this.iconebtn = 'pause';
    }
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.welcomAudio.currentTime = 0;
    this.welcomAudio.pause();
    this.iconebtn = 'play';
  }

  allerAuForum(){
    this.welcomAudio.currentTime = 0;
    this.welcomAudio.pause();
    this.iconebtn = 'play';
    // this.nav.push(ForumPage);
  }

  choisirLangue(langue: string) {
    this.gb.langue = langue;
    this.welcomAudio.currentTime = 0;
    this.welcomAudio.pause();
    this.iconebtn = 'play';
    this.nativeStorage.setItem('Jeuxvisite', {jeux: 'non'});
    this.nativeStorage.setItem('Conseilvisite', {conseil: 'non'});
    this.nativeStorage.setItem('Assistancevisite', {assistance: 'non'});
    this.nativeStorage.setItem('langue', {langueChoisie: langue})
      .then(
        () => this.router.navigate(['/home']),
        error => this.router.navigate(['/home'])
      );
    this.router.navigate(['/home']); // A enlever avant compilation
  }

  joue() {
    if (this.welcomAudio.paused) {
      this.welcomAudio.play();
      this.iconebtn = 'pause';
    } else {
      this.welcomAudio.currentTime = 0;
      this.welcomAudio.pause();
      this.iconebtn = 'play';
    }
  }

}

import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { VarGlobal } from './global/var.global';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Conseil',
      url: '/conseil',
      icon: 'transgender'
    },
    {
      title: 'Jeux',
      url: '/jeux',
      icon: 'logo-game-controller-b'
    },
    {
      title: 'Forum',
      url: '/forum',
      icon: 'chatbubbles'
    },
    {
      title: 'Appeller',
      url: '/appeller',
      icon: 'call'
    },
    {
      title: 'Votre Avis',
      url: '/avis',
      icon: 'megaphone'
    },
    {
      title: 'Choisir une langue',
      url: '/langue',
      icon: 'settings'
    },
    {
      title: 'Infos de l\'App',
      url: '/about',
      icon: 'information-circle'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nativeStorage: NativeStorage, 
    private router: Router,
    public gl: VarGlobal
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.nativeStorage.getItem('langue')
      .then(
      data => {
        this.gl.langue = data.langueChoisie;
        this.router.navigate(['/home']);
      },
      error => console.error(error)
    );
    });
  }
}

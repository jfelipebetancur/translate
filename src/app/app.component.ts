import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private _translate         : TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this._initTranslate();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  private _initTranslate() {
     // Set the default language for translation strings, and the current language.
     this._translate.setDefaultLang('es');
     this._translate.use('es');

     //Idioma según el lenguaje del navegador
     /*if (this._translate.getBrowserLang() !== undefined) {
         this._translate.use(this._translate.getBrowserLang());
     } else {
         this._translate.use('en'); // Set your language here
     }*/
  }
}

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { TutorialPage } from '../pages/tutorial/tutorial';


@Component({
  templateUrl: `app.template.html`
})
export class MyApp {
  rootPage : any = TutorialPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

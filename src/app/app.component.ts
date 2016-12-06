import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TutorialPage } from '../pages/tutorial/tutorial';

import { MyListDetailPage } from '../pages/my-list-detail/my-list-detail';
import { ListData } from '../providers/list-data';
import { List } from '../models/list-model';


@Component({
  templateUrl: `app.template.html`
})
export class MyApp {

  rootPage = TutorialPage;

  constructor(
    platform: Platform,
    public ListService: ListData
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

}

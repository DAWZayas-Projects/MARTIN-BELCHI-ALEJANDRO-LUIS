import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.slides = [
      {
        title: '<b>Qué es BeerTry?</b>',
        description: 'Bienvenidos, <b>BeerTry</b> es una aplicación para que lleves las cuenta de las cervezas que has tomado y hacer anotaciones de ellas.',
        image: 'assets/img/beer.png',
      },
      {
        title: 'Qué es Ionic?',
        description: '<b>Ionic Framework</b> es un SDK de codigo libre que permite a los desarrolladores crear apps con tecnologias como HTML, CSS, and JavaScript.',
        image: 'assets/img/beer.png',
      }
    ];
  }

  startApp() {
    this.navCtrl.push(TabsPage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AddBeer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-beer',
  templateUrl: 'add-beer.html'
})
export class AddBeerPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AddBeer Page');
  }

}

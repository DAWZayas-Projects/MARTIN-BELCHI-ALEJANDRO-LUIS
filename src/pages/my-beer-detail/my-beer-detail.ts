import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Beer } from '../../models/beer-model';

@Component({
  selector: 'page-my-beer-detail',
  templateUrl: 'my-beer-detail.html'
})
export class MyBeerDetailPage {

	beer: Beer;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.beer = this.navParams.data;
  	console.log(this.beer);
  }

}

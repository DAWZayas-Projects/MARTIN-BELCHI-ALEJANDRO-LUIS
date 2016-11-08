import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BeerData } from '../../providers/beer-data';

const BEER_DATA = BeerData;

@Component({
  selector: 'page-add-beer',
  templateUrl: 'add-beer.html'
})
export class AddBeerPage {
	beer: { name: string, brewery: string, country: string, style: string, favorite: boolean = false } = {};
	submitted = false;

  constructor(
    public navCtrl: NavController,
    public beerData : BeerData
   ) { }

  providerAddBeer(form) {
  	this.submitted = true;

  	if (form.valid) {
      this.beer.favorite = false;
      this.beerData.saveBeer(this.beer);
  	}
  }

}

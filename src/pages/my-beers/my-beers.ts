import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BeerData } from '../../providers/beer-data';
import { Beer } from '../../models/beer-model';
import { MyBeerDetailPage } from '../my-beer-detail/my-beer-detail';


@Component({
  selector: 'page-my-beers',
  templateUrl: 'my-beers.html',
  providers: [BeerData]
})

export class MyBeersPage {

  segment: String = 'all';
  beers: Beer[];
  queryText: string = '';

  constructor(
  	public navCtrl: NavController,
  	public service: BeerData,
  ) {
    this.beers=[];
  }

  ionViewWillEnter() {
    this.load();
  }

  load() {
    this.service.load().subscribe(
      beers => this.segment === 'all' ? this.beers = beers : this.beers = beers.filter( beer => beer.favorite ),
      error => console.log(error)
    );
  }

  updateBeers() {
    this.service.load().subscribe(
      beers => this.segment === 'all' ? this.beers = beers.filter( beer => this.beginsWith(beer) ) : this.beers = beers.filter( beer => beer.favorite && this.beginsWith(beer) ),
      error => console.log(error)
    );
  }

  beginsWith(beer) {
    let haystack = beer.brewery + ' ' + beer.name;
    return (haystack.substr(0, this.queryText.length) === this.queryText);
  }

  goToBeerDetails(beer) {
    this.navCtrl.push(MyBeerDetailPage, beer);
  }

  toogleFavorite(newResult, beer) {
    let beerId = beer._id;
    beer.favorite = newResult;
    this.service.updateBeer(beer, beerId).subscribe(
      reponse => this.load(),
      error => console.log(error)
    );
  }

}

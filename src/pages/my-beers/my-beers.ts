import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BeerData } from '../../providers/beer-data';
import { Beer } from '../../models/beer-model';


@Component({
  selector: 'page-my-beers',
  templateUrl: 'my-beers.html'
})

export class MyBeersPage implements OnInit {

  segment: string = 'all';
  beers: Beer[] = [];
  queryText: string = '';

  constructor(
  	public navCtrl: NavController,
  	public service: BeerData
  ) {

  }

  ngOnInit(){
  	this.load();
  }

  load(){
    this.service.load().subscribe(
      beers => this.segment === 'all' ? this.beers = beers : this.beers = beers.filter( beer => beer.favorite ),
      error => console.log(error)
    );
    console.log(this.beers)
  }

  updateBeers(){
    this.service.load().subscribe(
      beers => this.segment === 'all' ? this.beers = beers.filter( beer => this.beginsWith(beer.name) ) : this.beers = beers.filter( beer => beer.favorite && this.beginsWith(beer.name) ),
      error => console.log(error)
    );
  }

  beginsWith(haystack){
    return (haystack.substr(0, this.queryText.length) === this.queryText);
  }

  toogleFavorite(newResult, beer){
    let beerId = beer._id;
    beer.favorite = newResult;
    this.service.updateBeer(beer, beerId).subscribe(
      reponse => this.load(),
      error => console.log(error)
    );
  }

}

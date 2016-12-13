import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { BeerData } from '../../providers/beer-data';
import { ListData } from '../../providers/list-data';

import { List } from '../../models/list-model';
import { Beer } from '../../models/beer-model';


@Component({
  selector: 'page-my-list-detail',
  templateUrl: 'my-list-detail.html'
})
export class MyListDetailPage {

	list: List;	
  beers: Beer[] = [];
	editing: boolean = false;

  constructor(
  	public navCtrl: NavController,
  	public service: BeerData,
    public listService: ListData,
  	public navParams: NavParams)
  {
  	this.list = this.navParams.data;
  }

  ionViewWillEnter() {
  	this.load();
  }

  load() {
    this.service.load().subscribe(
      beers => this.deleteListBeers(beers),
      error => console.log(error)
    );
  }

  deleteListBeers(beers) {
    this.beers = beers.filter(beer => !this.searchInArray(beer));
  }

  searchInArray(beer) {
    let value: boolean = false;
    this.list.beers.map(listBeer => {
      if (listBeer._id === beer._id)  value = true;
    });
    return value;
  }

  startEditing(res) {
  	this.editing = res;
  }

  updateList() {
    this.list.beers = this.list.beers.concat(this.beers);
    this.list.beers = this.list.beers.filter(beer => beer.isChecked === true); 
    this.listService.updateList(this.list);
    this.startEditing(false);
  }

  deleteList() {
    this.listService.deleteList(this.list._id);
  }

}

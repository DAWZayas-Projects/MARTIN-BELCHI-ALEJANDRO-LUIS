import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { BeerData } from '../../providers/beer-data';
import { ListData } from '../../providers/list-data';
import { Beer } from '../../models/beer-model';

@Component({
  selector: 'page-add-list',
  templateUrl: 'add-list.html'
})
export class AddListPage {

  beers: Beer[] = [];
  name: string;
  description: string;

  constructor(
 		public navCtrl: NavController,
    public service: BeerData,
    public listService: ListData,
    public toastCtrl: ToastController
  ) {

  }

  ionViewWillEnter() {
  	this.load();
  }

  load() {
    this.service.load().subscribe(
      beers => this.createListArray(beers),
      error => console.log(error)
    );
  }

  createListArray(beers) {
    beers.map( (beer) => {
      this.beers.push(Object.assign({}, beer, { isChecked: false }))
    });
  }

  save() {
    var beersList = this.beers.filter(beer => beer.isChecked === true);
    var newList = Object.assign({}, {name: this.name}, {description: this.description}, {beers: beersList} );
    this.listService.saveList(newList);
    let toast = this.toastCtrl.create({
      message: 'Cerveza añadida correctamente.',
      duration: 2000,
      position: 'middle'
    });
    toast.present();
    this.beers = [];
    this.load();
    this.name = '';
    this.description = '';
  }
}

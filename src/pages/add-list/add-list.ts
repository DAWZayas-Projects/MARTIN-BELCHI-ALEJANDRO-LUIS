import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BeerData } from '../../providers/beer-data';
import { ListData } from '../../providers/list-data';
import { Beer } from '../../models/beer-model';
import { List } from '../../models/list-model';



@Component({
  selector: 'page-add-list',
  templateUrl: 'add-list.html'
})
export class AddListPage implements OnInit {

  beers: Beer[] = [];
  lists: List[] = [];
  name: string;
  description: string;

  constructor(
 		public navCtrl: NavController,
    public service: BeerData,
    public listService: ListData
  ) {

  }

  ngOnInit() {
  	this.load();
    //this.loadList();
  }

  load() {
    this.service.load().subscribe(
      beers => this.createListArray(beers),
      error => console.log(error)
    );
  }

  loadList() {
    this.ListService.load().subscribe(
      lists => this.lists = lists,
      error => console.log(error)
    );
  }

  createListArray(beers) {
    beers.map( (beer) => {
      this.beers.push(Object.assign({}, beer, { isChecked: false }))
    });
  }

  save() {
    var newList = Object.assign({}, { name: this.name}, {description: this.description}, {beers: this.beers} );
    console.log(newList);
    this.listService.saveList(newList);
  }
}

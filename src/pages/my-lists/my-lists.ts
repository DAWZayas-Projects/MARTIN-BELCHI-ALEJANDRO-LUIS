import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddListPage } from '../add-list/add-list';
import { MyListDetailPage } from '../my-list-detail/my-list-detail';
import { ListData } from '../../providers/list-data';
import { List } from '../../models/list-model';

@Component({
  selector: 'page-my-lists',
  templateUrl: 'my-lists.html'
})
export class MyListsPage {

	lists: List[] = []

  constructor(
  	public navCtrl: NavController,
    public ListService: ListData  	
  ) {}

  ionViewWillEnter() {
    this.loadList();
  }

  goToAddListPage() {
    console.log(this.lists);
    this.navCtrl.push(AddListPage);
  }

  goToSelectedList(list) {
    this.navCtrl.push(MyListDetailPage, list);
  }

  loadList() {
    this.ListService.load().subscribe(
      lists => this.lists = lists,
      error => console.log(error)
    );
  }

}

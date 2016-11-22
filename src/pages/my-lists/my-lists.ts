import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddListPage } from '../add-list/add-list';
import { ListData } from '../../providers/list-data';
import { List } from '../../models/list-model';

@Component({
  selector: 'page-my-lists',
  templateUrl: 'my-lists.html'
})
export class MyListsPage implements OnInit {

	lists: List[] = []

  constructor(
  	public navCtrl: NavController,
    public ListService: ListData  	
  ) {}

  ngOnInit() {
    this.loadList();
  }

  goToAddListPage() {
    this.navCtrl.push(AddListPage);
  }

  loadList() {
    this.ListService.load().subscribe(
      lists => this.lists = lists,
      error => console.log(error)
    );
  }

}

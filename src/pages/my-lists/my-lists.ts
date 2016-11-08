import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-my-lists',
  templateUrl: 'my-lists.html'
})
export class MyListsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AddFriend Page');
  }

}

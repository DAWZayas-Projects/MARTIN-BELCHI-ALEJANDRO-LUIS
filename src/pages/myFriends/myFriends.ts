import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MyBeersPage } from '../myBeers/myBeers';

@Component({
  selector: 'page-myFriends',
  templateUrl: 'myFriends.html'
})
export class MyFriendsPage {

  constructor(public navCtrl: NavController) {

  }

  nav(){
	this.navCtrl.push(MyBeersPage);
  	console.log('Hola');
  }


}

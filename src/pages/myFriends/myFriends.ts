import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AddFriendPage } from '../add-friend/add-friend';

@Component({
  selector: 'page-myFriends',
  templateUrl: 'myFriends.html'
})
export class MyFriendsPage {

  constructor(public navCtrl: NavController) {

  }

  nav(){
	this.navCtrl.push(AddFriendPage);
  }


}
 
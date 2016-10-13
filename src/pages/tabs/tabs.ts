import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MyBeersPage } from '../myBeers/myBeers';
import { MyFriendsPage } from '../myFriends/myFriends';
import { MyProfilePage } from '../myProfile/myProfile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = MyBeersPage;
  tab3Root: any = MyFriendsPage;
  tab4Root: any = MyProfilePage;

  constructor() {

  }
}

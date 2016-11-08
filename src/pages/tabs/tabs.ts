import { Component } from '@angular/core';


import { MyBeersPage } from '../my-beers/my-beers';
import { AddBeerPage } from '../add-beer/add-beer';
import { MyListsPage } from '../my-lists/my-lists';
import { MyProfilePage } from '../myProfile/myProfile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MyBeersPage;
  tab2Root: any = AddBeerPage;
  tab3Root: any = MyListsPage;
  tab4Root: any = MyProfilePage;

  constructor() {

  }
}

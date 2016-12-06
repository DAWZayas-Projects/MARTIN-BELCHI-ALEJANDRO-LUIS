import { Component } from '@angular/core';

import { MyBeersPage } from '../my-beers/my-beers';
import { AddBeerPage } from '../add-beer/add-beer';
import { MyListsPage } from '../my-lists/my-lists';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = MyBeersPage;
  tab2Root: any = AddBeerPage;
  tab3Root: any = MyListsPage;

  constructor() {

  }
}

import { NgModule } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';

import { MyBeersPage } from '../pages/my-beers/my-beers';
import { MyListsPage } from '../pages/my-lists/my-lists';
import { MyProfilePage } from '../pages/myProfile/myProfile';
import { AddBeerPage } from '../pages/add-beer/add-beer';
import { TabsPage } from '../pages/tabs/tabs';
// import { AddFriendPage } from '../pages/add-friend/add-friend';
import { AddListPage } from '../pages/add-list/add-list';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { BeerData } from '../providers/beer-data';
import { ListData } from '../providers/list-data';  


@NgModule({
  declarations: [
    MyApp,
    MyBeersPage,
    MyListsPage,
    AddListPage,
    MyProfilePage,
    AddBeerPage,
    TabsPage,
    TutorialPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyBeersPage,
    MyListsPage,
    AddListPage,
    MyProfilePage,
    AddBeerPage,
    TabsPage,
    TutorialPage
  ],
  providers: [ BeerData, ListData, Storage ]
})
export class AppModule {}

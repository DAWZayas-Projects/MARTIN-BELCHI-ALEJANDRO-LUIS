import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { MyBeersPage } from '../pages/my-beers/my-beers';
import { MyListsPage } from '../pages/my-lists/my-lists';

import { AddBeerPage } from '../pages/add-beer/add-beer';
import { AddListPage } from '../pages/add-list/add-list';

import { MyBeerDetailPage } from '../pages/my-beer-detail/my-beer-detail';
import { MyListDetailPage } from '../pages/my-list-detail/my-list-detail';

import { TutorialPage } from '../pages/tutorial/tutorial';

import { BeerData } from '../providers/beer-data';
import { ListData } from '../providers/list-data';  


@NgModule({
  declarations: [
    MyApp,
    MyBeersPage,
    MyListsPage,
    AddBeerPage,
    AddListPage,
    MyBeerDetailPage,
    MyListDetailPage,
    ContactPage,
    HomePage,
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
    AddBeerPage,
    AddListPage,
    MyBeerDetailPage,
    MyListDetailPage,
    ContactPage,
    HomePage,
    TabsPage,
    TutorialPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, BeerData, ListData, ]
})
export class AppModule {}

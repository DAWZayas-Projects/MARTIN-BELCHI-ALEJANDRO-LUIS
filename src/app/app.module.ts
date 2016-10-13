import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyBeersPage } from '../pages/myBeers/myBeers';
import { MyFriendsPage } from '../pages/myFriends/myFriends';
import { MyProfilePage } from '../pages/myProfile/myProfile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    MyBeersPage,
    MyFriendsPage,
    MyProfilePage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyBeersPage,
    MyFriendsPage,
    MyProfilePage,
    HomePage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}

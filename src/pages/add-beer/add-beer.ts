import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { BeerData } from '../../providers/beer-data';

@Component({
  selector: 'page-add-beer',
  templateUrl: 'add-beer.html'
})
export class AddBeerPage {
	beer: { name: string , brewery: string , country: string, style: string, favorite: boolean, description: string };
	submitted: boolean = false;

  constructor(
    public navCtrl: NavController,
    public beerData : BeerData,
    public toastCtrl: ToastController
   ) {
    this.beer = { name: '', brewery: '', country: '', style: '', favorite: false, description: '' };
   }

  providerAddBeer(form) {
  	this.submitted = true;

  	if (form.valid) {
      this.beer.favorite = false;
      this.beerData.saveBeer(this.beer);
      this.beer = { name: '', brewery: '', country: '', style: '', favorite: false, description: '' };
      this.submitted = false;

      let toast = this.toastCtrl.create({
        message: 'Cerveza añadida correctamente.',
        duration: 2000,
        position: 'middle'
      });
      toast.present();
  	}
  }

}

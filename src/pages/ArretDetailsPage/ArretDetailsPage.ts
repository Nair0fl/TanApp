import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Arret } from '../home/arret'
import { Arrets } from '../home/arrets'
import { Horraires } from './Horraires'
import { Horraire } from './Horraire'
@Component({
  selector: 'ArretDetailsPage',
  templateUrl: 'ArretDetailsPage.html',
})
export class ArretDetailsPage {
  arret:Arret;
  horraires:Horraires
constructor(public navCtrl: NavController, private navParams: NavParams, private httpClient: HttpClient) {
  this.arret = navParams.get('arrets');
  this.httpClient.get('http://open.tan.fr/ewp/tempsattente.json/'+this.arret.codeLieu).subscribe(data => {
        this.horraires=data
        console.log(this.horraires)
      });
}

ionViewDidLoad() {


  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Arret } from './arret'
import { Arrets } from './arrets'
import{ArretDetailsPage} from '../ArretDetailsPage/ArretDetailsPage'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  arrets: Arrets;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {
  this.httpClient.get('http://open.tan.fr/ewp/arrets.json').subscribe(data => {
        this.arrets=data
      });
  }

  openDetails(arrets) {
    this.navCtrl.push(ArretDetailsPage, {arrets: arrets});
    
  }
}

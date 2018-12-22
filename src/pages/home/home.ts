import { DataProvider } from './../../providers/data/data';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('slides') slides: any;

  slideOptions: any;
  flashCardFlipped: boolean = false;

  constructor(public navCtrl: NavController, public dataService: DataProvider) {

  }

  ionViewDidLoad() {
 
  }

  selectAnswer(){
    this.flashCardFlipped = true;
  }

}

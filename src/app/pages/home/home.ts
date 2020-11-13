import {Component, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'page-welcome',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss'],
})
export class HomePage {

  slideOpts = {
    speed: 1000,
    autoplay: {
      delay: 3000,
    }
  };

  @ViewChild('slides', {static: true}) slides: IonSlides;

  constructor() {
  }
}

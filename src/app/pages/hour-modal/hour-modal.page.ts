import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hour-modal',
  templateUrl: './hour-modal.page.html',
  styleUrls: ['./hour-modal.page.scss'],
})
export class HourModalPage {
  public timeList = [];

  constructor(private modalCtrl: ModalController) { }

  save() {
    this.timeList.push(new Date());
    this.modalCtrl.dismiss({ timeList: this.timeList });
  }

  close() {
    this.modalCtrl.dismiss();
  }
}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { environment } from 'src/environments/environment';

import * as moment from 'moment';

@Component({
  selector: 'app-hour-modal',
  templateUrl: './hour-modal.page.html',
  styleUrls: ['./hour-modal.page.scss'],
})
export class HourModalPage implements OnInit {
  public timeList = [];
  public selectedDate: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.selectedDate = moment.utc(this.selectedDate).local().format('dddd E');
  }

  insert() {
    const now = moment().utc().format(environment.datetime.defaultFormat);
    const localTime = moment.utc(now).local().format(environment.time.defaultFormat);
    this.timeList.push(localTime);
  }

  save() {
    this.modalCtrl.dismiss({ timeList: this.timeList });
  }

  close() {
    this.modalCtrl.dismiss();
  }
}

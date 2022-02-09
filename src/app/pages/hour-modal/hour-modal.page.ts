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

  private event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true,
    timeList: []
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.event.startTime = moment.utc(this.selectedDate).local();
    this.selectedDate = this.event.startTime.format('dddd E');
    this.event.title = this.selectedDate;
  }

  insert() {
    const now = moment().utc().format(environment.datetime.defaultFormat);
    const localTime = moment.utc(now).local().format(environment.time.defaultFormat);
    this.timeList.push(localTime);
    this.event.timeList = this.timeList;
  }

  save() {
    this.modalCtrl.dismiss({ event: this.event });
  }

  close() {
    this.modalCtrl.dismiss();
  }
}

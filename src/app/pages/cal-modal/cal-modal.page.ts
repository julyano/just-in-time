import { Component, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarMode } from 'ionic2-calendar/calendar';

@Component({
  selector: 'app-cal-modal',
  templateUrl: './cal-modal.page.html',
  styleUrls: ['./cal-modal.page.scss'],
})
export class CalModalPage implements AfterViewInit {
  calendar = {
    mode: 'month' as CalendarMode,
    currentDate: new Date()
  };
  viewTitle: string;

  event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true
  };

  modalReady = false;
  public lockSwipes = false;

  constructor(private modalCtrl: ModalController) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);

    setTimeout(() => {
        this.lockSwipes = true;
    },100);
  }

  save() {
    this.modalCtrl.dismiss({event: this.event});
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onTimeSelected(ev) {
    this.event.startTime = new Date(ev.selectedTime);
  }

  close() {
    this.modalCtrl.dismiss();
  }
}

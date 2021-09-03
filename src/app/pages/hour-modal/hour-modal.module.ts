import { HourModalPage } from './hour-modal.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgCalendarModule  } from 'ionic2-calendar';
import { HourModalPageRoutingModule } from './hour-modal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HourModalPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [HourModalPage]
})
export class HourModalPageModule {}

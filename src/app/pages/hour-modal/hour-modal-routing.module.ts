import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HourModalPage } from './hour-modal.page';

const routes: Routes = [
  {
    path: '',
    component: HourModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HourModalPageRoutingModule {}

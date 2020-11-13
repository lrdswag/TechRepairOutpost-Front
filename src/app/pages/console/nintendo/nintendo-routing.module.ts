import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NintendoPage } from './nintendo.page';

const routes: Routes = [
  {
    path: '',
    component: NintendoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NintendoPageRoutingModule {}

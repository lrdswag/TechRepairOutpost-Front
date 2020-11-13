import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockAvailablePage } from './stock-available.page';

const routes: Routes = [
  {
    path: '',
    component: StockAvailablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockAvailablePageRoutingModule {}

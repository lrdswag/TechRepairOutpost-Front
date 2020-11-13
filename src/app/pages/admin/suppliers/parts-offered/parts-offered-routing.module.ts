import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartsOfferedPage } from './parts-offered.page';

const routes: Routes = [
  {
    path: '',
    component: PartsOfferedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartsOfferedPageRoutingModule {}

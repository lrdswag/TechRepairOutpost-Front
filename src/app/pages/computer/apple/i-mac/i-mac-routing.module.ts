import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IMacPage } from './i-mac.page';

const routes: Routes = [
  {
    path: '',
    component: IMacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IMacPageRoutingModule {}

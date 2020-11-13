import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MacbookPage } from './macbook.page';

const routes: Routes = [
  {
    path: '',
    component: MacbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MacbookPageRoutingModule {}

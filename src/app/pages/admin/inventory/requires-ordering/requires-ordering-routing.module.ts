import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequiresOrderingPage } from './requires-ordering.page';

const routes: Routes = [
  {
    path: '',
    component: RequiresOrderingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequiresOrderingPageRoutingModule {}

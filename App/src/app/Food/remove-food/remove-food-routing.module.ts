import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoveFoodPage } from './remove-food.page';

const routes: Routes = [
  {
    path: '',
    component: RemoveFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoveFoodPageRoutingModule {}

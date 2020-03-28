import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFoodPage } from './my-food.page';

const routes: Routes = [
  {
    path: '',
    component: MyFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFoodPageRoutingModule {}

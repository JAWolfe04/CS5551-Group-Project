import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyFoodPageRoutingModule } from './my-food-routing.module';

import { MyFoodPage } from './my-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyFoodPageRoutingModule
  ],
  declarations: [MyFoodPage]
})
export class MyFoodPageModule {}

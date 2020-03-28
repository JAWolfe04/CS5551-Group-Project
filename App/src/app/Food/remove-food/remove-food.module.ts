import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoveFoodPageRoutingModule } from './remove-food-routing.module';

import { RemoveFoodPage } from './remove-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoveFoodPageRoutingModule
  ],
  declarations: [RemoveFoodPage]
})
export class RemoveFoodPageModule {}

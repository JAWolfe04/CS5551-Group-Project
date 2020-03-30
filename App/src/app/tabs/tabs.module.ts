import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { RemoveFoodPageModule } from '../Food/remove-food/remove-food.module';
import { RemoveExercisePageModule } from '../Exercise/remove-exercise/remove-exercise.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    RemoveFoodPageModule,
    RemoveExercisePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

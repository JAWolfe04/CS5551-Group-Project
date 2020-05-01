import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoveExercisePageRoutingModule } from './remove-exercise-routing.module';

import { RemoveExercisePage } from './remove-exercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoveExercisePageRoutingModule
  ],
  declarations: [RemoveExercisePage]
})
export class RemoveExercisePageModule {}

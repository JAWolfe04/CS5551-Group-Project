import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyExercisePageRoutingModule } from './my-exercise-routing.module';

import { MyExercisePage } from './my-exercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyExercisePageRoutingModule
  ],
  declarations: [MyExercisePage]
})
export class MyExercisePageModule {}

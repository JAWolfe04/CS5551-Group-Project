import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyExercisePage } from './my-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: MyExercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyExercisePageRoutingModule {}

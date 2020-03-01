import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmitforgotpasswordPage } from './submitforgotpassword.page';

const routes: Routes = [
  {
    path: '',
    component: SubmitforgotpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmitforgotpasswordPageRoutingModule {}

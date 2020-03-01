import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmitforgotpasswordPageRoutingModule } from './submitforgotpassword-routing.module';

import { SubmitforgotpasswordPage } from './submitforgotpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmitforgotpasswordPageRoutingModule
  ],
  declarations: [SubmitforgotpasswordPage]
})
export class SubmitforgotpasswordPageModule {}

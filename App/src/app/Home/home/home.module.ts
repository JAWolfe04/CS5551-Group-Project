import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { ChartsModule } from 'ng2-charts';
import { HomePage } from './home.page';


@NgModule({
  imports: [
    CommonModule, FormsModule, ChartsModule, IonicModule, HomePageRoutingModule
  ],
  declarations: [HomePage],
  bootstrap: [HomePage],
})
export class HomePageModule {}

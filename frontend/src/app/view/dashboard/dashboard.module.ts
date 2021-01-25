import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './pages/home/home.page';

import { HomePageRoutingModule } from './dashboard-routing.module';

import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { TarjetComponent } from './util/tarjet/tarjet.component';
import { SearchComponent } from './util/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
    FooterComponent,
    HeaderComponent,
    TarjetComponent,
    SearchComponent
  ]
})
export class DashboardPageModule {}

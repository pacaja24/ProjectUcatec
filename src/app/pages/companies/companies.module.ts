import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IonicRatingModule } from 'ionic4-rating';

import { CompaniesPageRoutingModule } from './companies-routing.module';

import { CompaniesPage } from './companies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompaniesPageRoutingModule,
    IonicRatingModule
  ],
  declarations: [CompaniesPage]
})
export class CompaniesPageModule {}

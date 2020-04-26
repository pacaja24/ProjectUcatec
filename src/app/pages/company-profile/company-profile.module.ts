import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyProfilePageRoutingModule } from './company-profile-routing.module';

import { CompanyProfilePage } from './company-profile.page';
import { IonicRatingModule } from 'ionic4-rating';
import { NewratingModule } from 'src/app/components/newrating/newrating.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    NewratingModule,
    CompanyProfilePageRoutingModule
  ],
  declarations: [CompanyProfilePage]
})
export class CompanyProfilePageModule {}

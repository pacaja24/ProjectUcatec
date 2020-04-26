import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicRatingModule } from 'ionic4-rating';
import { NewratingComponent } from './newrating.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicRatingModule
  ],
  declarations: [NewratingComponent],
  exports: [NewratingComponent]
})
export class NewratingModule {}
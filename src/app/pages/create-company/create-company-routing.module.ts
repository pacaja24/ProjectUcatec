import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCompanyPage } from './create-company.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCompanyPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { BackendDevelopmentTechnologiesComponent } from './backendDevelopmentTechnologies.component';
import { PageNotFoundModule } from '../../PageNotFound/page-not-found.module';

@NgModule({
  declarations: [BackendDevelopmentTechnologiesComponent],
  imports: [
    CommonModule,
    PageNotFoundModule,
    RouterModule.forChild([{ path: '', component: BackendDevelopmentTechnologiesComponent }]) // Route for backend development technologies
  ]
})
export class BackendDevelopmentTechnologiesModule {}

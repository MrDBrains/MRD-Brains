import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FrontendDevelopmentTechnologiesComponent } from './frontendDevelopmentTechnologies.component';
import { PageNotFoundModule } from '../../PageNotFound/page-not-found.module';

@NgModule({
  declarations: [FrontendDevelopmentTechnologiesComponent],
  imports: [
    CommonModule,
    PageNotFoundModule,
    RouterModule.forChild([{ path: '', component: FrontendDevelopmentTechnologiesComponent }]) // Route for frontend development technologies
  ]
})
export class FrontendDevelopmentTechnologiesModule {}

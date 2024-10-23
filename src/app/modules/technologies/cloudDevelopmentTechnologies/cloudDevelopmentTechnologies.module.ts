import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CloudDevelopmentTechnologiesComponent } from './cloudDevelopmentTechnologies.component';
import { PageNotFoundModule } from '../../PageNotFound/page-not-found.module';

@NgModule({
  declarations: [CloudDevelopmentTechnologiesComponent],
  imports: [
    PageNotFoundModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: CloudDevelopmentTechnologiesComponent }]) // Route for cloud development technologies
  ]
})
export class CloudDevelopmentTechnologiesModule {}

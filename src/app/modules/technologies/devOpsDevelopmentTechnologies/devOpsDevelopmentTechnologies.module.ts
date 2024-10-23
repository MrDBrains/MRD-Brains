import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DevOpsDevelopmentTechnologiesComponent } from './devOpsDevelopmentTechnologies.component';
import { PageNotFoundModule } from '../../PageNotFound/page-not-found.module';

@NgModule({
  declarations: [DevOpsDevelopmentTechnologiesComponent],
  imports: [
    CommonModule,
    PageNotFoundModule,
    RouterModule.forChild([{ path: '', component: DevOpsDevelopmentTechnologiesComponent }]) // Route for DevOps development technologies
  ]
})
export class DevOpsDevelopmentTechnologiesModule {}

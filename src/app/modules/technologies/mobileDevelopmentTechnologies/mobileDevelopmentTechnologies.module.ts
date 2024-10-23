import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileDevelopmentTechnologiesComponent } from './mobileDevelopmentTechnologies.component';
import { PageNotFoundModule } from '../../PageNotFound/page-not-found.module';

@NgModule({
  declarations: [MobileDevelopmentTechnologiesComponent],
  imports: [
    CommonModule,
    PageNotFoundModule,
    RouterModule.forChild([{ path: '', component: MobileDevelopmentTechnologiesComponent }]) // Route for mobile development technologies
  ]
})
export class MobileDevelopmentTechnologiesModule {}

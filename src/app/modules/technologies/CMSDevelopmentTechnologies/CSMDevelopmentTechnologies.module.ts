import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CMSDevelopmentTechnologiesComponent } from './CMSDevelopmentTechnologies.component';
import { PageNotFoundModule } from '../../PageNotFound/page-not-found.module';

@NgModule({
  declarations: [CMSDevelopmentTechnologiesComponent],
  imports: [
    CommonModule,
    PageNotFoundModule,
    RouterModule.forChild([{ path: '', component: CMSDevelopmentTechnologiesComponent }]) // Route for CMS development technologies
  ]
})
export class CMSDevelopmentTechnologiesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DatabaseDevelopmentTechnologiesComponent } from './databaseDevelopmentTechnologies.component';
import { PageNotFoundModule } from '../../PageNotFound/page-not-found.module';

@NgModule({
  declarations: [DatabaseDevelopmentTechnologiesComponent],
  imports: [
    CommonModule,
    PageNotFoundModule,
    RouterModule.forChild([{ path: '', component: DatabaseDevelopmentTechnologiesComponent }]) // Route for database development technologies
  ]
})
export class DatabaseDevelopmentTechnologiesModule {}

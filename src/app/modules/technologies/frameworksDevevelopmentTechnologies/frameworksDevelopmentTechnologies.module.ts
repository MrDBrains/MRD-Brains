import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FrameworksDevevelopmentTechnologiesComponent } from './frameworksDevevelopmentTechnologies.component';

@NgModule({
  declarations: [FrameworksDevevelopmentTechnologiesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FrameworksDevevelopmentTechnologiesComponent }]) // Route for frameworks development technologies
  ]
})
export class FrameworksDevevelopmentTechnologiesModule {}

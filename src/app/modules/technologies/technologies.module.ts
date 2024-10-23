import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Import shared module if needed
import { SharedModule } from '../../shared/shared.module'; 

// Import your components
import { FrontendDevelopmentTechnologiesComponent } from './frontendDevelopmentTechnologies/frontendDevelopmentTechnologies.component';
import { BackendDevelopmentTechnologiesComponent } from './backendDevelopmentTechnologies/backendDevelopmentTechnologies.component';
import { CloudDevelopmentTechnologiesComponent } from './cloudDevelopmentTechnologies/cloudDevelopmentTechnologies.component';
import { CMSDevelopmentTechnologiesComponent } from './CMSDevelopmentTechnologies/CMSDevelopmentTechnologies.component';
import { DatabaseDevelopmentTechnologiesComponent } from './databaseDevelopmentTechnologies/databaseDevelopmentTechnologies.component';
import { DevOpsDevelopmentTechnologiesComponent } from './devOpsDevelopmentTechnologies/devOpsDevelopmentTechnologies.component';
import { MobileDevelopmentTechnologiesComponent } from './mobileDevelopmentTechnologies/mobileDevelopmentTechnologies.component';
import { FrameworksDevevelopmentTechnologiesComponent } from './frameworksDevevelopmentTechnologies/frameworksDevevelopmentTechnologies.component';
import { PageNotFoundModule } from '../PageNotFound/page-not-found.module';

// Define routes specific to this module
const routes: Routes = [
  { path: 'frontend', component: FrontendDevelopmentTechnologiesComponent },
  { path: 'backend', component: BackendDevelopmentTechnologiesComponent },
  { path: 'mobile', component: MobileDevelopmentTechnologiesComponent },
  { path: 'database', component: DatabaseDevelopmentTechnologiesComponent },
  { path: 'frameworks', component: FrameworksDevevelopmentTechnologiesComponent },
  { path: 'cloud', component: CloudDevelopmentTechnologiesComponent },
  { path: 'devops', component: DevOpsDevelopmentTechnologiesComponent },
  { path: 'cms', component: CMSDevelopmentTechnologiesComponent },
];

@NgModule({
  declarations: [
   

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
    SharedModule, 
    PageNotFoundModule
  ],
  exports: [
   
  ],
})
export class TechnologiesModule {}
